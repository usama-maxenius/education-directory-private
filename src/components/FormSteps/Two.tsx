import React, { FC, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Checkbox from '../Checkbox';
import { AppContext } from '@/context/AppContext';
import { stepTwo } from '@/appConstants';
import { Text, Box, Stack, Button } from '@chakra-ui/react';

export interface CurrentStatus {
  width: number;
  completed: number;
  isForward: boolean,
}

const Two = () => {
  const router = useRouter();
  const { query } = useRouter();
  const { stepsData, setStepsData, deviceType } = useContext(AppContext);
  useEffect(()=> console.log('query path is', query), [query]);
  return (
    <Stack className='step-wrapper'>
      <Text fontSize={`${deviceType === 'Mobile' ? '3xl' : '4xl'}`} fontWeight='600' fontFamily='IBM Plex Sans' align='center' color='ED.primary' pb='0.75' pt='2px'>{stepTwo.heading}</Text>
      <Text fontSize='md' fontWeight='400' fontFamily='IBM Plex Sans' align='center' mt='0 !important' color='ED.dark'>{stepTwo.subHeading}</Text>
      
      <Box mt='61px !important' className='step-wrapper-body'>
        {stepTwo.options.map((item, i) => (
          <Box key={i} className='checkbox__wrapper'>
            <Checkbox
              clickHandler={() =>
                setStepsData({
                  ...stepsData,
                  preferred_enrollment: item.value,
                })
              }
              name={item.title}
              icon={item.icon}
              checked={stepsData.preferred_enrollment === item.value ? true : false}
            />
          </Box>
        ))}
      </Box>
      <Stack spacing='3' mt='129px !important' className='step-wrapper-footer'>
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
          className={`${!stepsData.preferred_enrollment && 'cursor-disabled'}`}
          onClick={() => {
            stepsData.preferred_enrollment && setStepsData({ ...stepsData, current: 3 });
            router.push(
              { pathname: '/get-started/3' },
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
            stepsData.online_or_campus && setStepsData({ ...stepsData, current: 1 });
            router.push('/');
          }}
        >
          Previous step
        </Box>
      </Stack>
    </Stack>
  );
};

export default Two;
