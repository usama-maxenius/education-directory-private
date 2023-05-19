import React, { useContext } from 'react';
import Link from 'next/link';
import { AppContext } from '@/context/AppContext';
import styles from './index.module.css';
import { Box, Stack, Text } from '@chakra-ui/react';

const { masonryContainer, masonryItem } = styles;

const Institutes = () => {
  const { uniList, deviceType } = useContext(AppContext);
  return (
    <>
      <Stack spacing='16' py='3'>
        <Text 
          maxW={`${deviceType == 'Mobile' ? '100%' : '389px'}`} 
          m='auto' align='center' 
          fontWeight={`${deviceType == 'Mobile' ? '600' : '500'}`} 
          color='ED.fontColorPrimary' fontFamily='IBM Plex Serif' 
          fontSize={`${deviceType == 'Mobile' ? '4xl' : '6xl'}`}
        >
          Colleges & Universites
        </Text>
        <Box className={masonryContainer} mt='16 !important'>
          {
            Object.keys(uniList).map((l, idx)=> 
            <Box key={idx} className={masonryItem}>
              <Text color='ED.fontColorPrimary' fontFamily='IBM Plex Sans' fontWeight='600' fontSize='22px' textTransform='uppercase' mb='2'>{l.replace(' Careers', '')}</Text>
              { //@ts-ignore
                uniList[l].map((program, i) => (
                <Link href={`../programs/${program.slug}`} key={`${program.slug}-${i}`} style={{textDecoration: 'none'}}>
                  <Text key={i} color='ED.fontColorDark' fontFamily='IBM Plex Sans' fontWeight='400' fontSize='md'>
                    {program.title}
                  </Text>
                </Link>
              ))}
            </Box>)
          }
        </Box>
      </Stack>
    </>
  );
};

export default Institutes;
