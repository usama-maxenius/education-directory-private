import { FC, useEffect, useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { stepFour } from '@/appConstants';
import Two from './steps/Two';
import Three from './steps/Three';
import Four from './steps/Four';
import Five from './steps/Five';
import { Box, Text, Stack, Select, Button } from '@chakra-ui/react';

import styles from './index.module.css';
const { form_btn, form_select, form_btn_first } = styles;

const WhiteG: FC = ():JSX.Element => {
    const router = useRouter();
    const { query } = useRouter();
    const { whiteGStepsData, setWhiteGStepsData } = useContext(AppContext);
    useEffect(()=> console.log('query path is', query), [query]);
    return (
        <>
            <Stack>
                <Box className='container'>
                    {
                        whiteGStepsData?.current === 1 && <>
                            <Box p='4'>
                                <Text py='10px' fontSize='34px' fontWeight='600' fontFamily='IBM Plex Sans' textAlign='center' color='ED.dark'>It only takes 60 seconds to see schools!</Text>
                                <Text p='10px' fontSize='16px' fontWeight='400' fontFamily='IBM Plex Sans' textAlign='center' color='ED.dark'>
                                    Want to Go Back to School? Those unemployed or who make less than $80k a year may qualify for a grant worth up to $6,895* to go back to school.
                                </Text>
                            </Box>
                            <Box className={form_btn_first}>
                                <Text fontSize='16px' fontWeight='600' fontFamily='IBM Plex Sans' textAlign='center' color='ED.dark'>Your highest degree</Text>
                                <Box className='' p='20px'>
                                    <Button 
                                        onClick={() => {
                                            window.open('/interested-programs', '_blank');
                                            setWhiteGStepsData({...whiteGStepsData, current_education_level: 'G.E.D', current: 2});
                                        }}
                                        className={form_btn} _hover={{ background: 'ED.primary' }} bg='ED.primary' color='ED.white'
                                    >
                                        G.E.D <span>»</span>
                                    </Button>
                                    <Button 
                                        onClick={() => {
                                            window.open('/interested-programs', '_blank');
                                            setWhiteGStepsData({...whiteGStepsData, current_education_level: 'High School Diploma', current: 2});
                                        }}
                                        className={form_btn} _hover={{ background: 'ED.primary' }} bg='ED.primary' color='ED.white'
                                    >
                                        High School Diploma <span>»</span>
                                    </Button>
                                    <Button 
                                        onClick={() => {
                                            window.open('/interested-programs', '_blank');
                                            setWhiteGStepsData({...whiteGStepsData, current_education_level: 'Bachelor', current: 2});
                                        }}
                                        className={form_btn} _hover={{ background: 'ED.primary' }} bg='ED.primary' color='ED.white'
                                    >
                                        Bachelor <span>»</span>
                                    </Button>
                                    <Select
                                        className={form_select}
                                        onChange={(e) => {
                                            window.open('/interested-programs', '_blank');
                                            setWhiteGStepsData({...whiteGStepsData, current_education_level: e.target.value, current: 2});
                                        }}
                                        defaultValue={whiteGStepsData.current_education_level}
                                    >
                                        {stepFour.dropDown[0].options.map(item => <option key={item.value} value={item.value}>{item.title}</option>)}
                                    </Select>
                                </Box>
                            </Box>
                            <Box>
                                <Text p='10px' fontSize='14px' fontWeight='500' fontFamily='IBM Plex Sans' color='ED.lightGray'>Education Directory is dedicated to connecting you with schools and degrees to meet your education goals & objectives. We will connect you with admissions representatives who will discuss programs of your choosing.</Text>
                            </Box>
                        </>
                    }
                    { whiteGStepsData?.current === 2 && <Two /> }
                    { whiteGStepsData?.current === 3 && <Three /> }
                    { whiteGStepsData?.current === 4 && <Four /> }
                    { whiteGStepsData?.current === 5 && <Five /> }
                    <Box py='12' textAlign='center'>
                        <Text textAlign='center' color='ED.lightGray'>
                            <Link href=''><b> Terms of Use </b></Link> |
                            <Link href=''><b> Privacy </b></Link> |
                            <Link href=''><b> California Do Not Sell </b></Link>
                        </Text>
                        <Text textAlign='center' color='ED.lightGray'>
                            *For the 2022-23 award year (July 1, 2022, to June 30, 2023), the Federal Pell Grant is an annual<br/> 
                            award up to $6,895 and is typically awarded only to undergraduate students who display exceptional financial need and <br/>
                            have not earned a bachelor's, graduate, or professional degree. Certain eligibility restrictions may apply.
				        </Text>
                        <Text textAlign='center'  color='ED.lightGray'>
                            A Federal Pell Grant, unlike a loan, does not have to be repaid, except under certain circumstances. Source:
                            <br/> <b>https://studentaid.gov/understand-aid/types/grants/pell</b>
                        </Text>
                        <Text textAlign='center' py='8'  color='ED.lightGray'>
		     	            This is an offer for educational opportunities and not an offer for nor a guarantee of employment. 
                            <br/>Students should consult with a representative from the school they select to learn more about career opportunities in that field. 
                            <br/>Program outcomes vary according to each institution’s specific program curriculum.
                            <br/>
                        </Text>
                    </Box>
                </Box>
            </Stack>
        </>
    );
};

export default WhiteG;