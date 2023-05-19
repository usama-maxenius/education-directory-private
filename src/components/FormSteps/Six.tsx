import React, { FC, useContext, useEffect } from 'react';
import Select from '../Select';
import { AppContext } from '@/context/AppContext';
import { useRouter } from 'next/router';
import Input from '../Input';
import medalSvg from '@/assets/icons/medal.svg';
import browseSvg from '@/assets/icons/browse.svg';
import calendarSvg from '@/assets/icons/calendar.svg';
import userSvg from '@/assets/icons/user.svg';
import { generateYears } from '@/appConstants';
import { Text, Box, Stack, Button } from '@chakra-ui/react';

const Six = () => {
  const router = useRouter();
  const { query } = useRouter();
  const { stepsData, setStepsData, deviceType } = useContext(AppContext);

  const { first_name, last_name, gender, age, us_citizen, military } =
    stepsData;
  const disabled =
    first_name &&
    last_name &&
    gender &&
    age &&
    us_citizen &&
    military.military_status
      ? false
      : true;
  useEffect(()=> console.log('query path is', query), [query]);
  return (
    <Stack className='step-wrapper'>
      <Text fontSize={`${deviceType === 'Mobile' ? '3xl' : '4xl'}`} fontWeight='600' fontFamily='IBM Plex Sans' align='center' color='ED.primary' pb='0.75' pt='2px'>About you</Text>
      <Text fontSize='md' fontWeight='400' fontFamily='IBM Plex Sans' align='center' mt='0 !important' color='ED.dark'>
        Please answer all the questions
      </Text>
      <Box mt='61px !important' className='step-wrapper-body' style={{ width: 380 }}>
        <div className='row'>
          <Input
            icon={userSvg}
            type='text'
            value={first_name}
            placeholder='First Name'
            onChange={(val) => setStepsData({ ...stepsData, first_name: val })}
          />
          <Input
            icon={userSvg}
            type='text'
            value={last_name}
            placeholder='Last Name'
            onChange={(val) => setStepsData({ ...stepsData, last_name: val })}
          />
        </div>
        <Box mt='4' className='row'>
          <Select
            icon={userSvg}
            placeholder='Your gender'
            selectedOptions={{
              title: stepsData.gender,
            }}
            options={[
              { title: 'Male', value: 'Male' },
              { title: 'Female', value: 'Female' },
            ]}
            onSelect={(val) => setStepsData({ ...stepsData, gender: val })}
          />
          <Select
            icon={calendarSvg}
            placeholder='Year of birth'
            selectedOptions={{
              title: stepsData.age,
            }}
            options={generateYears()}
            onSelect={(val) => setStepsData({ ...stepsData, age: val })}
          />
        </Box>
        <Box my='4'>
          <Select
            icon={browseSvg}
            selectedOptions={{
              title: us_citizen,
            }}
            placeholder='Are you a US citizen?'
            options={[
              { title: 'Yes', value: 'Yes' },
              { title: 'No', value: 'No' },
            ]}
            onSelect={(val) => setStepsData({ ...stepsData, us_citizen: val })}
          />
        </Box>

        <Select
          icon={medalSvg}
          placeholder='Are you associated with the US Military?'
          selectedOptions={{
            title: stepsData.military.military_status,
          }}
          options={[
            { title: 'Yes', value: 'Yes' },
            { title: 'No', value: 'No' },
          ]}
          onSelect={(val) =>
            setStepsData({
              ...stepsData,
              military: {
                ...stepsData.military,
                military_status: val,
              },
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
          className={`${disabled ? 'cursor-disabled' : ''}`}
          disabled={disabled}
          onClick={() => {
            setStepsData({ ...stepsData, current: 7 });
            router.push(
              { pathname: '/get-started/7' },
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
            setStepsData({ ...stepsData, current: 7 });

            setStepsData({ ...stepsData, current: 5 });
            router.push(
              { pathname: '/get-started/5' },
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

export default Six;
