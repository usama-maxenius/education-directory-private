import { FC, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { AppContext } from '@/context/AppContext';
import Two, { CurrentStatus } from '@/components/FormSteps/Two';
import Three from '@/components/FormSteps/Three';
import Four from '@/components/FormSteps/Four';
import Five from '@/components/FormSteps/Five';
import Six from '@/components/FormSteps/Six';
import Seven from '@/components/FormSteps/Seven';
import { Text, Box, Stack } from '@chakra-ui/react';
import Step from '@/components/Step';
import { howItWorksData, Image_Quality } from '@/appConstants';
import ProgressBar from '@/components/Progress';

const GetStarted: FC = (): JSX.Element => {
    const router = useRouter();
    const { setNavType, stepsData, setStepsData, setShowSubNav, pageLogos, deviceType } = useContext(AppContext);

    useEffect(()=> {
        setNavType('primary');
        setShowSubNav(false);
        if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
            // console.info( "This page is reloaded" );
            router.push(
                { pathname: '/get-started/2' },
                undefined, 
                { shallow: true }
            );
            setStepsData({ ...stepsData, current: 2 });
        } else {
            // console.info( "This page is not reloaded");
            setStepsData({ ...stepsData, current: 2 });
        }
    }, []);

    return (
        <>
            {/* <Box bg='ED.white' className={`form-steps ${stepsData.current >= 2 && 'fade-in'}`}> */}
                <Box bg='ED.lotion' h='750px' pt='57px'>
                    <ProgressBar width={((stepsData.current - 1)/7)*100} />

                    { stepsData.current === 2 && <Two /> }
                    { stepsData.current === 3 && <Three /> }
                    { stepsData.current === 4 && <Four /> }
                    { stepsData.current === 5 && <Five /> }
                    { stepsData.current === 6 && <Six /> }
                    { stepsData.current === 7 && <Seven /> }
                </Box>

                {/* Logos Section */}
                <Box className='logos'>
                    <Box my={`${deviceType == 'Mobile' ? '39px' : ''}`} className='container'>
                        <Box className='logos__grid'>
                            {pageLogos?.map(
                                ({ id, image, link, name }, i) => (
                                    <Box key={`logo-${id}`} className='logos__grid__col'>
                                        <Link href={link}>
                                            <Image
                                                src={image}
                                                loading='lazy'
                                                quality={Image_Quality}
                                                width={i !== 5 ? 100 : 188}
                                                height={80}
                                                className='logos'
                                                alt={name}
                                            />
                                        </Link>
                                    </Box>
                                )
                            )}
                        </Box>
                    </Box>
                </Box>

                {/* How it works section */}
                <Stack className='step_wrapper' id='how-it-works'>
                    <Box className='container'>
                        <Text 
                            align='center'
                            color='ED.fontColorPrimary' 
                            fontFamily='IBM Plex Serif' 
                            fontSize='6xl'
                            fontWeight='600'
                        >
                            How it works
                        </Text>
                        <Box className='child_wrapper'>
                            {howItWorksData?.map(
                            ({ id, content, icon, stepNumber }) => (
                                <Step
                                    key={id}
                                    stepNumber={stepNumber}
                                    content={content}
                                    icon={icon}
                                />
                            )
                            )}
                        </Box>
                    </Box>
                </Stack>
            {/* </Box> */}
        </>
    );
};

export default GetStarted;