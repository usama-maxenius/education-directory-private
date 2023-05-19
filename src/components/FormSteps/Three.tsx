import React, { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Checkbox from '../Checkbox';
import { AppContext } from '@/context/AppContext';
import { stepThree } from '@/appConstants';
import { Text, Box, Stack, Button } from '@chakra-ui/react';
import style from './index.module.css';

const { three } = style;

const Three = () => {
  const router = useRouter();
  const { query } = useRouter();
  const { stepsData, setStepsData, deviceType } = useContext(AppContext);
  const nextStep = stepsData.areas_of_interest.length !== 0;

  useEffect(()=> console.log('query path is', query), [query]);
  const handleClick = (item:any) => {
    if (item.value === 'selectall') {
      const { areas_of_interest } = stepsData;
      if(areas_of_interest.includes('selectall')){
        setStepsData({
          ...stepsData,
          areas_of_interest: [],
        });
      } else {
        setStepsData({
          ...stepsData,
          areas_of_interest: [...stepThree.options.map((e) => e.value)],
        });
      }
    } else {
      if (stepsData.areas_of_interest.includes(item.value)) {
        setStepsData({
          ...stepsData,
          areas_of_interest: [
            ...stepsData.areas_of_interest.filter((val: string) => val !== item.value && val !== 'selectall'),
          ],
        });
      } else {
        stepsData.areas_of_interest.push(item.value);
        if(stepThree.options.length-1 === stepsData.areas_of_interest.length){
          stepsData.areas_of_interest.push('selectall');
          setStepsData({
            ...stepsData,
            areas_of_interest: stepsData.areas_of_interest,
          });
        } else {
          setStepsData({
            ...stepsData,
            areas_of_interest: stepsData.areas_of_interest,
          });
        }
      }
    }
  };

  return (
    <Stack className='step-wrapper'>
      <Text fontSize={`${deviceType === 'Mobile' ? '3xl' : '4xl'}`} fontWeight='600' fontFamily='IBM Plex Sans' align='center' color='ED.primary' pb='0.75' pt='2px'>{stepThree.heading}</Text>
      <Text fontSize='md' fontWeight='400' fontFamily='IBM Plex Sans' align='center' mt='0 !important' color='ED.dark'>{stepThree.subHeading}</Text>
      <Box mt='61px !important' className='step-wrapper-body step_overflow_wrapper three'>
        {stepThree.options.map((item, i) => (
          <div key={i} className='checkbox__wrapper'>
            <Checkbox
              clickHandler={() => { handleClick(item); }}
              name={item.title}
              icon={item.icon}
              checked={
                stepsData?.areas_of_interest?.includes(item.value)
                  ? true
                  : false
              }
            />
          </div>
        ))}
      </Box>
      <Stack spacing='3' mt='45px !important' className='step-wrapper-footer'>
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
            nextStep && setStepsData({ ...stepsData, current: 4 });
            router.push(
              { pathname: '/get-started/4' },
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
            stepsData.online_or_campus &&
              setStepsData({ ...stepsData, current: 2 });
            router.push(
              { pathname: '/get-started/2' },
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

export default Three;
