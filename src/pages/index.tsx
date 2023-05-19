import { useContext, useState, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { AppContext } from '@/context/AppContext';
import dynamic from 'next/dynamic';
import Step from '@/components/Step';
import { howItWorksData, stepOne, Image_Quality } from '@/appConstants';
import Card from '@/components/Card';
import starSvg from '@/assets/icons/star.svg';
import fetchDataFrom from './api/fetchDataFrom';
import Checkbox from '@/components/Checkbox';
import Institutes from '@/components/Institutes';
import { CurrentStatus } from '@/components/FormSteps/Two';
import { Box, Button, Text, Stack, Flex } from '@chakra-ui/react';
import NewBanner from '@/components/NewBanner';
import AOICard from '@/components/NewAOICard';
import style from './index.module.css';

// const Banner = dynamic(() => import('@/components/Banner'));
// const Navbar = dynamic(() => import('@/components/Navbar'));
const { mob_logo_grid, mob_logo_grid_col, edu_star_icon } = style;

type IProps = {
  homePage: IHomePage;
  hero: IHero;
  interests: IInterest;
};

const Home: NextPage<IProps> = ({ hero, homePage, interests }) => {
  const router = useRouter();
  const { query } = useRouter();
  const searchParams = useSearchParams();
  const { setAppTitle, stepsData, setStepsData, setNavType, setShowSubNav, programSlug, deviceType } = useContext(AppContext);
  const [interestsData, setInterestsData] = useState<IInterest>(interests);
  const [error, setError] = useState<Error | null>(null);
  const [currentCount, setCurrentCount] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(false);
  const [ProgressBarStatus, setProgressBarStatus] = useState<CurrentStatus>({
    width: 40,
    completed: 1,
    isForward: true,
  });
  const [logoAndQoute, setLogoAndQoute] = useState({} as any);
  const [heroBanner, setHeroBanner] = useState({} as any);

  useEffect(()=> console.log('query path is', query), [query]);
  useEffect(() => {
    setNavType('primary');
    setShowSubNav(false);
    setAppTitle('Education Directory Home Page');
    setStepsData({...stepsData, current: 0});
    fetchDataFrom('home/').then(async (home) => {
      const data = await home.json();
      console.log('api/home', data[0]);
      setLogoAndQoute(data[0]);
    });
    fetchDataFrom('allprograms/').then(async (programs) => {
      const data = await programs.json();
      console.log('api/allprograms', data);
      // setAllprograms(data);
    });
  }, []);
  useEffect(()=>{
    if(logoAndQoute.hasOwnProperty('hero')){
      const { hero } = logoAndQoute;
      fetchDataFrom(`heros/${hero}`).then(async (home) => {
        const data = await home.json();
        console.log('api/heros', data);
        setHeroBanner(data);
      });
    };
  }, [logoAndQoute]);

  const statusHandler = (obj: CurrentStatus) => {
    setProgressBarStatus({
      width: obj.width,
      completed: obj.completed,
      isForward: obj.isForward,
    });
  };
  const seeMorHandler = () => {
    setLoading(true);
    setCurrentCount(currentCount + 5);

    fetchDataFrom(
      `pages/?headers_only=True&limit=5&offset=${currentCount}`
    ).then(async (heross) => {
      const data = await heross.json();
      const joined = interests?.results.concat(data?.results) as IResults[];
      //@ts-ignore
      if (interestsData.length !== 0)
        setInterestsData({ ...interestsData, results: joined });
      setLoading(false);
    }).catch((err) => setError(err));
  };
  if (error) {
    return <div>An error occurred: {error.message}</div>;
  };

  return (
    <>
      <Stack className='body__wrapper' id='why-education-directory'>
        <Box h='589px'>
          <NewBanner 
            isVideo={heroBanner?.hero_video !== null ? true : false}
            isParallax={false}
            src={heroBanner?.hero_video ?? (heroBanner?.hero_image?.asset || '')}
          >
            <Box display='flex' alignItems='center' justifyContent='space-between' className='childs' maxW='87%' w='100%' m='0 auto' h='100%' pos='absolute' top='0' left='0' right='0'  zIndex='10'>
              <Box>
                <Text 
                  color='ED.fontColorWhite' 
                  fontFamily='IBM Plex Sans'
                  fontSize='6xl'
                  className='text-center-sm'
                >
                  {heroBanner?.hero_heading}
                </Text>
                <Text
                  fontSize='md'
                  fontFamily='IBM Plex Sans' 
                  color='ED.fontColorLight'
                  pt='2'
                  className='hide-sm'
                >
                  {heroBanner?.hero_text}
                </Text>
              </Box>
              <Box w='460px' minW='400px' pos='absolute' right='0%' top='50%' transform='translateY(-50%)' 
                // className={`hide-sm ${stepsData.current >= 2 && 'fade-out'}`}
                className={'hide-sm'}
              >
                <Card>
                  <Box className='p-5'>
                    <Text 
                      fontSize='22px'
                      fontWeight='600'
                      align='center'
                      color='ED.fontColorPrimary'
                      fontFamily='IBM Plex Sans' 
                      py='3'
                    >
                      {stepOne.heading}
                    </Text>
                    {stepOne.options.map((item, i) => (
                      <Box key={`stepOne-options${i}`} className='checkbox__wrapper'>
                        <Checkbox
                          clickHandler={() =>
                            setStepsData({
                              ...stepsData,
                              online_or_campus: item.value,
                            })
                          }
                          name={item.title}
                          icon={item.icon}
                          checked={stepsData.online_or_campus === item.value ? true : false}
                        />
                      </Box>
                    ))}
                    <Box className='checkbox__wrapper'>
                      <Button
                        bg='ED.secondary' 
                        color='ED.white' 
                        borderRadius='26'
                        h='52px'
                        className='btn-secondry' 
                        fontFamily='IBM Plex Sans' 
                        _hover={{ background: 'ED.secondary' }}
                        onClick={() => { 
                          router.push('/get-started/2'); 
                        }}
                      >
                        Get Started
                      </Button>
                    </Box>
                    <Text 
                      align='center'
                      color='ED.fontColorDark' 
                      fontFamily='IBM Plex Serif' 
                      fontSize='xs'
                    >
                      Usually takes less than 3 minutes to get results
                    </Text>
                  </Box>
                </Card>
              </Box>
            </Box>
          </NewBanner>
        </Box> 

        <Box bg='ED.white' mt='0 !important' pos='relative'>
          {/* Logos Section */}
          <Box 
            bg='ED.white'
            maxW='100%' 
            m='auto' 
            className={`${deviceType == 'Mobile' ? 'mob_logos' : 'logos'}`}
          >
            <Box 
              my={`${deviceType == 'Mobile' ? '39px' : ''}`} 
              className='container'
            >
              <Box 
                className={`${deviceType == 'Mobile' ? mob_logo_grid : 'logos__grid'}`}
              >
                {
                  logoAndQoute?.logos?.map(
                    ({ id, image, link, name }: any, i: number) => (
                      <Box 
                        key={`logo-${id}`} 
                        className={`${deviceType == 'Mobile' ? mob_logo_grid_col : 'logos__grid__col'}`}
                      >
                        <Link href={link}>
                          <Image
                            src={image}
                            loading='lazy'
                            quality={Image_Quality}
                            width={i !== 5 ? 100 : 188}
                            height={80}
                            className={`${deviceType == 'Mobile' ? 'mob_logos' : 'logos'}`}
                            alt={name}
                          />
                        </Link>
                      </Box>
                    )
                  )
                }
              </Box>
            </Box>
          </Box>

          {/* How it works section */}
          <Stack bg='ED.lotion' className='step_wrapper' id='how-it-works'>
            <Box className='container'>
              <Text 
                align='center'
                color='ED.fontColorPrimary' 
                fontFamily='IBM Plex Serif' 
                fontSize={`${deviceType == 'Mobile' ? '4xl' : '6xl'}`}
                fontWeight={`${deviceType == 'Mobile' ? '600' : '500'}`} 
                mb='9'
              >
                How it works
              </Text>
              <Box className='child_wrapper'>
                {howItWorksData?.map(
                  ({ id, content, icon, stepNumber }) => (
                    <Step
                      key={`HIW-${id}`}
                      stepNumber={stepNumber}
                      content={content}
                      icon={icon}
                    />
                  )
                )}
              </Box>
            </Box>
          </Stack>

          {/* Quote Banner Section */}
          {(stepsData.current == 1 || stepsData.current == 0) ? (
            <Box maxH='691px' className='quote--container'>
              <NewBanner 
                isVideo={logoAndQoute?.qoute_video == null ? false : true}
                isParallax={false}
                height='691px'
                src={logoAndQoute?.qoute_video == null ? logoAndQoute?.qoute_bg_image?.asset : logoAndQoute?.qoute_video}
              >
                <Stack pos='relative' className='z-10 quote__child__wrapper'>
                  <Box maxW='386px' textAlign='center' className='quote__content'>
                    <Flex gap='5px' alignItems='center' justifyContent='center'>
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Image
                          key={`edu-${star}`}
                          loading='lazy'
                          quality={Image_Quality}
                          src={starSvg}
                          alt={`edu-${star}`}
                          style={{display: 'inline-block'}}
                          className={edu_star_icon}
                        />
                      ))}
                    </Flex>
                    <Text
                      fontSize='3xl'
                      color='ED.fontColorLight'
                      fontFamily='IBM Plex Sans' 
                      align='center'
                      fontWeight='600'
                      my='7px'
                    >
                      <q>{logoAndQoute?.quote_text}</q>
                    </Text>
                    <Box pt='3' mb='10'>
                      <Text fontSize='sm' fontFamily='IBM Plex Sans' color='ED.fountColorWhite' textAlign='center'>
                        {logoAndQoute?.qoute_footer}
                      </Text>
                    </Box>
                    <Button
                      bg='ED.secondary' 
                      color='ED.white' 
                      borderRadius='26'
                      boxShadow='3px 3px 15px #00000050'
                      h='52px'
                      w='290px'
                      className='btn-secondry' 
                      fontFamily='IBM Plex Sans' 
                      _hover={{ background: 'ED.secondary' }}
                      onClick={() => { router.push('/get-started/2'); }}
                    >
                      Get Started
                    </Button>
                  </Box>
                </Stack>
              </NewBanner>
            </Box>
          ) : null}

          {/* Area of interests */}
          {stepsData.current == 1 || stepsData.current == 0 ? (
            <Box bg='ED.white' py='110px' id='area-of-intrest'>
              <AOICard 
                header={true} 
                headerTitle={'Areas of Interest'}
                loading={loading}
                data={programSlug} 
                // data={allPrograms}
                device={deviceType}
                onClick={seeMorHandler} 
                currentCount={currentCount}
              />
            </Box>
          ) : null}

          {/* Instituate */}
          {(stepsData.current == 1 || stepsData.current == 0) ? (
            <Box bg='ED.light' pt={`${deviceType == 'Mobile' ? '20' : '5'}`} pb={`${deviceType == 'Mobile' ? '30' : '5'}`} 
              // className='bg-lotion py-5 mt-6'
            >
              <Box py='35px' className='container'>
                <Institutes />
              </Box>
            </Box>
          ) : null}
        </Box>
      </Stack>
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    // const [homePageRes, interestsRes] = await Promise.allSettled([
    //   fetchDataFrom('home/home-page/'),
    //   fetchDataFrom('pages/?headers_only=True&limit=5'),
    // ]);
    const homePageRes = await fetchDataFrom('home/home-page/');
    const homePage = await homePageRes.json();
    // console.log('homePageRes', homePage)
    // const interests =
    //   interestsRes.status === 'fulfilled'
    //     ? await interestsRes.value.json()
    //     : [];

    if (!homePage) {
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
      };
    }

    // const heroRes = await fetchDataFrom(`heros/${homePage.hero}`);
    // const heroData = await heroRes.json();

    return { props: { homePage } };
  } catch (error) {
    console.error(error);
    return {
      props: { error: 'Failed to fetch data' },
    };
  }
};

export default Home;
