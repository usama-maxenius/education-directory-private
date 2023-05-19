import React, { FC, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import style from './index.module.css';
import logoSvg from '@/assets/icons/logo.svg';
import useMediaQuery from '@/hooks/useMediaQuery';
import {
  navLinks,
  programNavLinks,
  subNavLinks,
} from '@/appConstants';
import { useRouter } from 'next/router';
import leftChevron from '@/assets/icons/leftChevron.svg';
import questionMark from '@/assets/icons/questionMark.svg';
import fetchDataFrom from '@/pages/api/fetchDataFrom';
import WhyED from './components/whyED';
import HowItWorks from './components/howItWorks';
import Vocations from './components/vocations';
import Schools from './components/Schools';
import Drawer from './drawer/drawer';
import { AppContext } from '@/context/AppContext';
import Select from '../Select';

interface HumbergerMenu {
  drawerMenu?: boolean;
}
type TProps = {
  showSubNav?: boolean;
  // navPrimary?: boolean;
  // thankyouHeader?: boolean;
  // interestedProgram?: boolean;
  programSlugs?: ProgramSlug;
};

const Navbar: FC<TProps> = ({
  // showSubNav = false,
  // navPrimary = false,
  // thankyouHeader = false,
  // interestedProgram = false,
  // programSlugs,
}: TProps): JSX.Element => {
  const NavComponents: any = {
    '#why-education-directory': <WhyED />,
    '#how-it-works': <HowItWorks />,
    '#area-of-intrest': <Vocations />,
    '#schools': <Schools />,
  };
  const { currentPage } = useContext(AppContext);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [popUp, setPopUp] = useState({
    status: false,
    id: '',
  });
  const navPrimary = (currentPage === 'areaOfInterest' || currentPage === 'programs');
  const linkHandler = (id: string) => {
    setPopUp({
      status: popUp.id == id ? !popUp.status : true,
      id: id,
    });
  };
  const handleClickOutside = (event: any) => {
    setPopUp({ status: false, id: '' });
  };
  useEffect(()=> {
    document.addEventListener('click', handleClickOutside, true);

    return ()=> document.removeEventListener('click', handleClickOutside, true);
  }, []);

  return (
    <>
      <header
        className={
          navPrimary
            ? style.primaryHeader
            : currentPage === 'thankyou'
            ? style.thankyouHeader
            : style.secondaryHeader
        }
      >
        <div className='container'>
          <nav className={style.navbar}>
            <div className={style.navbar_logo}>
              <Link href='/'>
                <div
                  className={
                    navPrimary || (currentPage === 'thankyou')
                      ? style.primaryLogoWrapper
                      : style.secondryLogoWrapper
                  }
                >
                  <Image
                    src={logoSvg}
                    loading='lazy'
                    fill
                    className={
                      navPrimary || ((currentPage === 'thankyou') && !isMobile)
                        ? style.secondaryLogo
                        : (currentPage === 'thankyou') && isMobile
                        ? style.thankYouMobileHeader
                        : ''
                    }
                    alt='Logo'
                  />
                </div>
              </Link>
            </div>
            <div className={style.navbar_links}>
              <div className={style.linkParent}>
                {(currentPage !== 'interestedProgram') &&
                  navLinks.map(({ id, name }) => (
                    <li key={id} style={{ display: 'flex' }}>
                      <div
                        className={`hide-sm ${style.navbar_links_a} ${
                          navPrimary ? 'text-white' : 'text-primary'
                        }`}
                        onClick={() => linkHandler(id)}
                      >
                        {name}
                      </div>
                      {popUp.id === id && popUp.status == true && (
                        <div className={style.triangle}></div>
                      )}
                    </li>
                  ))}
              </div>

              {(currentPage !== 'interestedProgram') && (currentPage === 'thankyou') ? (
                <div className={style.goBackContainer}>
                  <Image
                    src={leftChevron}
                    style={{ marginRight: '20px' }}
                    className={`hide-sm ${
                      (currentPage === 'thankyou') ? 'text-white' : 'text-primary'
                    }`}
                    alt=''
                  />
                  <Link
                    // key={id}
                    className={`hide-sm ${
                      (currentPage === 'thankyou') ? 'text-white' : 'text-primary'
                    }`}
                    href={'thank-you'}
                  >
                    Go Back
                  </Link>
                </div>
              ) : null}

              <div
                className={
                  (currentPage === 'interestedProgram')
                    ? style.rightContainer
                    : style.imageContainer
                }
              >
                {(currentPage === 'interestedProgram') && (
                  <div className={style.IP_right_container}>
                    {/* <p
                      className={`hide-sm ${
                        (currentPage === 'thankyou') ? 'text-white' : 'text-primary'
                      }`}
                    >
                      We’ve found some additional programs that you
                      might be interested in
                    </p> */}
                    <div className={style.svgContainer}>
                      <sup>
                        <Image src={questionMark} alt='' />
                      </sup>
                    </div>
                  </div>
                )}
                {/* {!showDrawer && isMobile ? (
                  <Image
                    onClick={() => setShowDrawer(!showDrawer)}
                    src={menuSvg}
                    width={navPrimary || isMobile ? 30 : 22.5}
                    height={navPrimary || isMobile ? 30 : 15}
                    // className={navPrimary ? style.secondaryMenu : ''}
                    className={
                      navPrimary
                        ? style.secondaryLogo
                        : (currentPage === 'thankyou') && isMobile
                        ? style.thankYouMobileHeader
                        : ''
                    }
                    alt='education-menu'
                  />
                ) : (
                  !isMobile && (
                    <Image
                      onClick={() => console.log('desktop version')}
                      src={menuSvg}
                      width={navPrimary || isMobile ? 30 : 22.5}
                      height={navPrimary || isMobile ? 30 : 15}
                      // className={navPrimary ? style.secondaryMenu : ''}
                      className={
                        navPrimary
                          ? style.secondaryLogo
                          : (currentPage === 'thankyou') && isMobile
                          ? style.thankYouMobileHeader
                          : ''
                      }
                      alt='education-menu'
                    />
                  )
                )} */}
              </div>
            </div>

            {popUp.id.length > 0 && popUp.status && (
              <div className={style.dropdownContaienr}>
                {popUp.id && NavComponents[popUp.id]}
              </div>
            )}
          </nav>
        </div>
        {navPrimary ? <SubNav /> : ''}
      </header>
      {showDrawer ? (
        <div className={style.navdrawerContainer}>
          <Drawer closeBtn={() => setShowDrawer(false)} />
        </div>
      ) : null}
    </>
  );
};

export default Navbar;

export const SubNav = ({ drawerMenu }: HumbergerMenu) => {
  const router = useRouter();
  const { setAppTitle } = useContext(AppContext);
  const [heros, setHeros] = useState<IHeros>();
  const [selectedOption, setSelectedOption] = useState<string>('');
  const isProgram = router.pathname.includes('programs');
  const interest = router.query?.interest;

  useEffect(() => {
    fetchDataFrom('pages/?headers_only=True').then(async (heros) => {
      const data = await heros.json();
      setHeros(data);
    });
  }, []);

  useEffect(() => {
    if (heros && interest) {
      const res = heros?.results.find(
        ({ slug }) => slug === interest
      );
      if (res?.hero_heading) {
        setSelectedOption(res?.hero_heading);
        setAppTitle(`${res?.hero_heading} - Education Directory`);
      }
    }
  }, [interest, heros]);

  return (
    <header className={`hide-sm ${style.subnav}`}>
      <div className='container flex justify-between'>
        <div className={style.linksWrapper}>
          <ul className={style.subnav_links}>
            {(isProgram ? programNavLinks : subNavLinks).map(
              ({ id, name }) => (
                <ScrollLink
                  key={id}
                  activeClass={style.activeClass}
                  smooth
                  spy
                  offset={-120}
                  to={id}
                >
                  <li className={style.lists}>{name}</li>
                </ScrollLink>
              )
            )}
          </ul>
        </div>

        <div className={style.selectWrapper}>
          {!isProgram ? (
            <Select
              options={
                heros?.results?.map(({ hero_heading, slug }) => {
                  return {
                    title: hero_heading,
                    value: slug,
                  };
                }) || []
              }
              placeholder={'Select interest'}
              selectedOptions={{ title: selectedOption }}
              onSelect={(route) =>
                route.length &&
                router.push(`/area-of-interest/${route}`)
              }
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </header>
  );
};
