import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Select from '../Select';
import { AppContext } from '@/context/AppContext';
import { stepFour } from '@/appConstants';
import scholarshipSvg from '@/assets/icons/scholarship.svg';
import { Text, Box, Stack, Button } from '@chakra-ui/react';
import style from './index.module.css';

const { step_wrapper_body } = style;

const Four = () => {
  const router = useRouter();
  const { query } = useRouter();
  const { stepsData, setStepsData, deviceType } = useContext(AppContext);
  const {
    current_education_level,
    hsyear,
    currently_enrolled_in_college,
    rn_license,
  } = stepsData;

  const disabled =
    current_education_level &&
    hsyear &&
    rn_license &&
    currently_enrolled_in_college
      ? false
      : true;

  const data: any = stepsData;
  useEffect(()=> console.log('query path is', query), [query]);
  return (
    <Stack className='step-wrapper'>
      <Text fontSize={`${deviceType === 'Mobile' ? '3xl' : '4xl'}`} fontWeight='600' fontFamily='IBM Plex Sans' align='center' color='ED.primary' pb='0.75' pt='2px'>{stepFour.heading}</Text>
      <Text fontSize='md' fontWeight='400' fontFamily='IBM Plex Sans' align='center' mt='0 !important' color='ED.dark'>{stepFour.subHeading}</Text>
      <Box mt='61px !important' className={step_wrapper_body} style={{ width: 360 }}>
        {stepFour.dropDown.map((obj, i) => (
          <div className='select-wrapper' key={`st-${i}`}>
            <Select
              icon={scholarshipSvg}
              placeholder={obj.placeholder}
              selectedOptions={{
                title: data[obj.key],
              }}
              options={obj.options}
              onSelect={(val) => setStepsData({ ...stepsData, [obj.key]: val })}
            />
          </div>
        ))}
      </Box>
      <Stack spacing='3' mt='60px !important' className='step-wrapper-footer'>
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
            !disabled && setStepsData({ 
              ...stepsData, 
              areas_of_interest: [
                ...stepsData.areas_of_interest.filter((val: string) => val !== 'selectall'),
              ],
              current: 5 
            });
            router.push(
              { pathname: '/get-started/5' },
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
            setStepsData({ ...stepsData, current: 3 });
            router.push(
              { pathname: '/get-started/3' },
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

export default Four;
