import { useState, useEffect, useContext } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { AppContext } from '@/context/AppContext';
import Footer from '@/components/Footer';
import Stack from '@/components/Stack';
import { Image_Quality, programsData } from '@/appConstants';
import useMediaQuery from '@/hooks/useMediaQuery';
import Card from '@/components/Card';
import fetchDataFrom from '../api/fetchDataFrom';
import ProgramsForm from '@/components/Form';
import Institutes from '@/components/Institutes';
import Loading from '@/components/Loading';
import NewBanner from '@/components/NewBanner';
import { Box, Button } from '@chakra-ui/react';
import style from './index.module.css';

const { videoBanner, imageBanner } = style;
const Banner = dynamic(() => import('@/components/Banner'));
const Navbar = dynamic(() => import('@/components/Navbar'));

type IProps = {
  program: IProgram;
};

const Program: NextPage<IProps> = ({ program }): JSX.Element => {
  const { query } = useRouter();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { setAppTitle, setCurrentPage, setShowSubNav, setNavType} = useContext(AppContext);
  const [interests, setInterests] = useState<IInterest>();
  const [programHeros, setProgramHeros] = useState<IInterest>();
  const [currentCount, setCurrentCount] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(false);

  const [hero, setHero] = useState<IHero>();

  useEffect(()=> console.log('query path is', query), [query]);
  useEffect(() => {
    setNavType('secondry');
    setShowSubNav(true);
    setCurrentPage('programs');
    setAppTitle(`${program.program_as_heading} - Education Directory`);
    fetchDataFrom('pages/?headers_only=True').then(async (heros) => {
      const data = await heros.json();
      setInterests(data);
    });
    () => {
      setInterests(undefined);
    };
  }, []);

  useEffect(() => {
    fetchDataFrom(`heros/${program.hero}`).then(async (heros) => {
      const data: IHero = await heros.json();
      setHero(data);
    });
    () => {
      setHero(undefined);
    };
  }, [program]);

  useEffect(() => {
    fetchDataFrom('programs/?headers_only=True&limit=5').then(
      async (res) => {
        const data = await res.json();
        return setProgramHeros(data);
      }
    );
    () => {
      setProgramHeros(undefined);
    };
  }, []);

  const seeMorHandler = () => {
    setLoading(true);
    setCurrentCount(currentCount + 5);

    fetchDataFrom(
      `programs/?headers_only=True&limit=5&offset=${currentCount}`
    ).then(async (heross) => {
      const data = await heross.json();
      const joined = interests?.results.concat(
        data?.results
      ) as IResults[];
      //@ts-ignore
      // if (interests?.results.length !== 0)
      setProgramHeros({ ...programHeros, results: joined });
      setLoading(false);
    });
  };

  return (
    <>
      {/* <Navbar navPrimary showSubNav /> */}
      {program.program_as_heading && (
        <div className='aoi__body__wrapper'>
          {(hero?.hero_video || hero?.hero_image) && (
            // <Banner
            //   src={
            //     hero?.hero_video ?? (hero?.hero_image?.asset || '')
            //   }
            //   srcType={hero?.hero_video ? 'video' : 'image'}
            //   parallax
            // >
            //   <div className='fixed container z-10 banner__children__wrapper'>
            //     <div className='banner__col1'>
            //       <h1 className='h1 text-white'>
            //         {hero?.hero_heading}
            //       </h1>
            //       <p className='text-base text-light py-3 '>
            //         {hero?.hero_text}
            //       </p>
            //       <div className='aoi__banner__buttons'>
            //         <button className='btn-transparent text-white w-btn border-white h4 mt-7 hide-sm'>
            //           Learn more
            //         </button>
            //       </div>
            //     </div>
            //     <div className='hide-sm w-full'>
            //       <ProgramsForm />
            //     </div>
            //   </div>
            // </Banner>
            <NewBanner 
              height='750px'
              isVideo={hero?.hero_video ? true : false}
              isParallax={true}
              src={hero?.hero_video ?? (hero?.hero_image?.asset || '')}
            >
              <Box height='750px' className={`${hero?.hero_video ? videoBanner : imageBanner}`} 
                // className='fixed container z-10 banner__children__wrapper'
              >
                <div className='banner__col1'>
                  <h1 className='h1 text-white'>
                    {hero?.hero_heading}
                  </h1>
                  <p className='text-base text-light py-3 '>
                    {hero?.hero_text}
                  </p>
                  <div className='aoi__banner__buttons'>
                    {/* <Button 
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
                    </Button> */}
                    <button className='btn-transparent text-white w-btn border-white h4 mt-7 hide-sm'>
                      Learn more
                    </button>
                  </div>
                </div>
                <div className='hide-sm w-full'>
                  <ProgramsForm textColorBlack={false} />
                </div>
              </Box>
            </NewBanner>
          )}

          <div className='bg-lotion relative z-30 pt-10'>
            {/* Overview Section */}
            <div id='overview'>
              <Stack>
                <div className='py-10 pr-3 col'>
                  <h1 className='h1 text-primary'>
                    {program.program_as_heading}
                  </h1>
                  {program.program_as_text
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
                <div className='py-10 col hide-sm'>
                  <div className='programs__overview__card__wrapper'>
                    <Card bgColor='primary'>
                      <div className='p-5'>
                        <h4 className='h4 text-white text-center'>
                          Find an Applied Engineering program
                        </h4>
                        <ProgramsForm  textColorBlack={false} />
                      </div>
                    </Card>
                  </div>
                </div>
              </Stack>
            </div>
            <div className='programs__overview__card__wrapper__mobile show-sm'>
              <Card bgColor='primary'>
                <div className='p-5'>
                  <h4 className='h4 text-white text-center'>
                    Find an Applied Engineering program
                  </h4>
                  <ProgramsForm textColorBlack={true} />
                </div>
              </Card>
            </div>
            {/* Logos Section */}
            <div className='logos'>
              <div className='container'>
                <div className='logos__grid'>
                  {program?.logos.map(
                    ({ id, image, link, name }: ILogo, i: number) => (
                      <div
                        key={`l-g${id}`}
                        className='logos__grid__col'
                      >
                        <Link href={link}>
                          <Image
                            src={image}
                            loading='lazy'
                            quality={Image_Quality}
                            width={i !== 5 ? 100 : 188}
                            height={80}
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

            {/* Goals section */}
            <div className='py-3' id='goals-outcomes'>
              <Stack>
                <div className='py-10 pr-3 col'>
                  <h1 className='h1 text-primary'>
                    {program?.goals_heading}
                  </h1>
                  <p className='text-base text-dark py-3'>
                    {program?.goals_text}
                  </p>
                  <div className='text-base pt-3'>
                    <ul className='pt-3'>
                      {program?.goals_list
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
                    src={program?.goals_image.asset}
                    loading='lazy'
                    width='0'
                    height='0'
                    quality={Image_Quality}
                    sizes='100%'
                    alt='ed-degrees'
                    className='degrees__image-class'
                  />
                  <small className='text-sm text-end'>
                    Applied engineering AS at Keiser university
                  </small>
                </div>
              </Stack>
            </div>

            {/* Outcomes section */}
            <div className='py-3'>
              <Stack reverseCol={isMobile ? false : true}>
                <div className='py-10 pr-3 col'>
                  <h1 className='h1 text-primary'>
                    {program?.outcomes_heading}
                  </h1>
                  <p className='text-base text-dark py-3'>
                    {program?.outcomes_text}
                  </p>
                  <div className='text-base pt-3'>
                   
                    <ul className='pt-3'>
                      {program?.outcomes_list
                        .split(/;/)
                        .map((str: string, id: number) =>
                          str ? (
                            <li
                              key={`ot-l${id}`}
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
                    src={program?.outcomes_image.asset}
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

            {/* Experience section */}
            <div className='py-3' id='experience'>
              <Stack>
                <div className='py-10 pr-3 col'>
                  <h1 className='h1 text-primary'>
                    {program?.experience_heading}
                  </h1>
                  <p className='text-base text-dark py-3'>
                    {program?.experience_text}
                  </p>
                  <div className='text-base pt-3'>
                  
                    <ul className='pt-3'>
                      {program?.experience_list
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
                    src={program?.experience_image.asset}
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
                  <h1 className='h1 text-primary text-center py-5'>
                    Find your degree program today
                  </h1>
                  <div className='overview__card__wrapper mt-6'>
                    <ProgramsForm textColorBlack={true} primaryForm />
                  </div>
                </div>
              </div>
            </div>

            {/* Careers section */}
            <div className='py-5' id='careers'>
              <Stack>
                <div className='col py-10'>
                  <h1 className='h1 text-primary'>
                    {program?.careers_heading}
                  </h1>
                  <p className='text-base text-dark pt-3'>
                    {program?.careers_text}
                  </p>
                  <h4 className='h4 text-primary pt-3'>
                    {program?.careers_first_sub_heading}
                  </h4>
                  <p className='text-base text-dark pt-3'>
                    {program?.careers_first_sub_heading_text}
                  </p>
                  <h4 className='h4 text-primary pt-3'>
                    {program?.careers_second_sub_heading}
                  </h4>
                  <p className='text-base text-dark pt-3'>
                    {program?.careers_second_sub_heading_text}
                  </p>
                </div>
                <div className=' flex-end'>
                  <ul className='career__lists__wrapper'>
                    {program?.careers_list
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
                </div>
              </Stack>
            </div>

            {/* Quote Banner Section */}
            <div className='quote_wrapper'>
              <Banner src={program.quote_bg_image && program.quote_bg_image.asset ? program.quote_bg_image.asset : null}>
                <div className='relative z-10 quote__child__wrapper'>
                  <div className='w-50'>
                    <h3 className='h3 text-light text-center'>
                      {program.quote_text}
                    </h3>
                    <div className='center pt-3'>
                      <p className='text-sm text-white'>
                        {program.quote_footer}
                      </p>
                    </div>
                  </div>
                </div>
              </Banner>
            </div>
            {/* Apply Now Form */}
            <div className='bg-white py-10'>
              <div className='container'>
                <div className='degree__program'>
                  <h1 className='h1 text-primary text-center py-5'>
                    Apply Now
                  </h1>
                  <div className='overview__card__wrapper mt-3'>
                    <ProgramsForm textColorBlack={true} primaryForm />
                  </div>
                </div>
              </div>
            </div>

            {/* Area of interests */}
            <div className='bg-lotion py-10' id='similar-programs'>
              <div className=''>
                <h1 className='h1 center text-primary pt-5 '>
                  Similar programs
                </h1>
                <div className='programs__card__wrapper'>
                  {programHeros?.results?.map(
                    ({
                      hero_heading,
                      hero_image,
                      hero_text,
                      slug,
                    }) => (
                      <div
                        key={slug}
                        className='programs__card__wrapper__content'
                      >
                        <Card>
                          <div className='programs_card'>
                            <div className='programs__card__image__container'>
                              <Image
                                src={hero_image}
                                loading='lazy'
                                width='0'
                                quality={Image_Quality}
                                height='0'
                                sizes='100%'
                                className='aoi__card__image'
                                alt='edu'
                              />
                            </div>
                            <div className='card__body'>
                              <Link href={`/programs/${slug}`}>
                                <h4 className='h4 text-primary py-1'>
                                  {hero_heading}
                                </h4>
                              </Link>
                              <p className='text-base truncate-4'>
                                {hero_text}
                              </p>
                            </div>
                            <div className='programs__card__footer'>
                              <Link href={`/programs/${slug}`}>
                                <button className='btn-transparent text-primary  h4 border-primary'>
                                  View Program
                                </button>
                              </Link>
                            </div>
                          </div>
                        </Card>
                      </div>
                    )
                  )}
                </div>
                {programHeros &&
                  programHeros?.count > currentCount && (
                    <div className='center py-5'>
                      <button
                        onClick={seeMorHandler}
                        className='btn-primary h4 h-btn text-white'
                      >
                        {loading ? (
                          <Loading color='white' />
                        ) : (
                          'See more'
                        )}
                      </button>
                    </div>
                  )}
              </div>
            </div>

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
    program: string;
  };
};

export const getServerSideProps = async ({ params }: IParams) => {
  const { program } = params;
  const res = await fetchDataFrom(`programs/${program}`);
  if (res.status === 200) {
    const data = await res.json();
    return { props: { program: data } };
  }
  return {
    redirect: {
      permanent: false,
      destination: '/',
    },
    props: {},
  };
};

export default Program;
