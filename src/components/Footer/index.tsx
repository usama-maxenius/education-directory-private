import { FC, useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { AppContext } from '@/context/AppContext';
import { footerData } from '@/appConstants';
import Link from 'next/link';
import Image from 'next/image';
import style from './index.module.css';

const { footerSection, firstSection, imgColor, content, divider, sectionWrapper} = style;

const Footer: FC = () => {
  const { programSlug, footerText } = useContext(AppContext);
  // const [interest, setInterest] = useState([] as IHeros[]);

  // useEffect(() => {
  //   fetchDataFrom('pages/?headers_only=True').then(async (heros) => {
  //     const data = await heros.json();
  //     setInterest(data.results);
  //   });
  // }, []);
  return (
    <Box bg='ED.primary' color='ED.fontColorWhite' className={`${footerSection} pb-4`}>
      <Box className='container'>
        <Box className={firstSection}>
          <Image
            width={171.641}
            height={40}
            className={imgColor}
            alt='educationDirectory'
            src={footerData.logo}
          />

          <Text color='ED.fontColorLotion' fontFamily='IBM Plex Sans' fontWeight='400' fontSize='sm' className={content}>{footerText ? footerText : footerData.content}</Text>
        </Box>
        <Box className={divider}></Box>
        <Box className={sectionWrapper}>
          <Box>
            <Text color='ED.fontColorWhite' fontFamily='IBM Plex Sans' fontWeight='600' fontSize='2xl' className='pb-2'>Areas of interest</Text>
            <Box>
              {programSlug &&
                programSlug?.map((interest, idx) => (
                  <Link
                    href={`../area-of-interest/${interest.slug}`}
                    key={`footer-${interest.slug}-${idx}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Text
                      color='ED.fontColorLotion'
                      key={`intrest-${idx}`}
                      fontFamily='IBM Plex Sans' fontWeight='400' fontSize='md' py='1'
                    >
                      {interest.title}
                    </Text>
                  </Link>
                ))}
            </Box>
          </Box>

          <Box>
            <Text color='ED.fontColorWhite' fontFamily='IBM Plex Sans' fontWeight='600' fontSize='2xl' className='pb-2'>Fastest growing occupations</Text>
            <Box>
              {footerData.occupations.map((occupation, idx) => (
                <Text
                  color='ED.fontColorLotion'
                  key={`occupation-${idx}`}
                  fontFamily='IBM Plex Sans' fontWeight='400' fontSize='md' py='1'
                >
                  {occupation}
                </Text>
              ))}
            </Box>
          </Box>

          <Box>
            <Text color='ED.fontColorWhite' fontFamily='IBM Plex Sans' fontWeight='600' fontSize='2xl' className='pb-2'>Legal information</Text>
            <Box>
              {footerData.information.map((info, idx) => (
                (info === 'Privacy Policy' || info === 'Terms of Use')
                ? <Link key={`info-${idx}`} href={`${info === 'Privacy Policy'? 'privacy-policy': 'terms-of-use'}`}>
                    <Text 
                      color='ED.fontColorLotion'
                      key={`info-${idx}`}
                      fontFamily='IBM Plex Sans' fontWeight='400' fontSize='md' py='1'
                    >
                      {info}
                    </Text>
                  </Link>
                : <Text
                    color='ED.fontColorLotion'
                    key={`info-${idx}`}
                    fontFamily='IBM Plex Sans' fontWeight='400' fontSize='md' py='1'
                  >
                    {info}
                  </Text>
              ))}

              <Text color='ED.fontColorWhite' fontFamily='IBM Plex Sans' fontWeight='600' fontSize='2xl' className='pb-2'>Contact</Text>
              <Text 
                color='ED.fontColorLotion' 

                fontFamily='IBM Plex Sans' fontWeight='400' fontSize='md' py='1'
              >
                (877) 855-5785
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className={divider}></Box>
        <Box>
          <Text color='ED.fontColorLotion' fontFamily='IBM Plex Sans' fontWeight='400' fontSize='sm' >{footerData.location}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
