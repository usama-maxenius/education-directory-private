import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowChevronIcon } from '@/assets/icons';
import LogoSvg from '@/assets/icons/logo.svg';
import { Box, Text, Stack, HStack, Select, Button, UnorderedList, ListItem, Flex } from '@chakra-ui/react';

import styles from './index.module.css';
import { whiten } from '@chakra-ui/theme-tools';
const { outer_box, btn, white_card, icon_box, progress, progress_bar } = styles;

const schoolSearch: FC = ():JSX.Element => {
    return(
        <>
            <Stack>
                <Box w='100%'>
                    <Text textAlign='center' color='ED.secondary' fontFamily='IBM Plex Sans' fontSize='34px' fontWeight='600'>Featured Online Degree Programs in 2022*</Text>
                </Box>
                <Box w='100%' bg='ED.primary'>
                    <Box className={outer_box}>
                        <Text py='2' color='ED.white' fontFamily='IBM Plex Sans' fontSize='22px' fontWeight='500'>Request FREE information from a college advisor. Hurry, classes start soon!</Text>
                        <Text py='2' color='ED.white' fontFamily='IBM Plex Sans' fontSize='14px' fontWeight='600'>Sponsored Schools</Text>
                    </Box>
                </Box>
            </Stack>
            <Flex className='container' mb='165px'>
                <Box w='81%'>
                    <Box my='4'>
                        <Text textAlign='center' fontFamily='IBM Plex Sans' fontSize='15px' fontWeight='500'>Last Updated: May 16, 2023 for Prospective Students in Punjab</Text>
                    </Box>
                    <Flex direction='row' gap='100px' justify='center' mb='8'>
                        <Flex py='5px' px='25px' align='center' justify='center' gap='10px'>
                            <Text bg='ED.primary' color='ED.white' fontSize='20px' h='40px' w='40px' borderRadius='6px' textAlign='center' className={btn}>1</Text>
                            <Text color='ED.primary' fontFamily='IBM Plex Sans' fontSize='20px' fontWeight='500'>Compare</Text>
                        </Flex>
                        <Flex py='5px' px='25px' align='center' justify='center' gap='10px'>
                            <Text bg='ED.primary' color='ED.white' fontSize='20px' h='40px' w='40px' borderRadius='6px' textAlign='center' className={btn}>2</Text>
                            <Text color='ED.primary' fontFamily='IBM Plex Sans' fontSize='20px' fontWeight='500'>Explore</Text>
                        </Flex>
                        <Flex py='5px' px='25px' align='center' justify='center' gap='10px'>
                            <Text bg='ED.primary' color='ED.white' fontSize='20px' h='40px' w='40px' borderRadius='6px' textAlign='center' className={btn}>3</Text>
                            <Text color='ED.primary' fontFamily='IBM Plex Sans' fontSize='20px' fontWeight='500'>Enroll</Text>
                        </Flex>
                    </Flex>
                    <Box className={white_card}>
                        <Flex gap='50px' p='20px'>
                            <Box>
                                <Link href='/'>
                                    <Image 
                                        src={LogoSvg} 
                                        alt='brand-logo' 
                                        style={{width: '112px'}}
                                        // className={secondaryLogo}
                                    />
                                </Link>
                            </Box>
                            <Box>
                                <Text fontFamily='IBM Plex Sans' fontSize='20px' fontWeight='600'>EDUCATION DIRECTORY - est.2016</Text>
                                <Flex gap='50px'>
                                    <Text color='ED.navyBlue' fontFamily='IBM Plex Sans' fontSize='14px' fontWeight='400'>Helping students find a college and program that meets their needs.</Text>
                                    <span>
                                        <Button
                                            bg='ED.secondary' 
                                            color='ED.dark'
                                            fontSize='14px' 
                                            fontWeight='400'
                                            fontFamily='IBM Plex Sans'
                                            _hover={{ background: 'ED.primary', color: 'ED.white' }} 
                                        >
                                            Visit Site <ArrowChevronIcon colour={''} rotate={true}/>
                                        </Button>
                                    </span>
                                </Flex>
                            </Box>
                        </Flex>
                        <Flex borderTop='1px solid #D4E0F5'>
                            <Stack p='20px' w='75%'>
                                <Flex direction='row' align='center' gap='10px'>
                                    <Box className={icon_box}><ArrowChevronIcon colour={'var(--white)'} rotate={true}/></Box>
                                    <Text color='ED.dark' fontFamily='IBM Plex Sans' fontSize='14px' fontWeight='400'>Get Matched with Schools That Meet Your Needs</Text>
                                </Flex>
                                <Flex direction='row' align='center' gap='10px'>
                                    <Box className={icon_box}><ArrowChevronIcon colour={'var(--white)'} rotate={true}/></Box>
                                    <Text color='ED.dark' fontFamily='IBM Plex Sans' fontSize='14px' fontWeight='400'>Designed For Working Adults</Text>
                                </Flex>
                                <Flex direction='row' align='center' gap='10px'>
                                    <Box className={icon_box}><ArrowChevronIcon colour={'var(--white)'} rotate={true}/></Box>
                                    <Text color='ED.dark' fontFamily='IBM Plex Sans' fontSize='14px' fontWeight='400'>Convenient Start Dates and Flexible Schedules</Text>
                                </Flex>
                                <Flex direction='row' align='center' gap='10px'>
                                    <Box className={icon_box}><ArrowChevronIcon colour={'var(--white)'} rotate={true}/></Box>
                                    <Text color='ED.dark' fontFamily='IBM Plex Sans' fontSize='14px' fontWeight='400'>Earn your Degree Online</Text>
                                </Flex>
                                <Box mt='22px !important' color='ED.navyBlue' fontFamily='IBM Plex Sans' fontSize='14px' fontWeight='600'>
                                    <Link href='#' className='text-underline'>Request More Information</Link>
                                </Box>
                            </Stack>
                            <Box p='20px' boxShadow='0px 6px 12px 0px rgb(0 0 0 / 16%)'>
                                <Text color='ED.navyBlue' fontFamily='IBM Plex Sans' fontSize='22px' fontWeight='600'>Programs In:</Text>
                                <Text color='ED.philippineGray' fontFamily='IBM Plex Sans' fontSize='14px' fontWeight='400'>Business, Healthcare, Psychology, Criminal Justice, Education and More</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
                <Box w='19%' bg='ED.lotion'>
                    <Box p='3'>
                        <Text fontFamily='IBM Plex Sans' fontSize='11px' fontWeight='400'>
                            <b>*About Rankings:</b> 
                            Educationdirectory.org is a free resource that helps prospective students find a college suited to their individual needs and provides valuable content to consumers. In order to keep these services free, educationdirectory.org receives compensation from colleges and universities listed on this page. That compensation may impact where the schools appear on the website, whether they appear in matching services and the order in which they appear in our matching services. Educationdirectory.org does not include all schools available to consumers. We understand that selecting a college is an important decision and we are proud to offer free information to assist in that decision-making process.
                        </Text>
                        <Box mt='48px !important' mx='2'>
                            <Text color='ED.dark' fontFamily='IBM Plex Sans' fontSize='15px' fontWeight='600'>Fastest Growing Occupations (2020) (1)</Text>
                            <Text color='ED.dark' fontFamily='IBM Plex Sans' fontSize='13px' fontWeight='600'>GrowthRate 2019–2029</Text>
                            <Box>
                                <Text mb='2' mt='2' color='ED.dark' fontFamily='IBM Plex Sans' fontSize='11px' fontWeight='500'>Wind turbine service technicians</Text>
                                <div className={progress}>
                                    <div className={progress_bar} style={{maxWidth:'20%'}}>30%</div>
                                </div>
                            </Box>
                            <Box>
                                <Text mb='2' mt='2' color='ED.dark' fontFamily='IBM Plex Sans' fontSize='11px' fontWeight='500'>Nurse practitioners</Text>
                                <div className={progress}>
                                    <div className={progress_bar} style={{maxWidth:'20%'}}>30%</div>
                                </div>
                            </Box>
                            <Box>
                                <Text mb='2' mt='2' color='ED.dark' fontFamily='IBM Plex Sans' fontSize='11px' fontWeight='500'>Solar photovoltaic installers</Text>
                                <div className={progress}>
                                    <div className={progress_bar} style={{maxWidth:'20%'}}>30%</div>
                                </div>
                            </Box>
                            <Box>
                                <Text mb='2' mt='2' color='ED.dark' fontFamily='IBM Plex Sans' fontSize='11px' fontWeight='500'>Occupational therapy assistants</Text>
                                <div className={progress}>
                                    <div className={progress_bar} style={{maxWidth:'20%'}}>30%</div>
                                </div>
                            </Box>
                            <Box>
                                <Text mb='2' mt='2' color='ED.dark' fontFamily='IBM Plex Sans' fontSize='11px' fontWeight='500'>Statisticians</Text>
                                <div className={progress}>
                                    <div className={progress_bar} style={{maxWidth:'20%'}}>30%</div>
                                </div>
                            </Box>
                            <Box>
                                <Text mb='2' mt='2' color='ED.dark' fontFamily='IBM Plex Sans' fontSize='11px' fontWeight='500'>Home health and personal care aides</Text>
                                <div className={progress}>
                                    <div className={progress_bar} style={{maxWidth:'20%'}}>30%</div>
                                </div>
                            </Box>
                            <Box>
                                <Text mb='2' mt='2' color='ED.dark' fontFamily='IBM Plex Sans' fontSize='11px' fontWeight='500'>Physical therapist assistants</Text>
                                <div className={progress}>
                                    <div className={progress_bar} style={{maxWidth:'20%'}}>30%</div>
                                </div>
                            </Box>
                            <Box>
                                <Text mb='2' mt='2' color='ED.dark' fontFamily='IBM Plex Sans' fontSize='11px' fontWeight='500'>Medical and health services managers</Text>
                                <div className={progress}>
                                    <div className={progress_bar} style={{maxWidth:'20%'}}>30%</div>
                                </div>
                            </Box>
                            <Box>
                                <Text mb='2' mt='2' color='ED.dark' fontFamily='IBM Plex Sans' fontSize='11px' fontWeight='500'>Physician assistants</Text>
                                <div className={progress}>
                                    <div className={progress_bar} style={{maxWidth:'20%'}}>30%</div>
                                </div>
                            </Box>
                            <Box>
                                <Text mb='2' mt='2' color='ED.dark' fontFamily='IBM Plex Sans' fontSize='11px' fontWeight='500'>Information security analysts</Text>
                                <div className={progress}>
                                    <div className={progress_bar} style={{maxWidth:'20%'}}>30%</div>
                                </div>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </>
    );
};

export default schoolSearch;