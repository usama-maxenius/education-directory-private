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
import trustOffersData from './sample.json';

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
      return setTrustOffers(trustOffersData);
    }

    getData();
  }, []);

  return (
    <>
      <div className='bg-brightGray'>
        <div className='container pb-2'>
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
          {isLoading ? (
            <div className='center'>
              <Loading color='primary' />
            </div>
          ) : (
            trustOffers?.Listings?.Listing?.map((item, i) => {
              return (
                <div
                  key={item.BrandName[0]}
                  className='ip-card-container mt-2'
                >
                  <div
                    className='ip-card-counter'
                    // className={`ip-card-counter ${
                    //   toggle && item.id === showOptions
                    //     ? 'ip-selected-card'
                    //     : ''
                    // }`}
                  >
                    {i + 1}
                  </div>
                  <div
                    className='ip-card-inner-container'
                    // className={`ip-card-inner-container ${
                    //   toggle && item.id === showOptions
                    //     ? 'ip-card-selection'
                    //     : ''
                    // }`}
                  >
                    {/* {toggle && item.id === showOptions ? (
                    <div className='ip__setting_container'>
                      <Image alt='' src={settingIcon} />
                      <p className='text-bold text-lotion'>
                        Stand out provider: This listing only appears
                        to select people
                      </p>
                    </div>
                  ) : null} */}
                    <div className='ip-card-upper'>
                      <div>
                        <Image
                          src={item.LogoUrl[0]}
                          width={170}
                          quality={Image_Quality}
                          height={72}
                          alt=''
                        />
                      </div>
                      <div className='ip-card-paragraph ml-5'>
                        <p className='text-base text-dark pl-3'>
                          {item.Headline[0]}
                        </p>

                        <div
                          onClick={() => showHandler(i)}
                          className='ip__chevron_container pl-3'
                        >
                          <p className='text-base pointer text-dark model__program_specialties '>
                            Program Specialties
                          </p>
                          <Image
                            src={
                              showOptions == i && toggle
                                ? chevronUp
                                : chevronDown
                            }
                            quality={Image_Quality}
                            alt=''
                          />
                        </div>
                        {showOptions == i && toggle ? (
                          <div className='ip-card-Programlist'>
                            <ul>
                              {item.Description[0].Item.map(
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

                        <StarRating rating={Number(item.EPC[0])} />
                        {/* <Image src={ratingStars} alt='' /> */}
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
                            People review Purdue Highly
                          </p>
                        </div>
                      </div>
                      <div
                        className='text-base text-dark ip-visit-btn'
                        id='ip-visit-btn'
                      >
                        <a
                          href={item.LinkingUrl[0]}
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
          )}
        </div>
      </div>
    </>
  );
};
export default InterestedPrograms;
