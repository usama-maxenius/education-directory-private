import { FC, useContext, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '@/context/AppContext';
import Link from 'next/link';
import Image from 'next/image';
import ProgressBar from '@/components/ProgressBar';
import { validatePhone } from '@/utils/fieldvalidation';
import { postSearchRequest, prepareSearchBody } from '@/pages/api/searchApi';
// import Input from '../../../components/Input';
import { Box, Text, Stack, Flex, Button, Checkbox, RadioGroup, Input } from '@chakra-ui/react';

import styles from '../index.module.css';
const { form_select, step_form, form_stack } = styles;

const Five:FC = ():JSX.Element => {
    const router = useRouter();
    const ref = useRef(null);
    const { whiteGStepsData, setWhiteGStepsData, setSearchIdentifier } = useContext(AppContext);
    const { first_name, last_name, address, phone } = whiteGStepsData;
    const [loading, setLoading] = useState(false);
    const nextStep = first_name && last_name && address && phone;
    const clickHandler = async () => {
        setLoading(true);
        try {
            const searchBody = await prepareSearchBody(whiteGStepsData);
            const searchIdentifier = (await postSearchRequest(searchBody)) as ISearchResponse;
            await setSearchIdentifier(searchIdentifier);
            
            setLoading(false);
            whiteGStepsData.searchIdentifier = searchIdentifier.search_identifier;
            localStorage.setItem('getStarted', JSON.stringify(whiteGStepsData));
            //@ts-ignore
            ref.current && ref.current.click();
            setTimeout(()=> {
                // router.push('/interested-programs');
                router.push('/thank-you');
            }, 1000);
        } catch (error) {
            console.error(error);
            setLoading(false);
            return error;
        }
    };
    return (
        <Stack>
            <Link href='../interested-programs' rel='noopener noreferrer' target='_blank' ref={ref} style={{display: 'none'}} />
            <Box className='container'>
                <Stack className={form_stack}>
                    <ProgressBar width={((whiteGStepsData.current)/5)*100} />
                    <Box textAlign='center' className={step_form}>
                        <Box mt='4'>
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
                        <Stack rowGap='4'>
                            <Stack>
                                <Text fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' textAlign='start' color='ED.dark'>First Name</Text>
                                <Input 
                                    type='text' placeholder='First name' h='3.1rem' 
                                    defaultValue={whiteGStepsData?.first_name}
                                    onChange={(e) => setWhiteGStepsData({...whiteGStepsData, first_name: e.target.value})} 
                                />
                            </Stack>
                            <Stack>
                                <Text fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' textAlign='start' color='ED.dark'>Last Name</Text>
                                <Input 
                                    type='text' placeholder='Last name' h='3.1rem' 
                                    defaultValue={whiteGStepsData?.last_name}
                                    onChange={(e) => setWhiteGStepsData({...whiteGStepsData, last_name: e.target.value})} 
                                />
                            </Stack>
                            <Stack>
                                <Text fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' textAlign='start' color='ED.dark'>Address</Text>
                                <Input 
                                    type='text' placeholder='Your address' h='3.1rem' 
                                    defaultValue={whiteGStepsData?.address}
                                    onChange={(e) => setWhiteGStepsData({...whiteGStepsData, address: e.target.value})}
                                />
                            </Stack>
                            <Stack>
                                <Text fontSize='1.25rem' fontWeight='600' fontFamily='IBM Plex Sans' textAlign='start' color='ED.dark'>Primary Phone</Text>
                                <Input
                                    type='tel'
                                    h='3.1rem'
                                    value={validatePhone(whiteGStepsData.phone)}
                                    placeholder='Phone number'
                                    defaultValue={whiteGStepsData?.phone}
                                    onChange={(e) =>
                                        setWhiteGStepsData({
                                            ...whiteGStepsData,
                                            phone: e.target.value.replace(/[^+\d]+/g, ''),
                                        })
                                    }
                                />
                            </Stack>
                            <Flex fontSize='12px'>
                                <Checkbox fontSize='12px' textAlign='left' >By checking this box, I consent to representatives of Education Directory, Degree Transfers and University Bound to contact me about educational opportunities via email, text, or phone, including my mobile phone number(s), using an automatic dialer, or pre-recorded message. Message and data rates may apply. I understand that my consent is not a requirement for enrollment, and I may withdraw my consent at any time.</Checkbox>
                            </Flex>
                        </Stack>
                    </Box>
                    
                    
                    <Box className={step_form}>
                        <Button
                            w='100%'
                            h='52px'
                            _hover={{ background: 'ED.primary' }} bg='ED.primary' color='ED.white'
                            // className={`${!nextStep && 'cursor-disabled'}`}
                            onClick={clickHandler}
                        >
                            Show School! <span>»</span>
                        </Button>
                        <Box
                            mt='20px'
                            fontSize='xs' fontWeight='400' fontFamily='IBM Plex Sans' color='ED.primary'
                            textAlign='left'
                            role='button'
                            _hover={{ color: 'ED.fontColorDark', textDecoration: 'underLine' }}
                            onClick={() => {
                                setWhiteGStepsData({ ...whiteGStepsData, current: 4 });
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

export default Five;