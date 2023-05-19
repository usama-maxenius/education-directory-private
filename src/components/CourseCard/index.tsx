import React, { FC, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { stepThree, stepFour, steps } from '@/appConstants';
import { AppContext } from '@/context/AppContext';
import Select from '../Select';
import { Box, Button } from '@chakra-ui/react';
import scholarshipSvg from '@/assets/icons/scholarship.svg';

const CoursesForm: FC = () => {
  const router = useRouter();
  const { stepsData, setStepsData, programSlug } = useContext(AppContext);
  const [isDisabled, setIsDesable] = useState(false as boolean);
  const [isOptionChange, setIsOptionChange] = useState(false as boolean);
  const courseOptions = stepThree.options?.map(({ title, value }) => {
    return {
      OptionLabel: title,
      QuestionValue: value,
    };
  });
  courseOptions.shift();

  const getStartedHandler = async () => {
    if(isOptionChange == false) {
      await setStepsData({...stepsData, areas_of_interest: [router.query.interest]});
    };
    router.push('/get-started/2');
  };

  const data: any = stepsData;
  return (
    <>
      <div className='overview__card__select pt-3'>
        {
          <Box py='2'>
            <Select
              icon={scholarshipSvg}
              onSelect={(val) => { 
                setStepsData({ ...stepsData, areas_of_interest: [val]});
                setIsOptionChange(true);
              }}
              placeholder={'Art & Design'}
              selectedOptions={{ title: programSlug.find(p=> p.slug === router.query.interest)?.title || '' }}
              options={programSlug.map(p=> ({title: p.title, value: p.slug}))}
              // selectedOptions={{
              //   title: {...stepsDataareas_of_interest:[]},
              // }}
              // options={courseOptions}
            />
          </Box>
        }

        {
          stepFour.dropDown.slice(0, 2).map((obj, i) => (
            <Box  py='2' key={`st-${i}`}>
              <Select
                icon={scholarshipSvg}
                placeholder={obj.placeholder}
                selectedOptions={{
                  title: data[obj.key],
                }}
                options={obj.options}
                onSelect={(val) => {
                  setStepsData({ ...stepsData, [obj.key]: val });
                }}
              />
            </Box>
          ))
        }

        <div className='pt-5 w-btn margin-auto'>
          <Button
            bg='ED.secondary' 
            color='ED.white' 
            borderRadius='26'
            h='52px'
            w='100%'
            fontFamily='IBM Plex Sans' 
            _hover={{ background: 'ED.secondary' }}
            onClick={()=> getStartedHandler()}
            disabled={isDisabled}
            className={`${isDisabled && 'cursor-disabled'}`}
          >
            Get Started
          </Button>
        </div>
        <p className='text-dark pt-1 text-center text-xs'>
          Usually takes less than 3 minutes to get results
        </p>
      </div>
    </>
  );
};

export default CoursesForm;
