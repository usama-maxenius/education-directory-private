import { useContext, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { AppContext } from '@/context/AppContext';
import Head from 'next/head';
import NewNavbar from '@/components/NewNav';
import Footer from '@/components/Footer';
import ReactGA from 'react-ga';
import CustomScripts from '@/scripts';

// google analytics
const TRACKING_ID = 'UA-000000-00'; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const Lauout = ({children}: {children: React.ReactNode})=> {
    const { appTitle, showSubNav } = useContext(AppContext);

    useEffect(()=>{
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    ReactGA.exception({
        description: 'An error ocurred',
        fatal: true,
    });

    return (
        <>
            <Head>
                <title>{appTitle}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <CustomScripts />

            <NewNavbar />
            <Box mt={showSubNav ? '125px': '72px'}>
                { children }
            </Box>
            <Footer />
        </>
    );
};

export default Lauout;