import { FC, useEffect, useState, useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import { useRouter } from 'next/router';
import { Box, Button, Text, Stack, Flex, UnorderedList, List, ListItem, ListIcon, Input, Select } from '@chakra-ui/react';
import TermsCheckbox from '../../components/TermsCheckbox';
import Image from 'next/image';
import fetchDataFrom from '../api/fetchDataFrom';
import { Image_Quality } from '@/appConstants';
import accountBalnaceIcon from '../../assets/logo/account_balance_black_24dp.svg';
import groupIcon from '../../assets/logo/Group 39.svg';
import wifiIcon from '../../assets/logo/wifi_black_24dp.svg';
import locationIcon from '../../assets/logo/location_on_black_24dp.svg';
import verifiedIcon from '../../assets/logo/verified_user_black_24dp.svg';
import { stepFour } from '@/appConstants';


import style from './index.module.css';
const { badge_list, badge_list_item, badge_item, white_btn, uni_form, uni_form_header, uni_form_fields, uni_form_terms, isInvalid } = style;

type IProps = {
    school: any;
};

const School: FC<IProps> = ({ school }):JSX.Element => {
    const { query } = useRouter();
    const { setNavType, deviceType, setFooterText } = useContext(AppContext);
    const [isEmailValidate, setIsEmailValidate] = useState(false as boolean);
    const [validateEmail, setValidateEmail] = useState('' as string);
    const [acceptingStudentData, setAcceptingStudentData] = useState({
        degree: '',
        first_name: '',
        last_name: '',
        email: '',
        current_education_level: '',
        hsyear: '',
        phone: '',
        zip_code: '',
        address_line1: '',
        terms_and_condition: false
    });

    useEffect(()=> console.log('TOU query path is', query), [query]);
    useEffect(() => {
        setNavType('tertiary');
        setFooterText(school.footer_text);

        return ()=> setFooterText('');
    }, []);
    const { degree, first_name, last_name, email, current_education_level, hsyear, phone, zip_code, address_line1, terms_and_condition } = acceptingStudentData;
    const isDisable = degree && first_name && last_name && email && current_education_level && hsyear && phone && zip_code && address_line1 && terms_and_condition;

    const badge = [
        {
            icon: wifiIcon,
            name: `${school.school_type}`
        },
        {
            icon: locationIcon,
            name: `${school.location}`
        },
        {
            icon: verifiedIcon,
            name: `${school.is_private ? 'Private' : 'Public'}`
        },
        {
            icon: accountBalnaceIcon,
            name: `${school.is_non_profit ? 'Profitable' : 'Non-Profit'}`
        }
    ];
    const checkEmailValidation = () => {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(validateEmail)){
          setIsEmailValidate(false);
          setAcceptingStudentData({ ...acceptingStudentData, email: validateEmail });
        } else {
          setIsEmailValidate(true);
          setAcceptingStudentData({ ...acceptingStudentData, email: validateEmail });
        }
    };

    return (
        <>
            <Stack className='container'>
                <Flex className={`${deviceType === 'Mobile' ? 'true' : 'false'}`} gap='121px' pt='26px' pb='165px' direction={`${deviceType === 'Mobile' ? 'column' : 'row'}`}>
                    <Box width={`${deviceType === 'Mobile' ? '100%' : '50%'}`}>
                        <Image
                            loading='lazy'
                            quality={Image_Quality}
                            src={school.logo}
                            alt={'logo'}
                            width='80'
                            height='20'
                            style={{display: 'inline-block'}}
                        />
                        <Text mt='26px' fontSize='36px' fontFamily='IBM Plex Sans' fontWeight='600' color='ED.navyBlue'>{school.name}</Text>
                        <Box mt='26px'>
                            <Text fontSize='16px' fontFamily='IBM Plex Sans' fontWeight='400' color='ED.dark'>{school.description}</Text>
                        </Box>
                        <Box mt='26px'>
                            <UnorderedList className={badge_list}>
                                {
                                    badge?.map((item, index) => {
                                        return (
                                            <ListItem key={item.name} className={badge_list_item}>
                                                <Box className={badge_item}>
                                                    <Image
                                                        key={`${index}`}
                                                        loading='lazy'
                                                        quality={Image_Quality}
                                                        src={item.icon}
                                                        alt={item.icon}
                                                        style={{display: 'inline-block'}}
                                                        // className={edu_star_icon}
                                                    />
                                                    <Box>
                                                        <Text fontSize='12px' fontFamily='IBM Plex Sans' fontWeight='400' color='ED.dark'>{item.name}</Text>
                                                    </Box>
                                                </Box>
                                            </ListItem>
                                        );
                                    })
                                }
                            </UnorderedList>
                        </Box>
                        <Box mt='42px'>
                            <Text fontSize='22px' fontFamily='IBM Plex Sans' fontWeight='600' color='ED.navyBlue'>{school.name}</Text>
                            <Box>
                                <List>
                                    {
                                        school.offers?.map((item: any, index: number) => {
                                            return(
                                                <ListItem key={`${item.title}`} mt='28px' fontSize='16px' fontFamily='IBM Plex Sans' fontWeight='600' color='ED.navyBlue'>
                                                    <Flex gap='2' align='center'>
                                                        <Image
                                                            key={`${item.icon}`}
                                                            loading='lazy'
                                                            quality={Image_Quality}
                                                            src={item?.icon}
                                                            alt={'icon'}
                                                            width='30'
                                                            height='30'
                                                            style={{display: 'inline-block'}}
                                                        />
                                                        {item.title}
                                                    </Flex>
                                                    <Box pl='34px'>
                                                        <List>
                                                            <ListItem mt='11px' fontSize='16px' fontFamily='IBM Plex Sans' fontWeight='400' color='ED.dark'>
                                                                {item.description}
                                                            </ListItem>
                                                        </List>
                                                        {/* {
                                                            item?.sub?.length > 0 &&
                                                            <UnorderedList mt='16px'>
                                                                {
                                                                    item?.sub?.map((sub, index) => {
                                                                        return(
                                                                            <ListItem key={`sub-${item.sub}`} fontSize='16px' fontFamily='IBM Plex Sans' fontWeight='400' color='ED.dark'>
                                                                                {sub.title}
                                                                            </ListItem>
                                                                        );
                                                                    })
                                                                }
                                                            </UnorderedList>
                                                        } */}
                                                    </Box>
                                                </ListItem>
                                            );
                                        })
                                    }
                                </List>
                            </Box>
                        </Box>
                    </Box>
                    <Box width={`${deviceType === 'Mobile' ? '100%' : '50%'}`}>
                        <Box>
                            <Button className={white_btn} bg='ED.white' h='54px'  _hover={{ background: 'ED.white' }}>
                                <Image
                                    loading='lazy'
                                    quality={Image_Quality}
                                    src={groupIcon}
                                    alt={'icon'}
                                    style={{display: 'inline-block'}}
                                />
                                <Text fontSize='16px' fontFamily='IBM Plex Sans' fontWeight='600' color='ED.navyBlue'>{school?.accepting_candidates ? 'Accepting students now' : 'Not accepting students'}</Text>
                            </Button>
                        </Box>
                        {
                            school?.accepting_candidates &&
                            <Box mt='16px'>
                                <Stack>
                                    <Box minH='796px' w='100%' className={uni_form}>
                                        <Box className={uni_form_header} bg='ED.navyBlue'>
                                            <Image
                                                loading='lazy'
                                                quality={Image_Quality}
                                                src={groupIcon}
                                                alt={'icon'}
                                                style={{display: 'inline-block'}}
                                            />
                                            <Text fontSize='22px' fontFamily='IBM Plex Sans' fontWeight='600' color='ED.white'>Accepting students now</Text>
                                        </Box>
                                        <Box p='26px'>
                                            <Stack h='366px' w='100%' gap='4' className={uni_form_fields}>
                                                <Flex  align='center' justify='space-between' px='2.5'>
                                                    <Text fontSize='16px' fontFamily='IBM Plex Sans' fontWeight='600' color='ED.navyBlue'>Program</Text>
                                                    <Text fontSize='14px' fontFamily='IBM Plex Sans' fontWeight='400' color='ED.dark'>Change program</Text>
                                                </Flex>
                                                <Box px='2.5'>
                                                    <Input 
                                                        placeholder="Masters's Degree" bg='ED.white' h='52px' 
                                                        _placeholder={{ 
                                                            color: 'ED.lightGray', 
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }} 
                                                        color='ED.primary'
                                                        fontSize='16px' 
                                                        fontFamily='IBM Plex Sans' 
                                                        fontWeight='600'
                                                        value={acceptingStudentData.degree}
                                                        onChange={(e) => setAcceptingStudentData({...acceptingStudentData, degree: e.target.value})}
                                                    />
                                                </Box>
                                                <Flex gap='4' px='2.5'>
                                                    <Input 
                                                        placeholder='First name' bg='ED.white' h='52px' 
                                                        _placeholder={{ 
                                                            color: 'ED.lightGray', 
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }}
                                                        color='ED.primary'
                                                        fontSize='16px' 
                                                        fontFamily='IBM Plex Sans' 
                                                        fontWeight='600'
                                                        value={acceptingStudentData.first_name}
                                                        onChange={(e) => setAcceptingStudentData({...acceptingStudentData, first_name: e.target.value})}
                                                    />
                                                    <Input 
                                                        placeholder='Last name' bg='ED.white' h='52px' 
                                                        _placeholder={{ 
                                                            color: 'ED.lightGray', 
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }}
                                                        color='ED.primary'
                                                        fontSize='16px' 
                                                        fontFamily='IBM Plex Sans' 
                                                        fontWeight='600' 
                                                        value={acceptingStudentData.last_name}
                                                        onChange={(e) => setAcceptingStudentData({...acceptingStudentData, last_name: e.target.value})}
                                                    />
                                                </Flex>
                                                <Box px='2.5'>
                                                    <Input 
                                                        placeholder='Email' bg='ED.white' h='52px' 
                                                        _placeholder={{ 
                                                            color: 'ED.lightGray', 
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }} 
                                                        color='ED.primary'
                                                        fontSize='16px' 
                                                        fontFamily='IBM Plex Sans' 
                                                        fontWeight='600'
                                                        className={`${isEmailValidate ? isInvalid : 'isValid'}`}
                                                        value={acceptingStudentData.email}
                                                        onChange={(e) => {
                                                            setAcceptingStudentData({...acceptingStudentData, email: e.target.value});
                                                            setValidateEmail(e.target.value);
                                                        }}
                                                        onBlur={() => checkEmailValidation() }
                                                    />
                                                </Box>
                                                <Box px='2.5'>
                                                    <Select 
                                                        placeholder={stepFour?.dropDown[0]?.placeholder} bg='ED.white' h='52px'
                                                        _placeholder={{ 
                                                            color: 'ED.lightGray', 
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }} 
                                                        color='ED.primary'
                                                        fontSize='16px' 
                                                        fontFamily='IBM Plex Sans' 
                                                        fontWeight='600'
                                                        onChange={(e) => {
                                                            setAcceptingStudentData({
                                                              ...acceptingStudentData,
                                                              current_education_level: e.target.value,
                                                            });
                                                        }}
                                                    >
                                                        {
                                                            stepFour?.dropDown[0]?.options.map((item)=>{
                                                                return (
                                                                    <option key={item.value} value={item.value}>{item.title}</option>
                                                                );
                                                            })
                                                        }
                                                    </Select>
                                                </Box>
                                                <Box px='2.5'>
                                                    <Select 
                                                        placeholder={stepFour?.dropDown[1]?.placeholder} bg='ED.white' h='52px'
                                                        _placeholder={{ 
                                                            color: 'ED.lightGray', 
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }} 
                                                        color='ED.primary'
                                                        fontSize='16px' 
                                                        fontFamily='IBM Plex Sans' 
                                                        fontWeight='600'
                                                        // onChange={(e) =>
                                                        //     setAcceptingStudentData({
                                                        //       ...acceptingStudentData,
                                                        //       hsyear: e.target.value,
                                                        //     })
                                                        // }
                                                    >
                                                        {
                                                            stepFour?.dropDown[1]?.options.map((item)=>{
                                                                return (
                                                                    <option key={item.value} value={item.value}>{item.title}</option>
                                                                );
                                                            })
                                                        }
                                                    </Select>
                                                </Box>
                                                <Box px='2.5'>
                                                    <Select 
                                                        placeholder='Preffered Start Data' bg='ED.white' h='52px'
                                                        _placeholder={{ 
                                                            color: 'ED.lightGray', 
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }}
                                                        color='ED.primary'
                                                        fontSize='16px' 
                                                        fontFamily='IBM Plex Sans' 
                                                        fontWeight='600'
                                                        onChange={(e) =>
                                                            setAcceptingStudentData({
                                                              ...acceptingStudentData,
                                                              hsyear: e.target.value,
                                                            })
                                                        }
                                                    >
                                                        <option value={'option 1'}>United Arab Emirates</option>
                                                        <option value={'option 2'}>Nigeria</option>
                                                    </Select>
                                                </Box>
                                                <Flex gap='4' px='2.5'>
                                                    <Input 
                                                        placeholder='Phone number' bg='ED.white' h='52px' 
                                                        _placeholder={{ 
                                                            color: 'ED.lightGray', 
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }} 
                                                        color='ED.primary'
                                                        fontSize='16px' 
                                                        fontFamily='IBM Plex Sans' 
                                                        fontWeight='600'
                                                        value={acceptingStudentData.phone}
                                                        onChange={(e) => setAcceptingStudentData({...acceptingStudentData, phone: e.target.value.replace(/[^+\d]+/g, '')})}
                                                    />
                                                    <Input 
                                                        placeholder='Zip code' bg='ED.white' h='52px' 
                                                        _placeholder={{ 
                                                            color: 'ED.lightGray', 
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }} 
                                                        color='ED.primary'
                                                        fontSize='16px' 
                                                        fontFamily='IBM Plex Sans' 
                                                        fontWeight='600'
                                                        value={acceptingStudentData.zip_code}
                                                        onChange={(e) => setAcceptingStudentData({...acceptingStudentData, zip_code: e.target.value})}
                                                    />
                                                </Flex>
                                                <Box px='2.5'>
                                                    <Input 
                                                        placeholder='Street address' bg='ED.white' h='52px' 
                                                        _placeholder={{ 
                                                            color: 'ED.lightGray', 
                                                            fontSize: '14px',
                                                            fontWeight: '400'
                                                        }} 
                                                        color='ED.primary'
                                                        fontSize='16px' 
                                                        fontFamily='IBM Plex Sans' 
                                                        fontWeight='600'
                                                        value={acceptingStudentData.address_line1}
                                                        onChange={(e) => setAcceptingStudentData({...acceptingStudentData, address_line1: e.target.value})}
                                                    />
                                                </Box>
                                            </Stack>
                                            <Box mt='16px' px='2.5'>
                                                <Box className={uni_form_terms}>
                                                    <TermsCheckbox
                                                        onChange={(check) => {
                                                            setAcceptingStudentData({...acceptingStudentData, terms_and_condition: check});
                                                        }}
                                                    />
                                                    <Text fontSize='14px' fontFamily='IBM Plex Sans' fontWeight='400' color='ED.dark'>
                                                        Some blurb that may be necessary for some schools, you
                                                        may also need a link to the
                                                        <a href='../privacy-policy' target={'_blank'} className='text-dark text-underline'>
                                                            {' '}
                                                            terms and conditions.
                                                        </a>
                                                    </Text>
                                                </Box>
                                                <Button
                                                    bg='ED.dullSecondary' 
                                                    color='ED.white' 
                                                    borderRadius='26'
                                                    w='100%'
                                                    h='52px'
                                                    fontFamily='IBM Plex Sans' 
                                                    fontSize='xl'
                                                    fontWeight='600'
                                                    _hover={{ background: 'ED.dullSecondary' }}
                                                    my='16px'
                                                    className={`${!isDisable && 'cursor-disabled'}`}
                                                    onClick={() => isDisable && console.log('Get info', acceptingStudentData)}
                                                >
                                                    Get info
                                                </Button>
                                                <Text className='text-dark text-sm' px='2.5'>
                                                    By clicking the “Get info” button, I authorize Keiser
                                                    University to make or allow the placement of recurring
                                                    marketing calls, emails, and texts to me at the phone
                                                    number that I have provided, including through the use
                                                    of automated technology or a prerecorded or artificial
                                                    voice. I understand that I am not required to provide my
                                                    phone number as a condition of purchasing any property,
                                                    goods, or services. <a href='../privacy-policy' target={'_blank'} className='text-underline'>Privacy policy</a>
                                                </Text>
                                                <Flex mt='16px' gap='2' align='center' px='2.5'>
                                                    <Text>* † ‡</Text>
                                                    <Text fontSize='14px' fontFamily='IBM Plex Sans' fontWeight='400' color='ED.dark' className='text-underline'>Click Here for Important Disclosures</Text>
                                                </Flex>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Box>
                        }
                    </Box>
                </Flex>
            </Stack>
        </>
    );
};

type IParams = {
    params: {
      school: string;
    };
};
  
export const getServerSideProps = async ({ params }: IParams) => {
    const { school } = params;
    const res = await fetchDataFrom(`schools/${school}`);
    if (res.status === 200) {
        const data: IPage = await res.json();
        return { props: { school: data } };
    };
    return {
        redirect: {
            permanent: false,
            destination: '/',
        },
        props: {},
    };
};

export default School;