import React, { FC, useContext, useState, useRef, useEffect } from 'react';
import { AppContext } from '@/context/AppContext';
import TermsCheckbox from '../TermsCheckbox';
import { useRouter } from 'next/router';
import {
  postSearchRequest,
  prepareSearchBody,
} from '@/pages/api/searchApi';
import { Box, Button, Stack, Text } from '@chakra-ui/react';

import Loading from '../Loading';
import Link from 'next/link';

const Seven = () => {
  const router = useRouter();
  const { query } = useRouter();
  const { stepsData, setStepsData, setSearchIdentifier, deviceType } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const ref = useRef(null);

  useEffect(()=> console.log('query path is', query), [query]);
  
  const clickHandler = async () => {
    setLoading(true);
    try {
      const searchBody = await prepareSearchBody(stepsData);
      const searchIdentifier = (await postSearchRequest(searchBody)) as ISearchResponse;
      await setSearchIdentifier(searchIdentifier);
      
      setLoading(false);
      stepsData.searchIdentifier = searchIdentifier.search_identifier;
      localStorage.setItem('getStarted', JSON.stringify(stepsData));
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
    <Stack className='step-wrapper'>
      {/* <Link href='../thank-you' rel='noopener noreferrer' target='_blank' ref={ref} style={{display: 'none'}} /> */}
      <Link href='../interested-programs' rel='noopener noreferrer' target='_blank' ref={ref} style={{display: 'none'}} />
      <Text fontSize={`${deviceType === 'Mobile' ? '3xl' : '4xl'}`} fontWeight='600' fontFamily='IBM Plex Sans' align='center' color='ED.primary' pb='0.75' pt='2px'>
        Get your results
      </Text>

      <Box w={`${deviceType === 'Mobile' ? '360px' : '400px'}`} className='step-wrapper-body'>
        <div className='row'>
          <div className='pr-3'>
            <TermsCheckbox
              onChange={(check) => setAcceptTerms(check)}
            />
          </div>
          <div>
            <p className='text-sm text-dark '>
              Some blurb that may be necessary for some schools, you
              may also need a link to the
              <a href='../privacy-policy' target={'_blank'} className='text-dark text-underline text-1rem'>
                {' '}
                terms and conditions.
              </a>
            </p>
            <p className='text-dark text-sm mt-6'>
              By clicking the “Get info” button, I authorize Keiser
              University to make or allow the placement of recurring
              marketing calls, emails, and texts to me at the phone
              number that I have provided, including through the use
              of automated technology or a prerecorded or artificial
              voice. I understand that I am not required to provide my
              phone number as a condition of purchasing any property,
              goods, or services. Privacy policy
            </p>
            <p className='text-dark mt-3 text-underline text-1rem'>
              * † ‡ Click Here for Important Disclosures
            </p>
          </div>
        </div>
      </Box>
      <Stack spacing='3' mt='50px !important' className='step-wrapper-footer'>
        <Button
          bg='ED.secondary' 
          color='ED.white' 
          borderRadius='26'
          w='290px'
          h='52px'
          fontFamily='IBM Plex Sans' 
          fontSize='xl'
          fontWeight='600'
          _hover={{ background: 'ED.secondary' }}
          className={`btn-secondry h4 ${!acceptTerms || loading ? 'cursor-disabled' : ''} `}
          isDisabled={!acceptTerms}
          onClick={clickHandler}
        >
          {loading ? <Loading height='32px' color='white' /> : 'Get Results'}
        </Button>
        <Box
          fontSize='xs' fontWeight='400' fontFamily='IBM Plex Sans' color='ED.fontColorLightGray'
          className='text-center'
          role='button'
          _hover={{ color: 'ED.fontColorDark', textDecoration: 'underLine' }}
          onClick={() => {
            setStepsData({ ...stepsData, current: 6 });
            router.push(
              { pathname: '/get-started/6' },
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

export default Seven;
