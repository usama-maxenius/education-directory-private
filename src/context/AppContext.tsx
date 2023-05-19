import { FC, createContext, ReactNode, useState, useEffect } from 'react';
import fetchDataFrom from '../pages/api/fetchDataFrom';
import ReactGA from 'react-ga';
import { getZipCodeData } from '@/pages/api';

type IProps = {
    children: ReactNode;
};

export const AppContext = createContext({} as IAppContextProps);

export const AppContextProvider: FC<IProps> = ({ children }) => {
    const [deviceType, setDeviceType] = useState('' as string);
    const [width, setWidth] = useState(0 as number);
    const [appTitle, setAppTitle] = useState('Education Directory Home Page' as string);
    const [programSlug, setProgramSlug] = useState([] as ProgramSlug[]);
    const [uniList, setUniList] = useState({});
    const [pageLogos, setPageLogos] = useState([] as any);
    const [currentPage, setCurrentPage] = useState('' as string);
    const [navType, setNavType] = useState('tertiary' as string);
    const [showSubNav, setShowSubNav] = useState(false as boolean);
    const [searchIdentifier, setSearchIdentifier] = useState({accesskey: '', search_identifier: ''} as ISearchResponse);
    const [footerText, setFooterText] = useState('' as string);

    const [stepsData, setStepsData] = useState<StepData>({
        current: 1,
        gender: '',
        online_or_campus: 'Either',
        hsyear: '',
        areas_of_interest: [],
        current_education_level: '',
        rn_license: '',
        email: '',
        phone: '',
        zip_code: '',
        address_line1: '',
        currently_enrolled_in_college: '',
        computer_internet_access: '',
        us_citizen: '',
        preferred_enrollment: '0',
        channel_name: 'Web',
        address_line2: '',
        age: '',
        city: '',
        first_name: '',
        is_contacted_by_school: '',
        last_name: '',
        phone2: '',
        preferred_education_level: '',
        state: '',
        military: {
            military_status: '',
            military_affiliation: 'Active Duty',
            relationship: '',
        },
        searchIdentifier: ''

    });

    const [whiteGStepsData, setWhiteGStepsData] = useState({
        current: 1,
        in_school: '',
        school_to_attend: '',
        age: '15',
        hsyear: '',
        current_education_level: 'G.E.D',
        enrolled_in_school: '0',
        teaching_certificate: '',
        nurse: '',
        online_or_campus: 'Campus',
        computer_access: '',
        us_citizen: '',
        military: '',
        military_affiliation: '',
        email: '',
        areas_of_interest: [],
        phone: '',
        first_name: '',
        last_name: '',
        address: '',
    });

    useEffect(() => {
        setWidth(window.innerWidth);
        fetchDataFrom('pages/').then(async (pages) => {
            const data = await pages.json();
            const uList: any = {};
            const result = data?.results[0]?.logos?.map((logo: any) => logo);
            setPageLogos(result);
            data?.results?.map(
                (p: any) =>
                (uList[p.careers_heading] = p.programs.map((r: any) => ({
                    title: r.program_as_heading,
                    slug: r.slug,
                })))
            );
            setUniList(uList);
        });

        fetchDataFrom('pages/?headers_only=True').then(async (heros) => {
            const heroResponse = await heros.json();
            const data = heroResponse?.results.map((item: IResults) => {
                return {
                    slug: item.slug,
                    title: item.hero_heading,
                    text: item.hero_text,
                    image: item.hero_image
                };
            });
            setProgramSlug(data);
        });
    }, []);
    useEffect(()=>{
        // ReactGA.event({
        //     category: `I’d Like my Classes ${stepsData.current}`,
        //     action: `Get Started ${stepsData.current}`,
        //     label: 'I’d Like my Classes'
        // });
        // console.log('stepsData', {
        //     category: `I’d Like my Classes ${stepsData.current}`,
        //     action: `Get Started ${stepsData.current}`,
        //     label: 'I’d Like my Classes'
        // });
        console.log(whiteGStepsData);
    }, [whiteGStepsData]);
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    useEffect(()=>{
        if(width > 1020) {
            setDeviceType('Desktop');
            console.log('Desktop');
        } else if(width > 550 && width <= 1020){
            setDeviceType('Tablet');
            console.log('Tablet');
        } else if (width <= 550) {
            setDeviceType('Mobile');
            console.log('Mobile');
        } 
    }, [width]);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    };

    const handleStarted = async (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
        if(stepsData.current == 7) {
            stepsData.areas_of_interest.filter(value => value !== 'selectall');
        };
    };


    const defaultContext = {
        appName: 'Education Directory',
        appTitle,  setAppTitle,
        navType, setNavType,
        showSubNav, setShowSubNav,
        currentPage, setCurrentPage,
        stepsData,  setStepsData,
        searchIdentifier, setSearchIdentifier,
        uniList,
        programSlug, handleStarted, pageLogos,
        deviceType, 
        setFooterText, footerText,
        whiteGStepsData, setWhiteGStepsData,
    };

    return (
        <AppContext.Provider value={defaultContext}>
            {children}
        </AppContext.Provider>
    );
};
