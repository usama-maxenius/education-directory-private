import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getResults } from '../api/getResultThankYouPages';
import { thanksPolicy } from '@/appConstants';
import { AppContext } from '@/context/AppContext';
import Image from 'next/image';
import ResultCard from '@/components/ResultCard';
import TermsCheckbox from '@/components/TermsCheckbox';
import CountdownApp from '../thank-you/components/timer';
import ThankYouModel from '../thank-you/Thankyou-model/thankyou-model';
import closeIcon from '@/assets/icons/close.svg';
import styles from './index.module.css';

const { thankYouPage, thankYouContent, TYCDetail, cardLoading, thankYouResults, resultWrapper, termCondition, pToggle } = styles;

const ThankYou = (): JSX.Element => {
    const router = useRouter();
    const { query } = useRouter();
    const { setCurrentPage, stepsData, setStepsData, setNavType } = useContext(AppContext);
    const [searchResults, setSearchResults] = useState([] as IResultSearch[]);
    const [acceptTerms, setAcceptTerms] = useState(false as boolean);
    const [policyToggle, setPolicyToggle] = useState(false as boolean);
    const [isSubmit, setIsSubmit] = useState(false as boolean);
    const [showModel, setShowModel] = useState(false as boolean);
    const [fetchCount, setFetchCount] = useState(0 as number);
    const [notIntrested, setNotIntersted] = useState([] as string[]);
    const [policyString, setPolicyString] = useState(thanksPolicy);
    const [searchTill, setSearchTill] = useState(3 as number);
    
    const remaining = searchResults?.length - notIntrested.length;
    const hasResults = (searchResults?.length > 0 && remaining);

    useEffect(()=> console.log('query path is', query), [query]);
    useEffect(()=> {
        setNavType('tertiary');
        setCurrentPage('thankyou');
        const data: StepData = JSON.parse(localStorage.getItem('getStarted')!);
        setStepsData(data);
        localStorage.removeItem('getStarted');
    }, []);

    useEffect(()=> {
        if(!showModel) {
            getR();
        }
    }, [fetchCount]);

    useEffect(()=> {
        remaining !== remaining && router.push('/interested-programs');
        const universityNames = searchResults?.map(r=> !notIntrested.includes(r.schoolid)? r.brand_name: '');
        const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
        setPolicyString(thanksPolicy.replaceAll('universityNames', formatter.format(universityNames)));
        // setTimeout(()=> {
        //     // setCurrentPage('/interested-programs');
        //     router.push('/interested-programs');
        // }, 1000);
        
    }, [remaining]);

    const getR = async ()=> {
        const res = await getResults({search_identifier: stepsData?.searchIdentifier});
        setSearchResults(res as IResultSearch[]);
        setTimeout(()=> {
            setFetchCount(fetchCount+1);
        }, 10000);
    };

    const closeThankYouModal = () => {
        setShowModel(false);
        router.push('interested-programs');
    };

    return (
        <div className={`container ${thankYouPage}`}>
            <div className={thankYouContent}>
                <h1 className='h1 text-primary'>
                    {
                        (searchResults?.length < 0 || fetchCount < 2) ? 
                        'Please wait while we are finding the best matches for you.' : hasResults ? `We have ${remaining} schools that are looking for you.`
                        : remaining === 0 ? 'We are sorry right now we don\'t have more matches for you.' : `We are sorry we couldn\'t find best matches for you`
                    }
                </h1>
                {
                    !!hasResults && <>
                        <p className={`${TYCDetail} text-base`}>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.</p>
                        <p className={`${TYCDetail} text-base`}>Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz.</p>
                    </>
                }
            </div>
            <div className={thankYouResults}>
                <div className={resultWrapper}>
                {
                    (searchResults?.length < 0 && fetchCount < 2)
                    ? <div className={cardLoading}>Loading...</div>
                    : searchResults?.slice(0, searchTill)?.map(result=> !notIntrested.includes(result.schoolid) &&
                        <ResultCard
                            key={result.result_identifier}
                            school={result}
                            submit={isSubmit}
                            notIntrested={(schoolid: string)=> {notIntrested.push(schoolid); setNotIntersted([...notIntrested]); if(searchResults.length>searchTill){setSearchTill(pre=> pre+1);}}}
                        />
                    )
                }
                </div>
                {
                    !!hasResults && <>
                        <div className={termCondition}>
                            <TermsCheckbox
                                onChange={check => setAcceptTerms(check)}
                            />
                            <p className='text-xs' style={{marginLeft: 12}}>
                                {policyString.substring(0, (policyToggle? thanksPolicy.length: 207))}
                                <span className={`${pToggle} text-primary`} onClick={()=> setPolicyToggle(!policyToggle)}> show {policyToggle? 'less': 'more'}...</span>
                            </p>
                        </div>
                        <div className='thankyou__submitRequest'>
                            <button className={`btn-primary thankyou__submitBtn  w-btn  h-btn text-white h4 ${!acceptTerms && 'cursor-disabled'}`}
                                disabled={!acceptTerms}
                                style={{opacity: !acceptTerms? '0.5': '1'}}
                                onClick={()=> { setIsSubmit(true); setShowModel(true); }}
                            >
                                Submit
                            </button>
                            <div className='text-xs thankyou__timer'>
                                Offer refresh in &nbsp;
                                <CountdownApp />
                                <div className='thankyou__loading' />
                            </div>
                        </div>
                    </>
                }
            </div>
            {
                showModel && <div className='container'>
                    <div className='bg-primary thankyou__model'>
                        <div
                            onClick={closeThankYouModal}
                            className='model--closeBtn'
                        >
                            <Image src={closeIcon} alt='' />
                        </div>
                        <ThankYouModel />
                    </div>
                </div>
            }
        </div>
    );
};

export default ThankYou;