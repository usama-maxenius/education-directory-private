import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '@/context/AppContext';
import { cities } from '@/appConstants';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import { Box, Text, Stack, Button } from '@chakra-ui/react';
import chevronDown from '@/assets/icons/chevron-down.svg';
import chevronUp from '@/assets/icons/chevron-up.svg';
import tempImage from '@/assets/images/tempImage.png';
import ReactGA from 'react-ga';

const { masonryContainer, headingAndChevronWrapper, whyEDIcon, checkbox__wrapper, schoolBtn } = styles;

const Schools = () => {
  return <CitiesList />;
};

export default Schools;

const CitiesList = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  const handleGetStarted = () => {
    ReactGA.event({
      category: 'School',
      action: 'Get Started',
      label: 'School'
    });
  };

  return (
    <>
      <Box w='100%' bg='ED.primary' borderRadius='6' p={4} className={masonryContainer}>
        <Stack>
          {
            cities.map((city, idx) => {
              return(
                <Box key={`cities-${idx}-${city}`}>
                  <Box className={headingAndChevronWrapper}>
                    <Text onClick={() => handleToggle(idx)} textTransform='capitalize' fontFamily='IBM Plex Sans' fontWeight='400' fontSize='md' color='ED.white'>{city?.name}</Text>
                    {
                      expanded == idx ? 
                      <>
                        <Image
                          className={`${whyEDIcon} `}
                          src={chevronUp}
                          alt=''
                          onClick={() => handleToggle(idx)}
                        />
                      </> : <>
                        <Image
                          onClick={() => handleToggle(idx)}
                          className={`${whyEDIcon} `}
                          src={chevronDown}
                          alt=''
                        />
                      </>
                    }
                  </Box>
                  {
                    expanded == idx &&
                    city?.colleges.map((program: any, i: any) => {
                      return (
                        <>
                          <Link
                            // href={`../programs/${program.slug}`}
                            href='#'
                            key={`${program.slug}-${i}`}
                            style={{ textDecoration: 'none' }}
                          >
                            <Text key={i} color='ED.white' fontFamily='IBM Plex Sans' fontWeight='400' fontSize='md'>
                              {program}
                            </Text>
                          </Link>
                        </>
                      );
                    })
                  }
                </Box>
              );
            })
          }
          <Box className={checkbox__wrapper}>
            <Image src={tempImage} alt='' />
            <Button color='ED.white' fontSize='xl' bg='ED.secondary' _hover={{ background: 'ED.secondary' }} className={`${schoolBtn} btn-secondry h-btn`}
              onClick={() => { handleGetStarted(); router.push('/get-started/2'); }}
            >
              Get Started
            </Button>
          </Box>
        </Stack>
      </Box>
    </> 
  );
};
