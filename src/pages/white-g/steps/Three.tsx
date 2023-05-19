import { FC, useContext, useEffect, useState} from 'react';
import { AppContext } from '@/context/AppContext';
import Image from 'next/image';
import ProgressBar from '@/components/ProgressBar';
import { Box, Text, Stack, Button, Radio, RadioGroup, Input, Select } from '@chakra-ui/react';

import styles from '../index.module.css';
const { form_select, step_form, step_radio_btn, form_stack, radio_stack } = styles;

const Three:FC = ():JSX.Element => {
    const { whiteGStepsData, setWhiteGStepsData } = useContext(AppContext);
    const [teachingCertificate, setTeachingCertificate] = useState('');
    const [currentlyANurse, setCurrentlyANurse] = useState('');
    const [yourClasses, setYourClasses] = useState('');
    const [hasComputer, sethasComputer] = useState('');
    const [usCitizen, setUsCitizen] = useState('');
    const [usMilitary, setUsMilitary] = useState('');
    const { teaching_certificate, nurse, us_citizen, military, email } = whiteGStepsData;
    const nextStep = teaching_certificate && nurse && us_citizen && military && email;

    useEffect(()=>{
        if(teachingCertificate == '1'){
            setWhiteGStepsData({...whiteGStepsData, teaching_certificate: 'Yes'});
        } else if(teachingCertificate == '2'){
            setWhiteGStepsData({...whiteGStepsData, teaching_certificate: 'No'});
        };
    }, [teachingCertificate]);
    useEffect(()=>{
        if(currentlyANurse == '1'){
            setWhiteGStepsData({...whiteGStepsData, nurse: 'LPN/LVN'});
        } else if(currentlyANurse == '2'){
            setWhiteGStepsData({...whiteGStepsData, nurse: 'RN'});
        } else if(currentlyANurse == '3'){
            setWhiteGStepsData({...whiteGStepsData, nurse: 'No'});
        };
    }, [currentlyANurse]);
    useEffect(()=>{
        if(yourClasses == '1'){
            setWhiteGStepsData({...whiteGStepsData, online_or_campus: 'Online'});
        } else if(yourClasses == '2'){
            setWhiteGStepsData({...whiteGStepsData, online_or_campus: 'Campus'});
        } else if(yourClasses == '3'){
            setWhiteGStepsData({...whiteGStepsData, online_or_campus: 'Either'});
        };
    }, [yourClasses]);
    useEffect(()=>{
        if(hasComputer == '1'){
            setWhiteGStepsData({...whiteGStepsData, computer_access: 'Yes'});
        } else if(hasComputer == '2'){
            setWhiteGStepsData({...whiteGStepsData, computer_access: 'No'});
        };
    }, [hasComputer]);
    useEffect(()=>{
        if(usCitizen == '1'){
            setWhiteGStepsData({...whiteGStepsData, us_citizen: 'Yes'});
        } else if(usCitizen == '2'){
            setWhiteGStepsData({...whiteGStepsData, us_citizen: 'No'});
        };
    }, [usCitizen]);
    useEffect(()=>{
        if(usMilitary == '1'){
            setWhiteGStepsData({...whiteGStepsData, military: 'Yes'});
        } else if(usMilitary == '2'){
            setWhiteGStepsData({...whiteGStepsData, military: 'No'});
        };
    }, [usMilitary]);

    return (
        <Stack>
            <Box className='container'>
                <Stack className={form_stack}>
                    <ProgressBar width={((whiteGStepsData.current - 1)/5)*100} />
                    <Box textAlign='center' className={step_form}>
                        <RadioGroup 
                            defaultValue={whiteGStepsData?.teaching_certificate == 'Yes' ? '1' : '2'} 
                            onChange={setTeachingCertificate}
                        >
                            <Box>
                                <Image
                                    src={'https://educationdirectory.org/white_g/images/questions/12_teach.png?v=1'}
                                    loading='lazy'
                                    width='48'
                                    height='48'
                                    sizes='100%'
                                    style={{margin: 'auto'}}
                                    className={styles.imgIconClass}
                                    alt={'icon'}
                                />
                            </Box>
                            <Text py='20px' fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' color='ED.dark'>Do you have a teaching certificate?</Text>
                            <Stack spacing={5} direction='column' className={radio_stack}>
                                <Radio size='lg' value='1' className={step_radio_btn}>Yes</Radio>
                                <Radio size='lg' value='2' className={step_radio_btn}>No</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <Box textAlign='center' className={step_form}>
                        <RadioGroup 
                            defaultValue={whiteGStepsData?.nurse == 'LPN/LVN' ? '1' : whiteGStepsData?.nurse == 'RN' ? '2' : whiteGStepsData?.nurse == '' ? '' : '3'} 
                            onChange={setCurrentlyANurse}
                        >
                            <Box>
                                <Image
                                    src={'https://educationdirectory.org/white_g/images/questions/13_nurse.png?v=1'}
                                    loading='lazy'
                                    width='48'
                                    height='48'
                                    sizes='100%'
                                    style={{margin: 'auto'}}
                                    className={styles.imgIconClass}
                                    alt={'icon'}
                                />
                            </Box>
                            <Text py='20px' fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' color='ED.dark'>Are you currently a nurse?</Text>
                            <Stack spacing={5} direction='column' className={radio_stack}>
                                <Radio size='lg' value='1' className={step_radio_btn}>Licensed Practical (LPN/LVN)</Radio>
                                <Radio size='lg' value='2' className={step_radio_btn}>Registered Nurse (RN)</Radio>
                                <Radio size='lg' value='3' className={step_radio_btn}>No</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <Box textAlign='center' className={step_form}>
                        <RadioGroup 
                            defaultValue={whiteGStepsData?.online_or_campus == 'Online' ? '1' : whiteGStepsData?.online_or_campus == 'campus' ? '2' : whiteGStepsData?.online_or_campus == '' ? '' : '3'} 
                            onChange={setYourClasses}
                        >
                            <Box>
                                <Image
                                    src={'https://educationdirectory.org/white_g/images/questions/14_online.png?v=1'}
                                    loading='lazy'
                                    width='48'
                                    height='48'
                                    sizes='100%'
                                    style={{margin: 'auto'}}
                                    className={styles.imgIconClass}
                                    alt={'icon'}
                                />
                            </Box>
                            <Text py='20px' fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' color='ED.dark'>Will you take your classes:</Text>
                            <Stack spacing={5} direction='column' className={radio_stack}>
                                <Radio size='lg' value='1' className={step_radio_btn}>Only Online</Radio>
                                <Radio size='lg' value='2' className={step_radio_btn}>Only at a campus</Radio>
                                <Radio size='lg' value='3' className={step_radio_btn}>Either at a Campus or Online</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    {
                        whiteGStepsData.online_or_campus !== 'Campus' &&
                        <Box textAlign='center' className={step_form}>
                            <RadioGroup 
                                defaultValue={whiteGStepsData?.computer_access == 'Yes' ? '1' : '2'} 
                                onChange={sethasComputer}
                            >
                                <Box>
                                    <Image
                                        src={'https://educationdirectory.org/white_g/images/questions/15_computer.png?v=1'}
                                        loading='lazy'
                                        width='48'
                                        height='48'
                                        sizes='100%'
                                        style={{margin: 'auto'}}
                                        className={styles.imgIconClass}
                                        alt={'icon'}
                                    />
                                </Box>
                                <Text py='20px' fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' color='ED.dark'>Will you have access to a computer to take your courses?</Text>
                                <Stack spacing={5} direction='column' className={radio_stack}>
                                    <Radio size='lg' value='1' className={step_radio_btn}>Yes</Radio>
                                    <Radio size='lg' value='2' className={step_radio_btn}>No</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>
                    }
                    <Box textAlign='center' className={step_form}>
                        <RadioGroup 
                            defaultValue={whiteGStepsData?.us_citizen == 'Yes' ? '1' : '2'} 
                            onChange={setUsCitizen}
                        >
                            <Box>
                                <Image
                                    src={'https://educationdirectory.org/white_g/images/questions/17_citizen.png?v=1'}
                                    loading='lazy'
                                    width='48'
                                    height='48'
                                    sizes='100%'
                                    style={{margin: 'auto'}}
                                    className={styles.imgIconClass}
                                    alt={'icon'}
                                />
                            </Box>
                            <Text py='20px' fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' color='ED.dark'>Are you a U.S. citizen?</Text>
                            <Stack spacing={5} direction='column' className={radio_stack}>
                                <Radio size='lg' value='1' className={step_radio_btn}>Yes</Radio>
                                <Radio size='lg' value='2' className={step_radio_btn}>No</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <Box textAlign='center' className={step_form}>
                        <RadioGroup 
                            defaultValue={whiteGStepsData?.military == 'Yes' ? '1' : '2'} 
                            onChange={setUsMilitary}
                        >
                            <Box>
                                <Image
                                    src={'https://educationdirectory.org/white_g/images/questions/19_military.png?v=1'}
                                    loading='lazy'
                                    width='48'
                                    height='48'
                                    sizes='100%'
                                    style={{margin: 'auto'}}
                                    className={styles.imgIconClass}
                                    alt={'icon'}
                                />
                            </Box>
                            <Text py='20px' fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' color='ED.dark'>Are you affiliated with the US Military?</Text>
                            <Stack spacing={5} direction='column' className={radio_stack}>
                                <Radio size='lg' value='1' className={step_radio_btn}>Yes</Radio>
                                <Radio size='lg' value='2' className={step_radio_btn}>No</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    {/* <Box textAlign='center' className={step_form}>
                        <RadioGroup defaultValue='2'>
                            <Box>
                                <Image
                                    src={'https://educationdirectory.org/white_g/images/questions/19_military.png?v=1'}
                                    loading='lazy'
                                    width='48'
                                    height='48'
                                    sizes='100%'
                                    style={{margin: 'auto'}}
                                    className={styles.imgIconClass}
                                    alt={'icon'}
                                />
                            </Box>
                            <Text py='20px' fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' color='ED.dark'>What is your U.S. Military affiliation?</Text>
                            <Select
                                className={form_select}
                                onChange={(e) => console.log(e.target.value)}
                            >
                                {generateYears().map(item => <option key={item.value} value={item.value}>{item.title}</option>)}
                            </Select>
                        </RadioGroup>
                    </Box> */}
                    <Box textAlign='center' className={step_form}>
                        <Box>
                            <Image
                                src={'https://educationdirectory.org/white_g/images/questions/22_email.png?v=1'}
                                loading='lazy'
                                width='48'
                                height='48'
                                sizes='100%'
                                style={{margin: 'auto'}}
                                className={styles.imgIconClass}
                                alt={'icon'}
                            />
                        </Box>
                        <Text py='20px' fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' color='ED.dark'>What is your e-mail address?</Text>
                        <Input 
                            type='text' placeholder='enter your email' h='3.1rem' 
                            defaultValue={whiteGStepsData?.email}
                            onChange={(e) => setWhiteGStepsData({...whiteGStepsData, email: e.target.value})}
                        />
                        <Text fontSize='xs' fontFamily='IBM Plex Sans' color='ED.dark' textAlign='end'>We respect your privacy</Text>
                    </Box>
                    
                    
                    <Box className={step_form}>
                        <Button
                            w='100%'
                            h='52px'
                            _hover={{ background: 'ED.secondary' }} bg='ED.secondary' color='ED.dark'
                            // className={`${!nextStep && 'cursor-disabled'}`}
                            onClick={() => {
                                // nextStep && 
                                setWhiteGStepsData({ ...whiteGStepsData, current: 4 });
                            }}
                        >
                            next <span>»</span>
                        </Button>
                        <Box
                            mt='20px'
                            fontSize='xs' fontWeight='400' fontFamily='IBM Plex Sans' color='ED.primary'
                            textAlign='left'
                            role='button'
                            _hover={{ color: 'ED.fontColorDark', textDecoration: 'underLine' }}
                            onClick={() => {
                                setWhiteGStepsData({ ...whiteGStepsData, current: 2 });
                            }}
                        >
                            <span>«</span> Back
                        </Box>
                    </Box>
                    <Box className={step_form}>
                        <Text fontSize='s' fontWeight='400' fontFamily='IBM Plex Sans' color='ED.lightGray'>Education Directory is dedicated to connecting you with schools and degrees to meet your education goals & objectives. We will connect you with admissions representatives who will discuss programs of your choosing.</Text>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    );
};

export default Three;