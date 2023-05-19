import { useContext, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { AppContext } from '@/context/AppContext';
import dynamic from 'next/dynamic';
import Stack from '@/components/Stack';
import useMediaQuery from '@/hooks/useMediaQuery';
import Card from '@/components/Card';
import Select from '@/components/Select';
import logoSvg from '@/assets/icons/logo.svg';
import emailSvg from '@/assets/icons/email.svg';
import mobileSvg from '@/assets/icons/mobile.svg';
import locationSvg from '@/assets/icons/location.svg';
import homeSvg from '@/assets/icons/home.svg';
import wifiSvg from '@/assets/icons/wifi.svg';
import fetchDataFrom from '../api/fetchDataFrom';
import Input from '@/components/Input';
import { validatePhone } from '@/utils/fieldvalidation';
import Institutes from '@/components/Institutes';
import { useRouter } from 'next/router';
import CoursesForm from '@/components/CourseCard';
import { Image_Quality } from '@/appConstants';
import Loading from '@/components/Loading';
import { Button, Box, Text, Flex } from '@chakra-ui/react';
import NewBanner from '@/components/NewBanner';
import AOICard from '@/components/NewAOICard';
import style from './index.module.css';

// const Banner = dynamic(() => import('@/components/Banner'));
// const Navbar = dynamic(() => import('@/components/Navbar'));
const { videoBanner, imageBanner } = style;

type IProps = {
  interest: IPage;
};

const Interest: NextPage<IProps> = ({ interest }): JSX.Element => {
  const router = useRouter();
  const { query } = useRouter();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { setAppTitle, setNavType, setShowSubNav, programSlug, deviceType } = useContext(AppContext);
  const { stepsData, setStepsData } = useContext(AppContext);
  const [interests, setInterests] = useState<IInterest>();
  const [hero, setHero] = useState<IHero>();
  const [currentCount, setCurrentCount] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(false);
  const [validateEmail, setValidateEmail] = useState('' as string);
  const [isEmailValidate, setIsEmailValidate] = useState(false as boolean);

  useEffect(()=> console.log('query path is', query), [query]);
  useEffect(() => {
    setNavType('secondry');
    setShowSubNav(true);
    fetchDataFrom('pages/?headers_only=True&limit=5').then(
      async (res) => {
        const data: IInterest = await res.json();
        setInterests(data);
      }
    );
  }, []);

  // Fetch data from server
  useEffect(() => {
    fetchDataFrom(`heros/${interest.hero}/`).then(async (heros) => {
      const data: IHero = await heros.json();

      // Update state with fetched data
      setHero(data);
      setAppTitle(`${data?.hero_heading} - Education Directory`);
    });

    // Unset state on unmounting
    () => {
      setHero(undefined);
    };
  }, [interest]);

  const seeMorHandler = () => {
    setLoading(true);
    setCurrentCount(currentCount + 5);

    fetchDataFrom(
      `pages/?headers_only=True&limit=5&offset=${currentCount}`
    ).then(async (heross) => {
      const data = await heross.json();
      const joined = interests?.results.concat(
        data?.results
      ) as IResults[];
      //@ts-ignore
      // if (interests?.results.length !== 0)
      setInterests({ ...interests, results: joined });
      setLoading(false);
    });
  };

  const {
    email,
    phone,
    zip_code,
    address_line1,
    computer_internet_access,
  } = stepsData;

  const disabled =
    email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
    phone &&
    zip_code &&
    address_line1 &&
    computer_internet_access
      ? false
      : true;
  const checkEmailValidation = () => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(validateEmail)){
      setIsEmailValidate(false);
      setStepsData({ ...stepsData, email: validateEmail });
    } else {
      setIsEmailValidate(true);
      setStepsData({ ...stepsData, email: validateEmail });
    }
  };
  return (
    <>
      {/* <Navbar navPrimary showSubNav /> */}
      {interest && (
        <div className='aoi__body__wrapper'>
          <NewBanner 
            height='750px'
            isVideo={hero?.hero_video ? true : false}
            isParallax={true}
            src={hero?.hero_video ?? (hero?.hero_image?.asset || '')}
          >
            <Box height='750px' className={`${hero?.hero_video ? videoBanner : imageBanner}`}>
              <div className='banner__col1'>
                <h1 className='h1 text-white'>
                  {hero?.hero_heading}
                </h1>
                <Text pt='4' pb='26px' className='text-base text-light'>
                  {hero?.hero_text}
                </Text>
                <div className='aoi__banner__buttons'>
                  <Button 
                    bg='ED.secondary' 
                    color='ED.white' 
                    borderRadius='26'
                    h='52px'
                    w='287px'
                    className='btn-secondry mt-7 hide-sm w-btn h-btn' 
                    fontFamily='IBM Plex Sans' 
                    fontSize='xl'
                    fontWeight='600'
                    _hover={{ background: 'ED.secondary' }}
                    onClick={() => { router.push('/get-started/2'); }}
                  >
                    Get Started
                  </Button>
                  <button className='btn-transparent border-white text-white h4 mt-7 w-btn hide-sm'>
                    Learn more
                  </button>
                  <button className='btn-secondry h4 mt-7 show-sm'>
                    Find Programs
                  </button>
                </div>
              </div>
            </Box>

            <div className='hide-sm'></div>
          </NewBanner>

          <div className='bg-lotion relative z-30 pt-10'>
            {/* Overview Section */}
            <div id='overview'>
              <Stack>
                <div className='py-10 pr-3 col'>
                  <Text 
                    color='ED.fontColorPrimary' 
                    fontFamily='IBM Plex Serif' 
                    fontSize={`${deviceType == 'Mobile' ? '4xl' : '6xl'}`}
                    fontWeight={`${deviceType == 'Mobile' ? '600' : '500'}`} 
                     lineHeight='1.3'
                  >
                    {interest?.overview_heading}
                  </Text>
                  {interest?.overview_text
                    .split(/\n/)
                    .map((str: string, id: number) =>
                      str ? (
                        <p
                          key={`o-l-${id}`}
                          className='text-base text-dark py-2'
                        >
                          {str}
                        </p>
                      ) : null
                    )}
                </div>
                <div className='py-10 pr-3 col overview__col2'>
                  <div className='overview__card__wrapper'>
                    <Card>
                      <div className='p-5'>
                        <h4 className='h4 text-primary text-center'>
                          {programSlug.find(p=> p.slug === router.query.interest)?.title + ' Courses'|| '' }
                        </h4>
                        <CoursesForm />
                      </div>
                    </Card>
                  </div>
                  <div className='margin-auto pt-5'>
                    <Image
                      src={logoSvg}
                      width='0'
                      height='0'
                      loading='lazy'
                      alt='edu-logo'
                    />
                  </div>
                </div>
              </Stack>
            </div>

            {/* Logos Section */}
            <div className='logos'>
              <div className='container'>
                <div className='logos__grid'>
                  {interest?.logos.map(
                    ({ id, image, link, name }: ILogo, i: number) => (
                      <div key={id + i} className='logos__grid__col'>
                        <Link href={link}>
                          <Image
                            src={image}
                            width={i !== 5 ? 100 : 188}
                            height={80}
                            loading='lazy'
                            className='logos'
                            alt={name}
                          />
                        </Link>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Degrees section */}
            <div className='py-3' id='degrees'>
              <Stack>
                <div className='py-10 pr-3 col'>
                  <Text 
                    color='ED.fontColorPrimary' 
                    fontFamily='IBM Plex Serif' 
                    fontSize={`${deviceType == 'Mobile' ? '4xl' : '6xl'}`}
                    fontWeight={`${deviceType == 'Mobile' ? '600' : '500'}`} 
                    lineHeight='1.3'
                  >
                    {
                      interest?.degrees_can_study_heading.split('&').map((str: string, i: number) => (
                        <>
                          {str}{i == 0 && interest?.degrees_can_study_heading.includes('&') &&  '&'} <br/>
                          
                        </>
                      ))
                    }
                  </Text>
                  <p className='text-base text-dark py-3'>
                    {interest?.degrees_can_study_text}
                  </p>
                  <div className='text-base pt-3'>
                    Some example degrees include:
                    <ul className='pt-3'>
                      {interest?.degrees_list
                        .split(/;/)
                        .map((str: string, id: number) =>
                          str ? (
                            <li
                              key={str + id}
                              className='py-1 text-primary'
                            >
                              {str}
                            </li>
                          ) : null
                        )}
                    </ul>
                  </div>
                </div>
                <div className='py-10 col'>
                  <Image
                    src={interest?.degrees_image.asset}
                    loading='lazy'
                    quality={Image_Quality}
                    width='0'
                    height='0'
                    sizes='100%'
                    alt='ed-degrees'
                    className='degrees__image-class'
                  />
                  <small className='text-sm'>
                    Product and Industrial Design BA at Berkley
                    College{' '}
                  </small>
                </div>
              </Stack>
            </div>

            {/* Requirements section */}
            <div className='py-3' id='requirements'>
              <Stack reverseCol={isMobile ? false : true}>
                <div className='py-10 pr-3 col'>
                  <Text 
                    color='ED.fontColorPrimary' 
                    fontFamily='IBM Plex Serif' 
                    fontSize={`${deviceType == 'Mobile' ? '4xl' : '6xl'}`}
                    fontWeight={`${deviceType == 'Mobile' ? '600' : '500'}`} 
                     lineHeight='1.3'
                  >
                    {interest?.requirements_heading}
                  </Text>
                  <p className='text-base text-dark py-3'>
                    {interest?.requirements_text}
                  </p>
                  <div className='text-base pt-3'>
                  
                    <ul className='pt-3'>
                      {interest?.requirements_list
                        .split(/;/)
                        .map((str: string, id: number) =>
                          str ? (
                            <li
                              key={str + id}
                              className='py-1 text-primary'
                            >
                              {str}
                            </li>
                          ) : null
                        )}
                    </ul>
                  </div>
                </div>
                <div className='py-10 pr-10 col'>
                  <Image
                    src={interest?.requirements_image.asset}
                    loading='lazy'
                    width='0'
                    quality={Image_Quality}
                    height='0'
                    sizes='100%'
                    alt='ed-degrees'
                    className='degrees__image-class'
                  />
                  <small className='text-sm'>
                    Product and Industrial Design BA at Berkley
                    College{' '}
                  </small>
                </div>
              </Stack>
            </div>

            {/* Experience section */}
            <div className='py-3' id='experience'>
              <Stack>
                <div className='py-10 pr-3 col'>
                  <Text 
                    color='ED.fontColorPrimary' 
                    fontFamily='IBM Plex Serif' 
                    fontSize={`${deviceType == 'Mobile' ? '4xl' : '6xl'}`}
                    fontWeight={`${deviceType == 'Mobile' ? '600' : '500'}`} 
                     lineHeight='1.3'
                  >
                    {interest?.experience_heading}
                  </Text>
                  <p className='text-base text-dark py-3'>
                    {interest?.experience_text}
                  </p>
                  <div className='text-base pt-3'>
                   
                    <ul className='pt-3'>
                      {interest?.experience_list
                        .split(/;\r?\n/)
                        .map((str: string, id: number) =>
                          str ? (
                            <li
                              key={`exp-l-${id}`}
                              className='py-1 text-primary'
                            >
                              {str}
                            </li>
                          ) : null
                        )}
                    </ul>
                  </div>
                </div>
                <div className='py-10 pr-10 col'>
                  <Image
                    src={interest?.experience_image.asset}
                    loading='lazy'
                    width='0'
                    height='0'
                    quality={Image_Quality}
                    sizes='100%'
                    alt='ed-degrees'
                    className='degrees__image-class'
                  />
                  <small className='text-sm'>
                    Product and Industrial Design BA at Berkley
                    College{' '}
                  </small>
                </div>
              </Stack>
            </div>

            {/* Find Degree Program */}
            <div className='bg-white py-10'>
              <div className='container'>
                <div className='degree__program'>
                  <Text 
                    color='ED.fontColorPrimary' 
                    fontFamily='IBM Plex Serif' 
                    fontSize={`${deviceType == 'Mobile' ? '4xl' : '6xl'}`}
                    fontWeight={`${deviceType == 'Mobile' ? '600' : '500'}`} 
                     lineHeight='1.3'
                    className='text-center py-5'
                  >
                    Find your degree program today
                  </Text>
                  <div className='overview__card__wrapper mt-6'>
                    <Card>
                      <div className='p-5'>
                        <h4 className='h4 text-primary text-center'>
                          {programSlug.find(p=> p.slug === router.query.interest)?.title + ' Courses'|| '' }
                        </h4>
                        <CoursesForm />
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Careers section */}
            <Box id='careers'>
              <Box className='container'>
                <Flex gap='20' pt='68px' pb='110px' direction={deviceType == 'Mobile' ? 'column' : 'unset'}>
                  <Box className='col'>
                    <h1 className='h1 text-primary'>
                      {interest?.careers_heading}
                    </h1>
                    <p className='text-base text-dark pt-3'>
                      {interest?.careers_text}
                    </p>
                    <h4 className='h4 text-primary pt-3'>
                      {interest?.careers_first_sub_heading}
                    </h4>
                    <p className='text-base text-dark pt-3'>
                      {interest?.careers_first_sub_heading_text}
                    </p>
                    <h4 className='h4 text-primary pt-3'>
                      {interest?.careers_second_sub_heading}
                    </h4>
                    <p className='text-base text-dark pt-3'>
                      {interest?.careers_second_sub_heading_text}
                    </p>
                  </Box>
                  <Box className='flex-end'>
                    <ul className='career__lists__wrapper'>
                      {interest?.careers_list
                        .split(/;/)
                        .map((name: string, id: number) => (
                          <li
                            key={name + id}
                            className='text-primary ml-5 text-base'
                          >
                            {name}
                          </li>
                        ))}
                    </ul>
                  </Box>
                </Flex>
              </Box>
            </Box>

            {/* Quote Banner Section */}
            <div className='quote_wrapper'>
              <NewBanner 
                isVideo={interest.quote_video ? true : false}
                isParallax={false}
                src={interest.quote_bg_image && interest.quote_bg_image.asset ? interest.quote_bg_image.asset : null}
                height='750px'
              >
                <Box pos='absolute' top='0' zIndex='10' className='quote__child__wrapper'>
                  <div className='w-50'>
                    <h3 className='h3 text-light text-center'>
                      {interest.quote_text}
                    </h3>
                    <div className='center pt-3'>
                      <p className='text-sm text-white'>
                        {interest.quote_footer}
                      </p>
                    </div>
                  </div>
                </Box>
              </NewBanner>
            </div>

            <div id='get-started'>
              <div className='bg-white py-10'>
                <div className='container'>
                  <div className='degree__program'>
                    <Text 
                      color='ED.fontColorPrimary' 
                      fontFamily='IBM Plex Serif' 
                      fontSize={`${deviceType == 'Mobile' ? '4xl' : '6xl'}`}
                      fontWeight={`${deviceType == 'Mobile' ? '600' : '500'}`} 
                      className='text-center py-5'
                    >
                      Take your first step
                    </Text>
                    <div className='overview__card__wrapper mt-3'>
                      <div className='aoi__form'>
                        <div className='my-4'>
                          <Input
                            icon={emailSvg}
                            value={stepsData.email}
                            type='email'
                            placeholder='Email Address'
                            isEmail={isEmailValidate}
                            onChange={(e) =>{
                              setStepsData({
                                ...stepsData,
                                email: e,
                              });
                              setValidateEmail(e);
                            }}
                            onBlur={() => checkEmailValidation() }
                          />
                        </div>
                        <div className='aoi__form__multiCols'>
                          <Input
                            icon={mobileSvg}
                            type='tel'
                            value={validatePhone(stepsData.phone)}
                            placeholder='Phone number'
                            onChange={(e) =>
                              setStepsData({
                                ...stepsData,
                                phone: e.replace(/[^+\d]+/g, ''),
                              })
                            }
                          />
                          <Input
                            type='text'
                            value={stepsData.zip_code}
                            placeholder='Zip Code'
                            icon={locationSvg}
                            onChange={(e) =>
                              setStepsData({
                                ...stepsData,
                                zip_code: e,
                              })
                            }
                          />
                        </div>
                        <div className='my-4'>
                          <Input
                            type='text'
                            value={stepsData.address_line1}
                            placeholder='Street Address'
                            icon={homeSvg}
                            onChange={(e) =>
                              setStepsData({
                                ...stepsData,
                                address_line1: e,
                              })
                            }
                          />
                        </div>
                        <div className='my-4'>
                          <Select
                            icon={wifiSvg}
                            placeholder='Do you have internet at home?'
                            options={[
                              { title: 'I have internet at home', value: 'I have internet at home' },
                              { title: 'I have no access to the internet at home', value: 'I have no access to the internet at home' },
                            ]}
                            selectedOptions={{
                              title:
                                stepsData.computer_internet_access,
                            }}
                            onSelect={(val) =>
                              setStepsData({
                                ...stepsData,
                                computer_internet_access: val,
                              })
                            }
                          />
                        </div>

                        <div className='aoi__form__buttonWrapper'>
                          <button
                            onClick={() => {
                              if (!disabled) router.push('/get-started/2');
                            }}
                            className={`btn-primary text-white h4 h-btn ${
                              disabled && 'cursor-disabled'
                            } `}
                          >
                            Next Step
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Area of interests */}
            <div className='bg-lotion mt-10' id='area-of-interest'>
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
            </div>
            <br />
            {/* Instituates */}
            <div className='bg-lotion py-5 mt-6'>
              <div className='container'>
                <Institutes />
              </div>
            </div>

            <br />
            <br />
            {/* Footer section */}
            {/* <Footer areaOfInterest={interests} /> */}
          </div>
        </div>
      )}
    </>
  );
};

type IParams = {
  params: {
    interest: string;
  };
};

export const getServerSideProps = async ({ params }: IParams) => {
  const { interest } = params;
  const res = await fetchDataFrom(`pages/${interest}`);

  if (res.status === 200) {
    const data: IPage = await res.json();

    return { props: { interest: data } };
  }
  return {
    redirect: {
      permanent: false,
      destination: '/',
    },
    props: {},
  };
};

export default Interest;
