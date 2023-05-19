import { FC, useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import Image from 'next/image';
import ProgressBar from '@/components/ProgressBar';
import { intrestedSubjectArea } from '@/appConstants';
import { Box, Text, Stack, Button, Checkbox } from '@chakra-ui/react';

import styles from '../index.module.css';
const { step_form, step_form_checkbox, step_form_checkbox_box, form_stack } = styles;

const Four:FC = ():JSX.Element => {
    const { whiteGStepsData, setWhiteGStepsData } = useContext(AppContext);

    const handleSelectAll = () => {
        whiteGStepsData.areas_of_interest = intrestedSubjectArea.map(e=> e.value);
        setWhiteGStepsData({...whiteGStepsData});

    };
    const handleCheckboxClick = (item: string) => {
        if(whiteGStepsData.areas_of_interest.includes(item)){
            const newCheckItems = whiteGStepsData.areas_of_interest.filter((i: string) => i !== item);
            setWhiteGStepsData({...whiteGStepsData, areas_of_interest: [...newCheckItems]});
        } else {
            whiteGStepsData.areas_of_interest.push(item);
            setWhiteGStepsData({...whiteGStepsData});
        };
    };

    return (
        <Stack>
            <Box className='container'>
                <Stack className={form_stack}>
                    <ProgressBar width={((whiteGStepsData.current)/5)*100} />
                    <Box textAlign='center' className={step_form}>
                        <Box>
                            <Image
                                src={'https://educationdirectory.org/white_g/images/questions/23_rank.png?v=1'}
                                loading='lazy'
                                width='48'
                                height='48'
                                sizes='100%'
                                style={{margin: 'auto'}}
                                className={styles.imgIconClass}
                                alt={'icon'}
                            />
                        </Box>
                        <Text py='20px' fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' color='ED.dark'>Select Your Interested Subject Areas:</Text>
                        <Box textAlign='left' py='4'>
                            <Button 
                                _hover={{ background: 'ED.primary' }} bg='ED.primary' color='ED.white'
                                onClick={handleSelectAll}
                            >
                                Select All
                            </Button>
                        </Box>
                          
                        <Stack spacing={5} direction='column'>
                            {intrestedSubjectArea?.map((item)=> {
                                return (
                                    <Checkbox 
                                        key={item.title} 
                                        size='lg'
                                        iconSize='2rem'
                                        className={step_form_checkbox}
                                        name={item.value}
                                        isChecked={whiteGStepsData.areas_of_interest.includes(item.value) ? true : false}
                                        onChange={() => handleCheckboxClick(item.title)}
                                    >
                                        <Box className={step_form_checkbox_box}>
                                            <Box textAlign={'left'}>{item.title}</Box> 
                                            {whiteGStepsData.areas_of_interest.find((i: string) => i == item.value) && <Box color='ED.primary' bg='ED.brightGray' px='10px'>deselect</Box>}
                                        </Box>
                                    </Checkbox>
                                );
                            })}
                        </Stack>
                    </Box>
                    
                    <Box className={step_form}>
                        <Button
                            w='100%'
                            h='52px'
                            _hover={{ background: 'ED.primary' }} bg='ED.primary' color='ED.white'
                            // className={`${whiteGStepsData.areas_of_interest.length <= 0  && 'cursor-disabled'}`}
                            onClick={() => {
                                // whiteGStepsData.areas_of_interest.length > 0 &&
                                setWhiteGStepsData({ ...whiteGStepsData, current: 5 });
                            }}
                        >
                            continue
                        </Button>
                        <Box
                            mt='20px'
                            fontSize='xs' fontWeight='400' fontFamily='IBM Plex Sans' color='ED.primary'
                            textAlign='left'
                            role='button'
                            _hover={{ color: 'ED.fontColorDark', textDecoration: 'underLine' }}
                            onClick={() => {
                                setWhiteGStepsData({ ...whiteGStepsData, current: 3 });
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

export default Four;