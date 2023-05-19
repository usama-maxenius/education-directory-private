/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import Card from '@/components/Card';
import locationIcon from '@/assets/icons/locationIcon.svg';
import Right from '@/assets/icons/right.png';
import banner from '@/assets/images/thankyou_banner.png';
import { AppContext } from '@/context/AppContext';
import { getZipCodeData } from '@/pages/api';

const Banner = dynamic(() => import('@/components/Banner'));
const highestEducationLevel = {
  'GED': 'GED',
  'High School Diploma': 'HIGH_SCHOOL',
  'Some College 1-10 Credits': 'SOME_COLLEGE',
  'Some College 11-30 Credits': 'SOME_COLLEGE',
  'Some College 31-60 Credits': 'SOME_COLLEGE',
  'Associates': 'ASSOCIATES_DEGREE',
  'Bachelors': 'BACHELORS_DEGREE',
  'Masters': 'MASTERS_DEGREE',
  'Doctoral': 'DOCTORAL_DEGREE',
  'No High School Diploma or GED': 'NO_HIGH_SCHOOL_OR_GED',
};
const learningPreference = {
  'Either': 'HYBRID',
  'Online': 'ONLINE',
  'Campus': 'CAMPUS',
};
const startDate = {
  '0': 'LESS_THAN_1_MONTH',
  '1': '1_TO_3_MONTHS',
  '4': '3_TO_6_MONTHS',
  '6': '6_TO_12_MONTHS',
  '12': 'OVER_12_MONTHS'
};

const ThankYouModel = () => {
  const { stepsData } = useContext(AppContext);
  const [adOptimizor, setAdOptimizor] = useState<AdOptimizorResponse>();

  useEffect(()=> {
    getZipCodeData(stepsData.zip_code).then(res=> {
      stepsData.state = res.results?.[0]?.address_components?.[4]?.short_name;
    });
  }, []);

  const params: IQueryParams = {
    LandingPageToken: '06c9eb5c-3a0c-44c3-8d48-afe9e1baf083',
    Device: 'Desktop',
    ClientIP: '159.36.129.195',
    ZipCode: stepsData.zip_code,
    State: stepsData.state,
    AdPlacement: 'HighSchool',
    AreaOfStudy: stepsData.areas_of_interest[0],
    Concentration: 'Accounting & Related Services',
    DegreeLevel: ['GED', 'Associates'].includes(stepsData.current_education_level)? 'ASSOCIATES': (['High School Diploma', 'Some College 1-10 Credits', 'Some College 11-30 Credits', 'Some College 31-60 Credits'].includes(stepsData.current_education_level)? 'BACHELORS': (['Bachelors'].includes(stepsData.current_education_level)? 'MASTERS': (['Masters', 'Doctoral'].includes(stepsData.current_education_level)? 'DOCTORATE': (['No High School Diploma or GED'].includes(stepsData.current_education_level)? 'CERTIFICATE': 'STILL_IN_HIGH_SCHOOL')))),
    HighSchoolGradYear: stepsData.hsyear,
    //@ts-ignore
    HighestEducationLevel: highestEducationLevel[stepsData.current_education_level]? highestEducationLevel[stepsData.current_education_level]: 'STILL_IN_HIGH_SCHOO',
    LearningPreference: learningPreference[stepsData.online_or_campus],
    LikelihoodToEnroll: 'VERY_LIKELY',
    MilitaryStatus: stepsData.military?.military_status === 'Yes'? true: false,
    RNDegree: false,
    StartDate: startDate[stepsData.preferred_enrollment],
    USCitizen: stepsData.us_citizen === 'Yes'? true: false,
    Accreditations: 'Nationally Accredited',
    ProgramLength: '1 Year Program',
    ProgramRequirements: 'NO APPLICATIONFEE',
    City: 'phoenix',
    CustomVar1: 'TYpage',
  };

  const queryString = Object.keys(params).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key as keyof IQueryParams])}`).join('&');
  const url = `https://api.myadoptimizer.com/api/MAOListingsServerAPI?${queryString}`;

  useEffect(() => {
    fetch(url).then(async (res) => {
      const data: AdOptimizorResponse = await res.json();
      if (data.items.length) setAdOptimizor(data);
    });
    () => {
      setAdOptimizor(undefined);
    };
  }, [url]);

  return (
    <div className='model--container'>
      <div className='model--heading'>
        <h1 className='h1 text-lotion'>Thank you!</h1>
        <p className='text-base text-lotion'>
          {(adOptimizor && adOptimizor.items.length > 0) ?`That's all submitted for you, we've also found some really
          great offers for you now, see what you think about these.` : `That's all submitted for you, Right now we don't have good offers for you check back ${'later'}.`}
        </p>
      </div>

      <div className='model--cardContainer'>
        {
          (adOptimizor && adOptimizor?.items.length > 0) && adOptimizor.items?.map((item: any) => (
          <div key={item.id} className='model__card__wrapper'>
            <Card>
              <div className='model__upper'>
                <Image src={item?.imageUrl} alt={item.brandName} width='164' height='85' />
                <p>{item.brandName}</p>
              </div>
              <div className='model__list'>
                <ul>
                  { item?.blurbs && item.blurbs.slice(0,1).map((itm: any, index: number) => {
                    return (
                      <li style={{ color: item?.color?.text }} key={index}>
                        {/* <Image
                          className='model__completed_icon'
                          src={item?.completed}
                          alt=''
                          width={'160'}
                          height='120'
                        /> */}
                        {itm.substring(0,170)}{itm.length>170? '...': ''}
                      </li>
                    );
                  })}
                </ul>
                <div className='model__next'>
                  <Link href={item.destUrl}>
                    <Image
                      src={Right}
                      alt='right-icon'
                    />
                  </Link>
                  
                </div>
              </div>
            </Card>
          </div>
        ))}
        <div className='model__banner--container'>
          {/* @ts-ignore */}
          <Banner src={banner} quote>
            <div className='relative z-10 quote__child__wrapper'>
              <div className='quote__content'>
                <div className='model__locationIcon'>
                  <Image src={locationIcon} alt='' />
                  <h1 className='h1 text-light text-center'>
                    thejobdirectory.net
                  </h1>
                </div>

                <h1 className='h1 text-light text-center'>
                  Ad space here
                </h1>
              </div>
            </div>
          </Banner>
        </div>
      </div>
    </div>
  );
};
export default ThankYouModel;
