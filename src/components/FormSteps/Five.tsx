import React, { useContext, useEffect, useState } from 'react';
import Select from '../Select';
import { AppContext } from '@/context/AppContext';
import { useRouter } from 'next/router';
import Input from '../Input';
import emailSvg from '@/assets/icons/email.svg';
import mobileSvg from '@/assets/icons/mobile.svg';
import locationSvg from '@/assets/icons/location.svg';
import wifiSvg from '@/assets/icons/wifi.svg';
import homeSvg from '@/assets/icons/home.svg';
import { validatePhone } from '@/utils/fieldvalidation';
import { Text, Box, Stack, Button } from '@chakra-ui/react';

const Five = () => {
  const router = useRouter();
  const { query } = useRouter();
  const { stepsData, setStepsData, deviceType } = useContext(AppContext);
  const [validateEmail, setValidateEmail] = useState('' as string);
  const [isEmailValidate, setIsEmailValidate] = useState(false as boolean);
  const {
    email,
    phone,
    zip_code,
    address_line1,
    computer_internet_access,
  } = stepsData;
  const nextStep =
    email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
    phone &&
    zip_code &&
    address_line1 &&
    computer_internet_access;
  useEffect(()=> console.log('query path is', query), [query]);
  const checkEmailValidation = () => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(validateEmail)){
      setIsEmailValidate(false);
      setStepsData({ ...stepsData, email: validateEmail });
    } else {
      setIsEmailValidate(true);
      setStepsData({ ...stepsData, email: validateEmail });
    }
  };

  return (
    <Stack className='step-wrapper'>
      <Text fontSize={`${deviceType === 'Mobile' ? '3xl' : '4xl'}`} fontWeight='600' fontFamily='IBM Plex Sans' align='center' color='ED.primary' pb='0.75' pt='2px'>
        Contact details
      </Text>
      <Text fontSize='md' fontWeight='400' fontFamily='IBM Plex Sans' align='center' mt='0 !important' color='ED.dark'>
        Please answer all the questions
      </Text>
      <Box mt='61px !important' className='step-wrapper-body' style={{ width: 360 }}>
        <Input
          icon={emailSvg}
          type='email'
          isEmail={isEmailValidate}
          value={stepsData.email}
          placeholder='Email Address'
          onChange={(val) => { 
            setStepsData({ ...stepsData, email: val });
            setValidateEmail(val);
          }}
          onBlur={() => checkEmailValidation() }
        />
        <Box mt='4' className='row'>
          <Input
            icon={mobileSvg}
            type='tel'
            value={validatePhone(stepsData.phone)}
            placeholder='Phone number'
            onChange={(val) =>
              setStepsData({
                ...stepsData,
                phone: val.replace(/[^+\d]+/g, ''),
              })
            }
          />
          <Input
            icon={locationSvg}
            type='text'
            value={stepsData.zip_code}
            placeholder='Zip Code'
            onChange={(val) =>
              setStepsData({ ...stepsData, zip_code: val })
            }
          />
        </Box>
        <Box my='4'>
          <Input
            icon={homeSvg}
            type='text'
            value={stepsData.address_line1}
            placeholder='Street Address'
            onChange={(val) =>
              setStepsData({ ...stepsData, address_line1: val })
            }
          />
        </Box>
        <Select
          icon={wifiSvg}
          placeholder='Do you have internet at home?'
          selectedOptions={{
            title: computer_internet_access,
          }}
          options={[
            { title: 'I have internet at home', value: 'I have internet at home' },
            { title: 'I have no access to the internet at home', value: 'I have no access to the internet at home' },
          ]}
          onSelect={(val) =>
            setStepsData({
              ...stepsData,
              computer_internet_access: val,
            })
          }
        />
      </Box>
      <Stack spacing='3' mt='74px !important' className='step-wrapper-footer'>
        <Button
          bg='ED.primary' 
          color='ED.white' 
          borderRadius='26'
          w='290px'
          h='52px'
          fontFamily='IBM Plex Sans' 
          fontSize='xl'
          fontWeight='600'
          _hover={{ background: 'ED.primary' }}
          className={`${!nextStep && 'cursor-disabled'}`}
          onClick={() => {
            nextStep && setStepsData({ ...stepsData, current: 6 });
            router.push(
              { pathname: '/get-started/6' },
              undefined, 
              { shallow: true }
            );
          }}
        >
          Next step
        </Button>
        <Box
          fontSize='xs' fontWeight='400' fontFamily='IBM Plex Sans' color='ED.fontColorLightGray'
          className='text-center'
          role='button'
          _hover={{ color: 'ED.fontColorDark', textDecoration: 'underLine' }}
          onClick={() => {
            setStepsData({ ...stepsData, current: 4 });
            router.push(
              { pathname: '/get-started/4' },
              undefined, 
              { shallow: true }
            );
          }}
        >
          Previous step
        </Box>
      </Stack>
    </Stack>
  );
};

export default Five;
