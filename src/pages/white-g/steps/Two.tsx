import { FC, useContext, useState, useEffect, useRef } from 'react';
import { AppContext } from '@/context/AppContext';
import scholarship from '@/assets/images/1_school.png';
import newSchool from '@/assets/images/2_new.png';
import child from '@/assets/images/5_age.png';
import graduate from '@/assets/images/7_graduate.png';
import enroll from '@/assets/images/8_enroll.png';
import Image from 'next/image';
import ProgressBar from '@/components/ProgressBar';
import { stepTwo, generateYears } from '@/appConstants';
import { Box, Text, Stack, Select, Button, Radio, RadioGroup } from '@chakra-ui/react';

import styles from '../index.module.css';
const { form_select, step_form, step_radio_btn, form_stack } = styles;
const numbers:any = [];
for(let i=15; i<=65; i++){
    numbers.push({title: i, value: i});
};

const Two:FC = ():JSX.Element => {
    const inSchoolRef = useRef<null | HTMLDivElement>(null);
    const schoolToAttendRef = useRef<null | HTMLDivElement>(null);
    const hsyearRef = useRef<null | HTMLDivElement>(null);
    const enrolledInSchooRef = useRef<null | HTMLDivElement>(null);
    // const nextStepRef = useRef<null | HTMLDivElement>(null);
    const { whiteGStepsData, setWhiteGStepsData } = useContext(AppContext);
    const [inSchool, setInSchool] = useState('');
    const [schoolToAttend, setSchoolToAttend] = useState('');
    const { in_school, age, hsyear, enrolled_in_school } = whiteGStepsData;
    const nextStep = in_school && age && hsyear && enrolled_in_school;
    
    useEffect(()=>{
        if(inSchool == '1'){
            inSchoolRef.current?.scrollIntoView({behavior: 'smooth'});
            setWhiteGStepsData({...whiteGStepsData, in_school: 'Yes'});
        } else if(inSchool == '2'){
            setWhiteGStepsData({...whiteGStepsData, in_school: 'No', school_to_attend: ''});
            window.scrollBy(100, 0);
        };
    }, [inSchool]);
    useEffect(()=>{
        if(schoolToAttend == '1') {
            schoolToAttendRef.current?.scrollIntoView({behavior: 'smooth'});
            setWhiteGStepsData({...whiteGStepsData, school_to_attend: 'Yes'});
        } else if(schoolToAttend == '2'){
            setWhiteGStepsData({...whiteGStepsData, school_to_attend: 'No'});
        };
    }, [schoolToAttend]);

    return (
        <Stack>
            <Box className='container'>
                <Stack className={form_stack}>
                    <ProgressBar width={((whiteGStepsData.current-1)/5)*100} />
                    <Box textAlign='center' className={step_form}>
                        <RadioGroup defaultValue={whiteGStepsData.in_school == 'Yes' ? '1' : '2'} onChange={setInSchool}>
                            <Box>
                                <Image
                                    src={scholarship}
                                    loading='lazy'
                                    width='0'
                                    height='0'
                                    sizes='100%'
                                    style={{margin: 'auto'}}
                                    className={styles.imgIconClass}
                                    alt={'icon'}
                                />
                            </Box>
                            <Text py='20px' fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' color='ED.dark'>Are you currently in school?</Text>
                            <Stack spacing={5} direction='column'>
                                <Radio size='lg' value='1' className={step_radio_btn}>Yes</Radio>
                                <Radio size='lg' value='2' className={step_radio_btn}>No</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    {
                        whiteGStepsData.in_school == 'Yes' &&
                        <Box ref={inSchoolRef} textAlign='center' className={step_form}>
                            <RadioGroup defaultValue={whiteGStepsData.school_to_attend == 'Yes' ? '1' : '2'} onChange={setSchoolToAttend}>
                                <Box>
                                    <Image
                                        src={newSchool}
                                        loading='lazy'
                                        width='0'
                                        height='0'
                                        sizes='100%'
                                        style={{margin: 'auto'}}
                                        className={styles.imgIconClass}
                                        alt={'icon'}
                                    />
                                </Box>
                                <Text py='20px' fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' color='ED.dark'>Are you looking for a new school to attend?</Text>
                                <Stack spacing={5} direction='column'>
                                    <Radio size='lg' value='1' className={step_radio_btn}>Yes</Radio>
                                    <Radio size='lg' value='2' className={step_radio_btn}>No</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>
                    }
                    <Box ref={schoolToAttendRef} textAlign='center' className={step_form}>
                        <Box>
                            <Image
                                src={child}
                                loading='lazy'
                                width='0'
                                height='0'
                                sizes='100%'
                                style={{margin: 'auto'}}
                                className={styles.imgIconClass}
                                alt={'icon'}
                            />
                        </Box>
                        <Text py='20px' fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' color='ED.dark'>How old are you?</Text>
                        <Select
                            className={`${form_select}`}
                            onChange={(e) => {
                                hsyearRef.current?.scrollIntoView({behavior: 'smooth'});
                                setWhiteGStepsData({...whiteGStepsData, age: e.target.value});
                            }}
                            defaultValue={whiteGStepsData?.age}
                        >
                            {numbers?.map((item:any) => <option key={item.value} value={item.value}>{item.title}</option>)}
                        </Select>
                    </Box>
                    <Box ref={hsyearRef} textAlign='center' className={step_form}>
                        <Box>
                            <Image
                                src={graduate}
                                loading='lazy'
                                width='0'
                                height='0'
                                sizes='100%'
                                style={{margin: 'auto'}}
                                className={styles.imgIconClass}
                                alt={'icon'}
                            />
                        </Box>
                        <Text py='20px' fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' color='ED.dark'>What year did you graduate from high school or complete your GED?</Text>
                        <Select
                            className={form_select}
                            onChange={(e) => {
                                enrolledInSchooRef.current?.scrollIntoView({behavior: 'smooth'});
                                setWhiteGStepsData({...whiteGStepsData, hsyear: e.target.value});
                            }}
                            defaultValue={whiteGStepsData.hsyear = `${generateYears()[0].value}`}
                        >
                            {generateYears().map(item => <option key={item.value} value={item.value}>{item.title}</option>)}
                        </Select>
                    </Box>
                    <Box ref={enrolledInSchooRef} textAlign='center' className={step_form}>
                        <Box>
                            <Image
                                src={enroll}
                                loading='lazy'
                                width='0'
                                height='0'
                                sizes='100%'
                                style={{margin: 'auto'}}
                                className={styles.imgIconClass}
                                alt={'icon'}
                            />
                        </Box>
                        <Text py='20px' fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' color='ED.dark'>When do you plan to enroll in school?</Text>
                        <Select
                            className={form_select}
                            onChange={(e) => {
                                // nextStepRef.current?.scrollIntoView({behavior: 'smooth'});
                                setWhiteGStepsData({...whiteGStepsData, enrolled_in_school: e.target.value});
                            }}
                            defaultValue={whiteGStepsData?.enrolled_in_school}
                        >
                            {stepTwo.options.map(item => <option key={item.value} value={item.value}>{item.title}</option>)}
                        </Select>
                    </Box>
                    <Box className={step_form}>
                        <Button
                            w='100%'
                            h='52px'
                            _hover={{ background: 'ED.secondary' }} bg='ED.secondary' color='ED.dark'
                            // className={`${!nextStep && 'cursor-disabled'}`}
                            onClick={() => {
                                // nextStep && 
                                setWhiteGStepsData({ ...whiteGStepsData, current: 3 });
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
                                setWhiteGStepsData({ ...whiteGStepsData, current: 1 });
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

export default Two;