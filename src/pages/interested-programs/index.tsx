// import Navbar from '@/components/Navbar';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import tick from '../../assets/icons/tick.svg';
import online from '../../assets/icons/online.svg';
import topProvider from '../../assets/icons/top-provider.svg';
import writeReview from '../../assets/icons/write-review.svg';
import chevronDown from '../../assets/icons/chevron-down.svg';
import chevronUp from '../../assets/icons/chevron-up.svg';
// import Footer from '@/components/Footer';
import xml2js from 'xml2js';
// import StarRating from '@/components/RatingStar';
import Loading from '@/components/Loading';
import fetchDataFrom from '../api/fetchDataFrom';
import { Image_Quality } from '@/appConstants';
import { AppContext } from '@/context/AppContext';
import GCU from '../../assets/school-logos/GCU.png';
import PG from '../../assets/school-logos/PG.png';
import SNHU from '../../assets/school-logos/SNHU.png';
import SLU from '../../assets/school-logos/Saint_Leo_University.png';
import UMA from '../../assets/school-logos/UMA.png';

const Navbar = dynamic(() => import('@/components/Navbar'));
const Footer = dynamic(() => import('@/components/Footer'));
const StarRating = dynamic(() => import('@/components/RatingStar'));

interface TrustOfferResponse {
  BrandName: string[];
  Description: { Item: string[] }[];
  EPC: string[];
  Headline: string[];
  LinkingUrl: string[];
  LogoUrl: string[];
  PhoneNumber: string[];
}

interface TrustOfferState {
  Listings: {
    Listing: TrustOfferResponse[];
  };
}

const InterestedPrograms = () => {
  const { query } = useRouter();
  const { setShowSubNav } = useContext(AppContext);
  const [toggle, setToggle] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showOptions, setShowOptions] = useState<number | null>(null);
  const [trustOffers, setTrustOffers] = useState<TrustOfferState>({
    Listings: {
      Listing: [],
    },
  });
  useEffect(()=> console.log('query path is', query), [query]);
  useEffect(() => {
    setShowSubNav(false);
  }, []);

  const showHandler = (id: number) => {
    id == showOptions ? setToggle(!toggle) : setToggle(true);
    setShowOptions(id);
  };

  useEffect(() => {
    async function parseXML(
      xml: string | xml2js.convertableToString
    ) {
      const result = await xml2js.parseStringPromise(xml, {
        explicitArray: true,
      });
      return result;
    }

    async function getData() {
      setIsLoading(true);
      const baseUrl = 'https://cdn.fcmrktplace.com/controls/v2-xml.aspx';
      const url = new URL(baseUrl);

      const params: any = {
        affcamid: 1116299,
        key: 'uUA3fTImOSk1',
        numOfAds: 10,
        clicksnet_campus_location: '',
        clicksnet_degree: '',
        clicksnet_study: '',
        clicksnet_current_education: '',
        clicksnet_military: '',
        clicksnet_nurse_type: '',
        subid1: '',
        subid2: '',
        zip: '',
        ip: '92.119.36.136',
      };

      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, encodeURIComponent(params[key]))
      );
      const fullUrl = url.toString();

      const res = await fetch(fullUrl);
      const xml = await res.text();
      const data: TrustOfferState = await parseXML(xml);
      setIsLoading(false);
      return setTrustOffers(data);
    }

    getData();
  }, []);

  const data = [
    {
      school_logo: SNHU,
      school_name: 'Southern New Hampshire University',
      location: 'Online',
      star_rating: '5 Stars',
      comment_1: 'Low Online Tuition', 
      review_1: 'Transfer Up to 90 Credits',
      description: 'At SNHU, we think the “best” online university is likely different for different students. When you’re thinking about what the best online university may be for you, you’ll want to consider the best combination of high-quality education, low cost, a generous transfer policy (if you have college credits already), a best-in-class online experience, and the best student support. And, of course, the availability of the degree you want.',
      primary_colour_pixel: '',
      secondary_color_pixel: '',
      program_specialist: [
        'Accounting (BS)',
        'Finance (BS)',
        'Criminal Justice (BS)',
        'Homeland Security and Counterterrorism (BS)',
        'Game Art & Development (BA)',
        'Social Media Marketing (BS)'
      ],
    },
    {
      school_logo: PG,
      school_name: 'Purdue Global',
      location: 'Online',
      star_rating: '4.5 Stars',
      comment_1: 'Your Comeback Starts Now', 
      review_1: 'Ranked #8 Most Innovative School in the U.S.',
      description: `Not sure if Purdue Global is right for you? Experience a Purdue Global undergraduate program for an introductory 3-week period. There's no financial obligation and no cost to apply.`,
      primary_colour_pixel: '',
      secondary_color_pixel: '',
      program_specialist: [
        'Communication (BS)',
        'Master of Business Administration',
        'Management and Leadership (MS))',
        'Master of Health Care Administration',
        'Bachelor of Science in Analytics',
        'Bachelor of Science in Psychology'
      ],
    },
    {
      school_logo: GCU,
      school_name: 'Grand Canyon University',
      location: 'Online',
      star_rating: '5 Stars',
      comment_1: 'Online Classes Starting Every Week', 
      review_1: '2nd in Wage Growth',
      description: 'Grand Canyon University is a private Christian university located in Phoenix, Arizona. We are dedicated to helping our students change their lives for the better through education. We offer a wide range of programs at both the undergraduate and graduate levels that you can earn on campus and online. Our dedicated faculty and staff will be with you every step of the way to ensure you reach your goals.',
      primary_colour_pixel: '',
      secondary_color_pixel: '',
      program_specialist: [
        'Bachelor of Arts in Advertising and Graphic Design',
        'Bachelor of Arts in Christian Studies',
        'Bachelor of Arts in Digital Design',
        'Bachelor of Arts in History',
        'Bachelor of Science in Psychology',
        'Bachelor of Science in Hospitality Management'
      ],
    },
    {
      school_logo: UMA,
      school_name: 'Ultimate Medical Academy',
      location: 'Online',
      star_rating: '4 Stars',
      comment_1: 'Earn Your Healthcare Degree', 
      review_1: 'Nonprofit Allied Health School',
      description: 'Ultimate Medical Academy has been committed to helping students succeed in healthcare careers for the past 29 years. That’s why we offer students a connected support system from the start of their education to beyond graduation.',
      primary_colour_pixel: '',
      secondary_color_pixel: '',
      program_specialist: [
        'Health Sciences - Medical Administrative Assistant',
        'Health and Human Services',
        'Medical Billing and Coding',
        'Emergency Medical Technician',
        'Healthcare Accounting',
        'Healthcare Management'
      ],
    },
    {
      school_logo: SLU,
      school_name: 'Saint Leo University',
      location: 'Online',
      star_rating: '4 Stars',
      comment_1: 'High-quality, Accessible, and Fexible Learning ', 
      review_1: 'Catholic Roots',
      description: 'Saint Leo University has a rich history of providing students with a transformative, values-centered education. With over 40 majors and minors to choose from, our core mission is to inspire students to become their best selves and lead the way for those that follow.',
      primary_colour_pixel: '',
      secondary_color_pixel: '',
      program_specialist: [
        `Associate's Degree in Cybersecurity`,
        `Associate's Degree in Criminal Justice`,
        `Bachelor's Degree in Biology`,
        `Master's Degree in Criminal Justice`,
        `Minor in Marketing and Sales in Sport`,
        `Minor in Psychology`,
      ],
    }
  ];

  return (
    <>
      <div className='bg-brightGray'>
        <div className='container pb-3rem'>
          <div className='ip-inner-container center'>
            <div className='ip-heading'>
              {
                trustOffers &&  trustOffers.Listings.hasOwnProperty('Listing') ?
                <>
                  <h3 className='h3 text-primary'>
                    Here’s a reason to trust this page
                  </h3>
                  <p className='text-base text-dark'>
                    87% of people find something they like here (social
                    conditioning)
                  </p>
                </> : 
                <>
                  <h3 className='h3 text-primary'>
                    No data found
                  </h3>
                </>
              }
              
            </div>
          </div>
          {
            isLoading ? (
              <div className='center'>
                <Loading color='primary' />
              </div>
            ) : (
              data?.map((item, i) => {
                return (
                  <div key={item.school_name} className='ip-card-container mt-2'>
                    <div className='ip-card-counter'>
                      {i + 1}
                    </div>
                    <div className='ip-card-inner-container'>
                      <div className='ip-card-upper'>
                        <div>
                          <Image
                            src={item.school_logo}
                            width={170}
                            quality={Image_Quality}
                            height={72}
                            alt=''
                          />
                        </div>
                        <div className='ip-card-paragraph ml-5'>
                          <p className='text-base text-dark pl-3'>
                            {item.description}
                          </p>

                          <div onClick={() => showHandler(i)} className='ip__chevron_container pl-3'>
                            <p className='text-base pointer text-dark model__program_specialties'>
                              Program Specialties
                            </p>
                            <Image
                              src={showOptions == i && toggle ? chevronUp : chevronDown}
                              quality={Image_Quality}
                              alt=''
                            />
                          </div>
                          {showOptions == i && toggle ? (
                            <div className='ip-card-Programlist'>
                              <ul>
                                {item.program_specialist.map(
                                  (itm, i) => (
                                    <li
                                      key={i}
                                      className='flex align-item-base gap-15 text-base text-dark model__program_specialties'
                                      style={{lineHeight: 2}}
                                    >
                                      <Image src={tick} alt='' /> <p className='w-full'>{itm}</p>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          ) : null}
                        </div>
                        <div className='ip-card-rating'>
                          <p className='text-base text-dark'>
                            OUR RATING
                          </p>

                          <StarRating rating={Number(item.star_rating[0])} />
                        </div>
                      </div>
                      <div className='ip-card-lower'>
                        <div className='ip-fecilities'>
                          <div>
                            <Image src={online} alt='' />
                            <p className='text-base text-dark'>
                              online
                            </p>
                          </div>
                          <div>
                            <Image src={topProvider} alt='' />
                            <p className='text-base text-dark'>
                              One of our top program providers
                            </p>
                          </div>

                          <div>
                            <Image src={writeReview} alt='' />
                            <p className='text-base text-dark'>
                              People review {item.school_name} Highly
                            </p>
                          </div>
                        </div>
                        <div id='ip-visit-btn' className='text-base text-dark ip-visit-btn'>
                          <a
                            // href={item.LinkingUrl[0]}
                            target='_blank'
                            className='text-dark text-decoration-none'
                            rel='noreferrer'
                          >
                            Visit Site {'>'}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
              // trustOffers?.Listings?.Listing?.map((item, i) => {
              //   return (
              //     <div key={item.BrandName[0]} className='ip-card-container mt-2'>
              //       <div className='ip-card-counter'>
              //         {i + 1}
              //       </div>
              //       <div className='ip-card-inner-container'>
              //         <div className='ip-card-upper'>
              //           <div>
              //             <Image
              //               src={item.LogoUrl[0]}
              //               width={170}
              //               quality={Image_Quality}
              //               height={72}
              //               alt=''
              //             />
              //           </div>
              //           <div className='ip-card-paragraph ml-5'>
              //             <p className='text-base text-dark pl-3'>
              //               {item.Headline[0]}
              //             </p>

              //             <div onClick={() => showHandler(i)} className='ip__chevron_container pl-3'>
              //               <p className='text-base pointer text-dark model__program_specialties'>
              //                 Program Specialties
              //               </p>
              //               <Image
              //                 src={showOptions == i && toggle ? chevronUp : chevronDown}
              //                 quality={Image_Quality}
              //                 alt=''
              //               />
              //             </div>
              //             {showOptions == i && toggle ? (
              //               <div className='ip-card-Programlist'>
              //                 <ul>
              //                   {item.Description[0].Item.map(
              //                     (itm, i) => (
              //                       <li
              //                         key={i}
              //                         className='flex align-item-base gap-15 text-base text-dark model__program_specialties'
              //                         style={{lineHeight: 2}}
              //                       >
              //                         <Image src={tick} alt='' /> <p className='w-full'>{itm}</p>
              //                       </li>
              //                     )
              //                   )}
              //                 </ul>
              //               </div>
              //             ) : null}
              //           </div>
              //           <div className='ip-card-rating'>
              //             <p className='text-base text-dark'>
              //               OUR RATING
              //             </p>

              //             <StarRating rating={Number(item.EPC[0])} />
              //           </div>
              //         </div>
              //         <div className='ip-card-lower'>
              //           <div className='ip-fecilities'>
              //             <div>
              //               <Image src={online} alt='' />
              //               <p className='text-base text-dark'>
              //                 online
              //               </p>
              //             </div>
              //             <div>
              //               <Image src={topProvider} alt='' />
              //               <p className='text-base text-dark'>
              //                 One of our top program providers
              //               </p>
              //             </div>

              //             <div>
              //               <Image src={writeReview} alt='' />
              //               <p className='text-base text-dark'>
              //                 People review Purdue Highly
              //               </p>
              //             </div>
              //           </div>
              //           <div id='ip-visit-btn' className='text-base text-dark ip-visit-btn'>
              //             <a
              //               href={item.LinkingUrl[0]}
              //               target='_blank'
              //               className='text-dark text-decoration-none'
              //               rel='noreferrer'
              //             >
              //               Visit Site {'>'}
              //             </a>
              //           </div>
              //         </div>
              //       </div>
              //     </div>
              //   );
              // })
            )
          }
        </div>
      </div>
    </>
  );
};
export default InterestedPrograms;
