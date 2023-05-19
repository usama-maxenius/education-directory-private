export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;
export const ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY;
export const CANDIMAVEN_BASE_URL = process.env.NEXT_PUBLIC_CANDIMAVEN_BASE_URL;
export const ADROLL_ADV_ID = process.env.NEXT_PUBLIC_ADROLL_ADV_ID;
export const ADROLL_PIX_ID = process.env.NEXT_PUBLIC_ADROLL_PIX_ID;
export const ADROLL_VERSION = process.env.NEXT_PUBLIC_ADROLL_VERSION;
export const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
export const Image_Quality = 30;

import addUserSvg from '@/assets/icons/addUserSvg.svg';
import phoneSvg from '@/assets/icons/phoneSvg.svg';
import doneSvg from '@/assets/icons/tick.svg';
import logoSvg from '@/assets/icons/logo.svg';
import scholarshipSvg from '@/assets/icons/scholarship.svg';
import brushSvg from '@/assets/icons/brush.svg';
import businessSvg from '@/assets/icons/business.svg';
import vocationalSvg from '@/assets/icons/vocational.svg';
import psychologySvg from '@/assets/icons/psychology.svg';
import lawHammerSvg from '@/assets/icons/lawHammer.svg';
import healthcareSvg from '@/assets/icons/healthcare.svg';
import liberalArtSvg from '@/assets/icons/liberalArt.svg';
import labFlaskSvg from '@/assets/icons/labFlask.svg';

//thankyou model logos
import thejobboard from '@/assets/logo/thejobboard.svg';
import postuniversity from '@/assets/logo/postuniversity.svg';
import exposurejob from '@/assets/logo/exposurejob.svg';
import uLogo from '@/assets/logo/u-logo.svg';
import thejobboardwhite from '@/assets/logo/thejobboardwhite.svg';
import butterflyLogo from '@/assets/logo/butterflyLogo.svg';
import tick from '@/assets/logo/done.svg';
import campusSvg from '@/assets/icons/campus.svg';
import eitherSvg from '@/assets/icons/onlineAndCampus.svg';
import doubleTickSvg from '@/assets/icons/doubleCheck.svg';
import onlineSvg from '@/assets/icons/online.svg';
import clockSvg from '@/assets/icons/clock.svg';
import clockTwoSvg from '@/assets/icons/clock2.svg';

import getADegree from '@/assets/logo/get-a-degree.svg';
import universityBound from '@/assets/logo/university-bound.svg';
import myClassesOnline from '@/assets/logo/my-classes-online.svg';
import myOnlineDegree from '@/assets/logo/my-online-degree.svg';
import purdue from '@/assets/logo/purdue.svg';

export const howItWorksData = [
  {
    id: 1,
    stepNumber: 1,
    icon: addUserSvg,
    content:
      'Expand your skills or start something new, discover colleges by subject areas that matter to you.',
  },
  {
    id: 2,
    stepNumber: 2,
    icon: phoneSvg,
    content:
      'Expand your skills or start something new, discover colleges by subject areas that matter to you.',
  },
  {
    id: 3,
    stepNumber: 3,
    icon: doneSvg,
    content:
      'Expand your skills or start something new, discover colleges by subject areas that matter to you.',
  },
];

export const areaOfInterestData = [
  {
    id: 1,
    hero_image: {
      id: 2,
      asset:
        'https://res.cloudinary.com/developermaxenius/image/upload/v1670573888/Education-directory/art-design_banner_ne8maa.png',
      name: 'w',
    },
    hero_heading: 'ART & DESIGN',
    hero_text:
      'Expand your skills or start something new, discover colleges by subject areas that matter to you. Online colleges make it easier to attend college because you can attend from',
  },
  {
    id: 2,
    hero_image: {
      id: 2,
      asset:
        'https://res.cloudinary.com/developermaxenius/image/upload/v1670573888/Education-directory/art-design_banner_ne8maa.png',
      name: 'w',
    },
    hero_heading: 'ART & DESIGN',
    hero_text:
      'Expand your skills or start something new, discover colleges by subject areas that matter to you. Online colleges make it easier to attend college because you can attend from',
  },
  {
    id: 3,
    hero_image: {
      id: 2,
      asset:
        'https://res.cloudinary.com/developermaxenius/image/upload/v1670573888/Education-directory/art-design_banner_ne8maa.png',
      name: 'w',
    },
    hero_heading: 'ART & DESIGN',
    hero_text:
      'Expand your skills or start something new, discover colleges by subject areas that matter to you. Online colleges make it easier to attend college because you can attend from',
  },
  {
    id: 4,
    hero_image: {
      id: 2,
      asset:
        'https://res.cloudinary.com/developermaxenius/image/upload/v1670573888/Education-directory/art-design_banner_ne8maa.png',
      name: 'w',
    },
    title: 'ART & DESIGN',
    hero_heading: 'ART & DESIGN',
    hero_text:
      'Expand your skills or start something new, discover colleges by subject areas that matter to you. Online colleges make it easier to attend college because you can attend from',
  },
];

export const logosData: ILogo[] = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/developermaxenius/image/upload/v1669615562/Edu-logos/snhu_tbbbcy.svg',
    link: 'https://www.snhu.edu/',
    name: 'snhu',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/developermaxenius/image/upload/v1669615564/Edu-logos/Berkeley_College_yozteb.svg',
    link: 'https://berkeley.yalecollege.yale.edu/',
    name: 'Berkeley College',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/developermaxenius/image/upload/v1669615557/Edu-logos/Penn_skb3cu.svg',
    link: 'https://www.upenn.edu/',
    name: 'Penn',
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/developermaxenius/image/upload/v1669615559/Edu-logos/USC_University_yunqrw.svg',
    link: 'https://www.usc.edu/',
    name: 'USC University',
  },
  {
    id: 6,
    image:
      'https://res.cloudinary.com/developermaxenius/image/upload/v1669615563/Edu-logos/Purdue_hs8u7g.svg',
    link: 'https://www.purdue.edu/',
    name: 'Purdue',
  },
  {
    id: 7,
    image:
      'https://res.cloudinary.com/developermaxenius/image/upload/v1669615553/Edu-logos/Johns_Hopkins_uppnkp.svg',
    link: 'https://www.jhu.edu/',
    name: 'Johns Hopkins',
  },
];

export const navLinks = [
  {
    id: '#why-education-directory',
    name: 'Why Education Directory?',
  },
  {
    id: '#how-it-works',
    name: 'How it works',
  },
  {
    id: '#area-of-intrest',
    name: 'Vocations',
  },
  {
    id: '#schools',
    name: 'Schools',
  },
];

export const programNavLinks = [
  {
    id: 'overview',
    name: 'Overview',
  },
  {
    id: 'goals-outcomes',
    name: 'Goals & Outcomes',
  },
  {
    id: 'experience',
    name: 'Experience',
  },
  {
    id: 'careers',
    name: 'Careers',
  },
  {
    id: 'similar-programs',
    name: 'Similar programs',
  },
];
export const subNavLinks = [
  {
    id: 'overview',
    name: 'Overview',
  },
  {
    id: 'degrees',
    name: 'Degrees',
  },
  {
    id: 'requirements',
    name: 'Requirements',
  },
  {
    id: 'experience',
    name: 'Experience',
  },
  {
    id: 'careers',
    name: 'Careers',
  },
  {
    id: 'get-started',
    name: 'Get Started',
  },
];

export const aoiCareerLists = [
  {
    id: 1,
    name: 'Advertising art director',
  },
  {
    id: 2,
    name: 'Graphic designer',
  },
  {
    id: 3,
    name: 'Advertising art director',
  },
  {
    id: 4,
    name: 'Advertising art director',
  },
  {
    id: 6,
    name: 'Advertising art director',
  },
  {
    id: 8,
    name: 'Advertising art director',
  },
  {
    id: 9,
    name: 'Advertising art director',
  },
  {
    id: 189,
    name: 'Advertising art director',
  },
  {
    id: 37,
    name: 'Advertising art director',
  },
  {
    id: 49,
    name: 'Advertising art director',
  },
  {
    id: 65,
    name: 'Advertising art director',
  },
  {
    id: 63,
    name: 'Advertising art director',
  },
  {
    id: 38,
    name: 'Advertising art director',
  },
  {
    id: 23,
    name: 'Advertising art director',
  },
  {
    id: 19,
    name: 'Advertising art director',
  },
];
export const homePageData = {
  banner: {
    title: 'Find your perfect Degree program',
    description: `Expand your skills or start something new, discover
    colleges by subject areas that matter to you. Online
    colleges make it easier to attend college because you
    can attend from a distance and don’t have to commute.
    This is great news for you because earning a college
    degree may give you access to higher paying occupations.`,
    image:
      'https://res.cloudinary.com/developermaxenius/image/upload/v1670573888/Education-directory/art-design_banner_ne8maa.png',
  },
  quote: {
    title: '“A Quote about how great it is to complete the form”',
    image:
      'https://candidmaven.maxenius.com/assets/quote_banner_home',
  },
};

export const footerData = {
  logo: logoSvg,
  content: `*For the 2021-22 award year (July 1, 2021, to June 30,
  2022), the Federal Pell Grant is an annual award up to
  $6,495 and is typically awarded only to undergraduate
  students who display exceptional financial need and have
  not earned a bachelor’s, graduate, or professional degree.
  Certain eligibility restrictions may apply. A Federal Pell
  Grant, unlike a loan, does not have to be repaid, except
  under certain circumstances. Source:
  https://studentaid.ed.gov/sa/types/grants-scholarships/pells`,
  areaOfIntrest: [
    'Art & Design',
    'Business',
    'Law & Criminal Justice',
    'Trade & Vocational',
    'Something else',
    'Ideas for footer',
  ],
  occupations: [
    'Wind turbine service technicians',
    'Nurse practitioners',
    'Solar photovoltaic installers',
    'Occupational therapy assistants',
    'Statisticians',
    'Home health and personal care aides',
    'Physical therapist assistants',
    'Medical and health services managers',
  ],
  information: [
    'Privacy Policy',
    'Terms of Use',
    'Do not sell my info',
    `(1) Occupational Outlook Handbook. Fastest Growing
    Occupations. (2021, April 9). Retrieved May 26, 2021
    from https://www.bls.gov/ooh/fastest-growing.htm`,
  ],
  location: `This is an offer for educational opportunities and not an
  offer for nor a guarantee of employment. Students should
  consult with a representative from the school they select
  to learn more about career opportunities in that field.
  Program outcomes vary according to each institution’s
  specific program curriculum.`,
};

export const aoiRequirements = [
  {
    id: 3,
    src: 'https://candidmaven.maxenius.com/assets/requirements',
    title:
      'What are the entry requirements to get onto an Art &Design Degree?',
    text: `Combine creativity with technological origination
                  and development of a project from start to finish.
                  Art programs can use interactive tools to create art
                  through technology, to share through digital media
                  or for business purposes such as marketing and
                  branding.`,
    lists: [
      {
        id: 2,
        list: 'Over 18 Years of Age',
      },
      {
        id: 23,
        list: 'Completed High School',
      },
      {
        id: 26,
        list: 'A Citizen of the United States',
      },
      {
        id: 82,
        list: 'Something else',
      },
    ],
  },
];
export const aoiDegrees = [
  {
    id: 3,
    src: 'https://candidmaven.maxenius.com/assets/degrees',
    title: 'Which Art & Designs degrees can you study?',
    text: `Combine creativity with technological origination
                  and development of a project from start to finish.
                  Art programs can use interactive tools to create art
                  through technology, to share through digital media
                  or for business purposes such as marketing and
                  branding.`,
    lists: [
      {
        id: 2,
        list: 'Creative Technology BSc',
      },
      {
        id: 23,
        list: 'Fashion Jewellery BA',
      },
      {
        id: 26,
        list: 'Fine Art BFA/BA',
      },
      {
        id: 82,
        list: 'Graphic Design BA',
      },
    ],
  },
];

// export const thankYouCards = [
//   {
//     id: 0,
//     image:
//       'https://res.cloudinary.com/developermaxenius/image/upload/v1669615562/Edu-logos/snhu_tbbbcy.svg',
//     programs: {
//       options: [
//         {
//           title: 'AA Digital Photography',
//           value: 'AA Digital Photography',
//         },
//       ],
//       placeholder: 'AA Digital Photography',
//     },
//     questions: {
//       options: [
//         {
//           title: 'Here’s an additional question',
//           value: 'Here’s an additional question',
//         },
//       ],
//       placeholder: 'Here’s an additional question',
//     },
//   },
//   {
//     id: 1,
//     image:
//       'https://res.cloudinary.com/developermaxenius/image/upload/v1669615563/Edu-logos/Purdue_hs8u7g.svg',
//     programs: {
//       options: [
//         {
//           title: 'AASB Business',
//           value: 'AASB Business',
//         },
//       ],
//       placeholder: 'AASB Business',
//     },
//     questions: {
//       options: [
//         {
//           title: 'Here’s an additional question',
//           value: 'Here’s an additional question',
//         },
//       ],
//       placeholder: 'Here’s an additional question',
//     },
//   },
//   {
//     id: 2,
//     image:
//       'https://res.cloudinary.com/developermaxenius/image/upload/v1669615564/Edu-logos/Berkeley_College_yozteb.svg',
//     programs: {
//       options: [
//         {
//           title: 'BBA Financial Services',
//           value: 'BBA Financial Services',
//         },
//       ],
//       placeholder: 'BBA Financial Services',
//     },
//   },
// ];

export const arrayDomain = [
  {
    id: 0,
    logo: thejobboard,
    color: {
      bg: 'white',
      text: 'dark',
      circleBorder: '#21a0aa',
      iconColor:
        'brightness(0) saturate(100%) invert(56%) sepia(26%) saturate(1262%) hue-rotate(136deg) brightness(90%) contrast(81%)',
    },
    options: [
      {
        title: 'BS Accounting',
        value: ' BS Accounting',
      },
    ],
    points: {
      1: 'Here’s a really good thing about this brand',
      2: 'Here’s a really good thing about this brand',
      3: 'Here’s a really good thing about this brand',
    },
    completed: tick,
  },
  {
    id: 1,
    logo: postuniversity,
    color: {
      bg: 'white',
      text: 'dark',
      circleBorder: '#632c50',
      iconColor:
        ' brightness(0) saturate(100%) invert(21%) sepia(12%) saturate(2494%) hue-rotate(268deg) brightness(99%) contrast(93%)',
    },
    options: [
      {
        title: 'BS Accounting',
        value: ' BS Accounting',
      },
    ],
    points: {
      1: 'Here’s a really good thing about this brand',
      2: 'Here’s a really good thing about this brand',
      3: 'Here’s a really good thing about this brand',
    },
    completed: tick,
  },
  {
    id: 2,
    logo: exposurejob,
    color: {
      bg: 'dark',
      text: 'white',
      circleBorder: '#fff',
      iconColor:
        'brightness(0) saturate(100%) invert(99%) sepia(0%) saturate(7472%) hue-rotate(184deg) brightness(111%) contrast(96%)',
    },
    options: [
      {
        title: 'BS Accounting',
        value: ' BS Accounting',
      },
    ],
    points: {
      1: 'Here’s a really good thing about this brand',
      2: 'Here’s a really good thing about this brand',
      3: 'Here’s a really good thing about this brand',
    },
    completed: tick,
  },
  {
    id: 3,
    logo: uLogo,
    color: {
      bg: 'mauve',
      text: 'white',
      circleBorder: '#fff',
      iconColor:
        'brightness(0) saturate(100%) invert(99%) sepia(0%) saturate(7472%) hue-rotate(184deg) brightness(111%) contrast(96%)',
    },
    options: [
      {
        title: 'BS Accounting',
        value: ' BS Accounting',
      },
    ],
    points: {
      1: 'Here’s a really good thing about this brand',
      2: 'Here’s a really good thing about this brand',
      3: 'Here’s a really good thing about this brand',
    },
    completed: tick,
  },
  {
    id: 4,
    logo: thejobboardwhite,
    color: {
      bg: 'lightSeaGreen-400',
      text: 'white',
      circleBorder: '#fff',
      iconColor:
        'brightness(0) saturate(100%) invert(99%) sepia(0%) saturate(7472%) hue-rotate(184deg) brightness(111%) contrast(96%)',
    },
    options: [
      {
        title: 'BS Accounting',
        value: ' BS Accounting',
      },
    ],
    points: {
      1: 'Here’s a really good thing about this brand',
      2: 'Here’s a really good thing about this brand',
      3: 'Here’s a really good thing about this brand',
    },
    completed: tick,
  },
  {
    id: 5,
    logo: butterflyLogo,
    color: {
      bg: 'medium-Aquamarine',
      text: 'dark',
      circleBorder: '#000',
      iconColor:
        ' brightness(0) saturate(100%) invert(0%) sepia(8%) saturate(7466%) hue-rotate(215deg) brightness(95%) contrast(95%)',
    },
    options: [
      {
        title: 'BS Accounting',
        value: ' BS Accounting',
      },
    ],
    points: {
      1: 'Here’s a really good thing about this brand',
      2: 'Here’s a really good thing about this brand',
      3: 'Here’s a really good thing about this brand',
    },
    completed: tick,
  },
];
export const svgsIcons = [
  {
    id: 9,
    icon: campusSvg,
  },
  {
    id: 9,
    icon: campusSvg,
  },
  {
    id: 9,
    icon: campusSvg,
  },
];

export const courseOptions = [
  {
    title: 'Art & Design',
    value: 'art-design',
  },
  {
    title: 'Business',
    value: 'business',
  },
  {
    title: 'Computers & Technology',
    value: 'computer',
  },
  {
    title: 'Law & Criminal Justice',
    value: 'law',
  },
  {
    title: 'Culinary',
    value: 'culinary',
  },
  {
    title: 'Education & Teaching',
    value: 'education',
  },
  {
    title: 'Trade & Vocational',
    value: 'trade',
  },
];

export const interestedPrograms = [
  {
    id: 1,
    image: getADegree,
  },
  {
    id: 2,
    image: universityBound,
  },
  {
    id: 3,
    image: myClassesOnline,
  },
  {
    id: 4,
    image: myOnlineDegree,
  },

  {
    id: 5,
    image: purdue,
  },
];

export const programGoals = [
  {
    id: 3,
    src: 'https://candidmaven.maxenius.com/assets/goals_img',
    title: 'Applied Engineering program goals',
    text: 'This includes instruction in computer systems; electronics and instrumentation; programmable logic controllers (PLCs); electric, hydraulic and pneumatic control systems; actuator and sensor systems; process control; robotics; applications to specific industrial tasks; and report preparation.',
    lists: [
      {
        id: 2,
        list: 'Critical thinking and problem solving skills based on a fundamental knowledge of humanities, social sciences, mathematics, physics, chemistry, engineering science and a broad range of applied engineering technical areas;',
      },
      {
        id: 23,
        list: 'Knowledge of global and societal concerns, ethics, and sustainability when making engineering decisions;',
      },
      {
        id: 26,
        list: 'Leadership and effective communication;',
      },
      {
        id: 82,
        list: 'Civic engagement and contributions to society and Lifelong learning and professional development.',
      },
    ],
  },
];
export const programOutcomes = [
  {
    id: 3,
    src: 'https://candidmaven.maxenius.com/assets/outcomes',
    title: 'What are the Student Learning Outcomes',
    text: 'Graduates of the Associate of Science in Applied Engineering program will be able to:',
    lists: [
      {
        id: 2,
        list: 'Setup, calibrate, operate, and interpret results from industry-level tools and equipment.',
      },
      {
        id: 23,
        list: 'Apply knowledge of math, physics, chemistry, and engineering to diagnosing and repairing systems.',
      },
      {
        id: 26,
        list: 'Collect, organize, analyze, and interpret data to produce meaningful conclusions and recommendations.',
      },
      {
        id: 82,
        list: 'Present test results and repair recommendations while demonstrating leadership with confidence as part of multidisciplinary teams.',
      },
      {
        id: 852,
        list: 'Reference technology magazines, periodicals, news articles, patents, and publications to stay current with contemporary and future technologies and issues.',
      },
    ],
  },
];

export const programsData = [
  {
    id: 4,
    src: 'https://candidmaven.maxenius.com/assets/art-design',
    name: 'Software engineering, AS',
    description:
      'Expand your skills or start something new, discover colleges by subject areas that matter to you. Online colleges make it easier to attend college because you can attend from',
  },
  {
    id: 45,
    src: 'https://res.cloudinary.com/developermaxenius/image/upload/v1670573888/Education-directory/art-design_banner_ne8maa.png',
    name: 'Robotics degree',
    description:
      'Expand your skills or start something new, discover colleges by subject areas that matter to you. Online colleges make it easier to attend college because you can attend from',
  },
  {
    id: 34,
    src: 'https://candidmaven.maxenius.com/assets/goals_img',
    name: 'Chemical Engineering',
    description:
      'Expand your skills or start something new, discover colleges by subject areas that matter to you. Online colleges make it easier to attend college because you can attend from',
  },
  {
    id: 484,
    src: 'https://candidmaven.maxenius.com/assets/goals_img',
    name: 'Software engineering, AS',
    description:
      'Expand your skills or start something new, discover colleges by subject areas that matter to you. Online colleges make it easier to attend college because you can attend from',
  },
  {
    id: 984,
    src: 'https://res.cloudinary.com/developermaxenius/image/upload/v1670573888/Education-directory/art-design_banner_ne8maa.png',
    name: 'Robotics degree',
    description:
      'Expand your skills or start something new, discover colleges by subject areas that matter to you. Online colleges make it easier to attend college because you can attend from',
  },
  {
    id: 964,
    src: 'https://res.cloudinary.com/developermaxenius/image/upload/v1670573888/Education-directory/art-design_banner_ne8maa.png',
    name: 'Chemical Engineering',
    description:
      'Expand your skills or start something new, discover colleges by subject areas that matter to you. Online colleges make it easier to attend college because you can attend from',
  },
];
export const dummyPageData = {
  id: 2,
  logos: [
    {
      id: 2,
      name: 'Snhu',
      image: 'https://candidmaven.maxenius.com/logos/snhu.svg',
      link: 'https://www.snhu.edu/',
    },
    {
      id: 3,
      name: 'Berkeley College',
      image:
        'https://candidmaven.maxenius.com/logos/Berkeley_College.svg',
      link: 'https://berkeley.yalecollege.yale.edu/',
    },
    {
      id: 4,
      name: 'Penn',
      image: 'https://candidmaven.maxenius.com/logos/Penn.svg',
      link: 'https://www.upenn.edu/',
    },
    {
      id: 5,
      name: 'USC University',
      image:
        'https://candidmaven.maxenius.com/logos/USC_University.svg',
      link: 'https://www.usc.edu/',
    },
    {
      id: 6,
      name: 'Purdue',
      image: 'https://candidmaven.maxenius.com/logos/Purdue.svg',
      link: 'https://www.purdue.edu/',
    },
    {
      id: 7,
      name: 'Johns Hopkins',
      image:
        'https://candidmaven.maxenius.com/logos/Johns_Hopkins.svg',
      link: 'https://www.jhu.edu/',
    },
  ],
  programs: [
    {
      id: 1,
      logos: [
        {
          id: 2,
          name: 'Snhu',
          image: 'https://candidmaven.maxenius.com/logos/snhu.svg',
          link: 'https://www.snhu.edu/',
        },
        {
          id: 3,
          name: 'Berkeley College',
          image:
            'https://candidmaven.maxenius.com/logos/Berkeley_College.svg',
          link: 'https://berkeley.yalecollege.yale.edu/',
        },
        {
          id: 4,
          name: 'Penn',
          image: 'https://candidmaven.maxenius.com/logos/Penn.svg',
          link: 'https://www.upenn.edu/',
        },
        {
          id: 5,
          name: 'USC University',
          image:
            'https://candidmaven.maxenius.com/logos/USC_University.svg',
          link: 'https://www.usc.edu/',
        },
        {
          id: 6,
          name: 'Purdue',
          image: 'https://candidmaven.maxenius.com/logos/Purdue.svg',
          link: 'https://www.purdue.edu/',
        },
        {
          id: 7,
          name: 'Johns Hopkins',
          image:
            'https://candidmaven.maxenius.com/logos/Johns_Hopkins.svg',
          link: 'https://www.jhu.edu/',
        },
      ],
      goals_image: {
        id: 8,
        name: 'goals_img',
        asset: 'https://candidmaven.maxenius.com/assets/goals_img',
      },
      outcomes_image: {
        id: 9,
        name: 'outcomes',
        asset: 'https://candidmaven.maxenius.com/assets/outcomes',
      },
      experience_image: {
        id: 2,
        name: 'experience',
        asset: 'https://candidmaven.maxenius.com/assets/experience',
      },
      qoute_bg_image: {
        id: 7,
        name: 'quote_image',
        asset: 'https://candidmaven.maxenius.com/assets/quote_image',
      },
      slug: 'criminal-justice',
      program_as_heading: 'Art & Design',
      program_as_text:
        'The study of criminal justice involves understanding the legal system and related topics such as law enforcement, security, and criminal behavior. This study typically involves courses in criminal law, investigation techniques, and criminology. Additionally, many programs also provide students with the opportunity to gain hands-on experience through internships and field placements. The goal of these programs is to prepare students for a variety of criminal justice-related careers.',
      goals_heading: 'Criminal Justice Program Goals',
      goals_text:
        'A criminal justice degree program provides knowledge and tools to students who want to advance professionally into leadership and management roles in criminal justice organizations. Classes in this program focus on criminology, law enforcement, juvenile justice, corrections, and research methods specifically oriented toward criminal justice professionals.',
      goals_list:
        'Critical thinking and problem solving skills based on a fundamental knowledge of the criminal justice system;\r\nKnowledge of global and societal concerns, ethics, and sustainability when making decisions;\r\nLeadership and effective communication;\r\nCivic engagement and contributions to society and Lifelong learning and professional development.',
      outcomes_heading: 'What are the Student Learning Outcomes',
      outcomes_text:
        'The degree in Criminal Justice and Law Enforcement Administration provides an advanced knowledge of trends and developments in the management of criminal justice organizations. These online criminal justice courses offer leadership, critical thinking, and effective decision making required in organizations including law enforcement, corrections, court, and community-based justice delivery offices.',
      outcomes_list:
        'Develop and apply basic statistical skills and quantitative reasoning for critical evaluation of quantitative information;\r\nUnderstand the roles, functions, and impacts of an effective criminal justice system;\r\nExamine ethical standards and issues in criminal justice processes and in professional decision making including the ever-present tension between effective crime control and appropriate civil liberties;\r\nSurvey a range of theoretical approached that explain crime and apply theoretical reasoning and concepts to observations of crime and control;\r\nAppreciate the investigative profession as a scientific field sample and apply physical science methods to solve forensic problems.',
      experience_heading:
        'What experience do I need to be able to apply for a Criminal Justice program?',
      experience_text:
        'There is no one-size-fits-all answer to this question, as the experience required for a BA in criminal justice will vary depending on the specific program. However, most programs will require some prior experience in the field, whether it be through coursework, internships, or other opportunities. Additionally, a strong understanding of the law and the criminal justice system is typically required for admission into most programs.',
      experience_list:
        'Previous Experience;\r\nRequired Coursework;\r\nAbility to satisfy background check;',
      careers_heading: 'Criminal Justice Careers',
      careers_text:
        'There are a variety of careers available for those with criminal justice degrees. Many choose to work as lawyers, while others find jobs in law enforcement, corrections, and probation. \r\n\r\nThere are also many opportunities for those with these degrees to teach at the collegiate level.',
      careers_first_sub_heading: 'Earning Potential for Graduates',
      careers_first_sub_heading_text:
        'The earning potential for criminal justice graduates is quite high. Many individuals with these degrees are able to find jobs that pay quite well, especially if they are able to find positions in the more competitive fields. Additionally, those with law and criminal justice degrees may also have the opportunity to earn bonuses or other forms of supplemental income.\r\n\r\nThe salary of a criminal justice graduate can vary depending on the type of job and level of experience. Generally, criminal justice graduates can expect to earn more than graduates of other fields. Additionally, salaries can vary widely depending on the specific job title, employer, and location. According to the US Bureau of Labor Statistics, the median annual wage for police and detectives was $63,380 in May 2019.',
      careers_second_sub_heading:
        'What Jobs can Criminal Justice Graduates get?',
      careers_second_sub_heading_text:
        'Criminal justice graduates can pursue a variety of jobs in the legal, law enforcement, and security fields. These roles include police officer, detective, customs officer, border patrol agent, probation officer, and parole officer. Additionally, graduates may also pursue more specialized roles such as crime scene investigator, forensic scientist, private investigator, or lawyer. Many of these positions require specialized certifications or degrees in criminal justice.',
      careers_list:
        'Police Officer;\r\nDetective;\r\nCustoms Officer;\r\nBorder Patrol Agent;\r\nProbation Officer;\r\nParole Officer;\r\nCorrectional Officer;\r\nCrime Scene Investigator;\r\nForensic Scientist;\r\nPrivate Investigator;\r\nLawyer;\r\nJudge;\r\nJuvenile Court Officer;\r\nCourt Reporter;\r\nVictim Advocate;\r\nCounselor;\r\nSecurity Guard;\r\nFraud Examiner;\r\nFraud Investigator;\r\nCybercrime Investigator;\r\nIntelligence Analyst;\r\nHomeland Security Officer;\r\nHomeland Security Analyst;\r\nDrug Enforcement Agent;\r\nFBI Agent;\r\nSecret Service Agent;\r\nU.S. Marshal;\r\nTSA Agent',
      quote_text:
        '“Education Directory found me an AS in Applied Engineering and now I’m working in my dream job”',
      qoute_footer: '– Madame C.J. Walker',
      hero: 1,
    },
  ],
  requirements_image: {
    id: 3,
    name: 'requirements',
    asset: 'https://candidmaven.maxenius.com/assets/requirements',
  },
  degrees_image: {
    id: 4,
    name: 'degrees',
    asset: 'https://candidmaven.maxenius.com/assets/degrees',
  },
  experience_image: {
    id: 2,
    name: 'experience',
    asset: 'https://candidmaven.maxenius.com/assets/experience',
  },
  qoute_bg_image: {
    id: 7,
    name: 'quote_image',
    asset: 'https://candidmaven.maxenius.com/assets/quote_image',
  },
  slug: 'business',
  overview_heading: 'Business Overview',
  overview_text:
    'A business degree is an academic degree earned in business administration, management, or commerce. The degree is designed to prepare students for a career in business. Business degrees are offered at the undergraduate and graduate level, and some programs may also offer certification or licensure.\r\n\r\nUndergraduate business degrees are typically four-year programs that include coursework in accounting, finance, marketing, and management. Graduate business degrees are typically two-year programs that include coursework in advanced business topics. Business degrees may be earned in-person or online.\r\n\r\nBusiness degrees can lead to careers in a variety of industries, including accounting, finance, marketing, and management. Business degree holders may also pursue careers as entrepreneurs or start their own businesses.',
  degrees_can_study_heading: 'Which Business degrees can you study?',
  degrees_can_study_text:
    'A business degree can provide students with the skills and knowledge necessary to be successful in business. Business degrees typically include coursework in accounting, finance, marketing, and management. Business education programs may be offered at the undergraduate and graduate level, and some programs may also offer certification or licensure.  Some examples degrees include:',
  degrees_list:
    'Economics B.B.A;\r\nAccounting B.B.A;\r\n Entrepreneurship and Venture Management B.B.A;\r\n Finance B.B.A;\r\n Sports Business B.B.A;\r\n Marketing B.B.A',
  requirements_heading:
    'What are the entry requirements to get into a Business Degree?',
  requirements_text:
    'The requirements to get a business degree vary by program, but most programs require students to complete coursework in accounting, finance, marketing, and management. Some programs may also require students to take a business entrance exam, such as the GMAT or GRE. Business degrees may be earned in-person or online.  Entry Requirements can include:',
  requirements_list:
    'Over 18 years of Age;\r\nCompleted High School;\r\nA Citizen of the United States;\r\nMinimum Test Scores',
  experience_heading:
    'What experience do I need to be able to apply for a BS in Business Management?',
  experience_text:
    'Most business degree programs do not require students to have experience, but some programs may prefer or require students to have some experience in business. Check with the specific program for requirements.',
  experience_list:
    'A Portfolio;\r\nAn Interest in general business practices;\r\n CV;\r\n List of projects/ work experience',
  careers_heading: 'Business Careers',
  careers_text:
    'There are many careers in business. Business degree holders may pursue careers in a variety of industries, including accounting, finance, marketing, and management. Business degree holders may also pursue careers as entrepreneurs or start their own businesses.\r\n\r\nBusiness degree holders can find careers in many different industries and sectors. Some popular industries for business degree holders include banking and finance, consulting, human resources, marketing, and real estate. Business degree holders may also find careers in government, nonprofit organizations, and small businesses.',
  careers_first_sub_heading: 'Earning Potential for Graduates',
  careers_first_sub_heading_text:
    'The earning potential for business degree graduates is high. Business degree holders can find careers in many different industries and sectors, and the average salary for business degree holders is $75,000.\r\n\r\nBusiness degree holders can find careers in many different industries and sectors, and the average salary for business degree holders is $75,000. The highest-paying industries for business degree holders include banking and finance, consulting, and real estate. The lowest-paying industries for business degree holders include human resources and marketing.',
  careers_second_sub_heading: 'What Jobs can Business Graduates get?',
  careers_second_sub_heading_text:
    'There are many different types of jobs that business graduates can get. Business degree holders can find careers in many different industries and sectors, including banking and finance, consulting, human resources, marketing, and real estate. Business degree holders may also find careers in government, nonprofit organizations, and small businesses.',
  careers_list:
    'Business Owner;\r\nCEO;\r\nCFO;\r\nCOO;\r\nPresident;\r\nVice President;\r\nExecutive;\r\nManager;\r\nDirector;\r\nAssistant Manager;\r\nSupervisor;\r\nTeam Leader;\r\nBusiness Analyst;\r\nConsultant;\r\nProject Manager;\r\nBusiness Writer;\r\nBusiness Coach;\r\nBusiness Trainer;\r\nRecruiter;\r\nHuman Resources Manager;\r\nOffice Manager;\r\nAdministrative Assistant;\r\nExecutive Assistant;\r\nOffice Administrator;\r\nFacilities Manager',
  quote_text:
    '“I had to make my own living and my own opportunity. But I made it! Don’t sit down and wait for the opportunities to come. Get up and make them.”',
  qoute_footer: '– Madame C.J. Walker',
  hero: 2,
};

export const steps = [
  {
    step: 1,
    heading: 'I’d Like my Classes',
    radio: [
      {
        title: 'Online',
        value: 'online',
        icon: campusSvg,
      },
      {
        title: 'On Campus',
        value: 'on-campus',
        icon: eitherSvg,
      },
      {
        title: 'Either',
        value: 'either',
        icon: eitherSvg,
      },
    ],
    selected: '',
  },
  {
    step: 2,
    heading: 'When would you like to start?',
    radio: [
      {
        title: 'Immediately',
        value: '0',
        icon: eitherSvg,
      },
      {
        title: '1 - 3 Months',
        value: '1',
        icon: eitherSvg,
      },
      {
        title: '4 - 6 Months',
        value: '4',
        icon: eitherSvg,
      },
    ],
    selected: '',
  },
  {
    step: 3,
    heading: 'When would you like to start?',
    radio: [
      {
        title: 'Select All',
        value: 'selectall',
        icon: eitherSvg,
      },
      {
        title: '1 - 3 Months',
        value: '0',
        icon: eitherSvg,
      },
      {
        title: '4 - 6 Months',
        value: 'in6months',
        icon: eitherSvg,
      },
      {
        title: 'Immediately',
        value: 'immediately',
        icon: eitherSvg,
      },
      {
        title: '1 - 3 Months',
        value: 'in3months',
        icon: eitherSvg,
      },
      {
        title: '4 - 6 Months',
        value: 'in6months',
        icon: eitherSvg,
      },
    ],
    selected: '',
  },
];

//timer
export const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
};

export const INITIAL_COUNT = 345;
export function generateYears(numYears = 50) {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let i = 0; i < numYears; i++) {
    years.push({
      title: `${currentYear - i}`,
      value: `${currentYear - i}`,
    });
  }

  return years;
}

export const stepOne = {
  key: 'classes',
  heading: 'I’d Like my Classes',
  options: [
    {
      title: 'Either',
      value: 'Either',
      icon: eitherSvg,
    },
    {
      title: 'Online',
      value: 'Online',
      icon: onlineSvg,
    },
    {
      title: 'On Campus',
      value: 'Campus',
      icon: campusSvg,
    },
  ],
};
export const stepTwo = {
  key: 'like_to_start',
  heading: 'When would you like to start?',
  subHeading: 'Select one answer',
  options: [
    {
      title: 'Immediately',
      value: '0',
      icon: clockSvg,
    },
    {
      title: '1 - 3 Months',
      value: '1',
      icon: clockTwoSvg,
    },
    {
      title: '4 - 6 Months',
      value: '4',
      icon: clockTwoSvg,
    },
  ],
};

export const stepThree = {
  key: 'interest',
  heading: 'Which areas of study are you interested in?',
  subHeading: 'Select one or more areas',
  options: [
    {
      title: 'Select All',
      value: 'selectall',
      icon: doubleTickSvg,
    },
    {
      title: 'Art & Design',
      value: 'art & design',
      icon: brushSvg,
    },
    {
      title: 'Business',
      value: 'business',
      icon: businessSvg,
    },
    {
      title: 'Computers & Technology',
      value: 'computers & technology',
      icon: onlineSvg,
    },
    {
      title: 'Criminal Justice',
      value: 'criminal justice',
      icon: lawHammerSvg,
    },
    {
      title: 'Culinary',
      value: 'culinary',
      icon: eitherSvg,
    },
    {
      title: 'Education & Teaching',
      value: 'education & teaching',
      icon: scholarshipSvg,
    },
    {
      title: 'Entertainment',
      value: 'entertainment',
      icon: eitherSvg,
    },
    {
      title: 'Health & Wellness',
      value: 'health & wellness',
      icon: healthcareSvg,
    },
    {
      title: 'Hospitality',
      value: 'hospitality',
      icon: eitherSvg,
    },
    {
      title: 'Language',
      value: 'language',
      icon: eitherSvg,
    },
    {
      title: 'Legal & Paralegal',
      value: 'legal & paralegal',
      icon: lawHammerSvg,
    },
    {
      title: 'Liberal Arts',
      value: 'liberal arts',
      icon: liberalArtSvg,
    },
    {
      title: 'Massage And Physical Therapy',
      value: 'Massage And Physical Therapy',
      icon: eitherSvg,
    },
    {
      title: 'Nursing',
      value: 'nursing',
      icon: healthcareSvg,
    },
    {
      title: 'Psychology And Counseling',
      value: 'psychology and counseling',
      icon: psychologySvg,
    },
    {
      title: 'Religious Studies',
      value: 'Religious Studies',
      icon: eitherSvg,
    },
    {
      title: 'Science & Engineering',
      value: 'science & engineering',
      icon: labFlaskSvg,
    },
    {
      title: 'Trade & Vo-Tech',
      value: 'trade & vo-tech',
      icon: vocationalSvg,
    },
  ],
};

export const stepFour = {
  heading: 'Your Education',
  subHeading: 'Please answer all the questions',
  dropDown: [
    {
      key: 'current_education_level',
      placeholder: 'Highest level of education',
      options: [
        {
          title: 'No High School Diploma or GED',
          value: 'No High School Diploma or GED',
        },
        { title: 'GED', value: 'ged' },
        {
          title: 'High School Diploma',
          value: 'High School Diploma',
        },
        {
          title: 'Some College 1-10 Credits',
          value: 'Some College 1-10 Credits',
        },
        {
          title: 'Some College 11-30 Credits',
          value: 'Some College 11-30 Credits',
        },
        {
          title: 'Some College 31-60 Credits',
          value: 'Some College 31-60 Credits',
        },
        { title: 'Associates', value: 'Associates' },
        { title: 'Bachelors', value: 'Bachelors' },
        { title: 'Masters', value: 'Masters' },
        { title: 'Doctoral', value: 'Doctoral' },
      ],
    },
    {
      key: 'hsyear',
      placeholder: 'High School Graduation year',
      options: generateYears(),
    },
    {
      key: 'currently_enrolled_in_college',
      placeholder: 'Are you currently enrolled?',
      options: [
        { title: 'Yes', value: 'Yes' },
        { title: 'No', value: 'No' },
      ],
    },
    {
      key: 'rn_license',
      placeholder: 'Do you hold a Licence',
      options: [
        { title: 'Yes', value: 'Yes' },
        { title: 'No', value: 'No' },
      ],
    },
  ],
};

// export const stepFive = {
//   heading: 'Your Education',
//   subHeading: 'Please answer all the questions',

// };

//schools mock data
export const cities = [
  {
    name: 'New York',
    colleges: [
      'Columbia University',
      'New York University',
      'Fordham University',
      'The City College of New York',
    ],
  },
  {
    name: 'Los Angeles',
    colleges: [
      'University of Southern California',
      'University of California, Los Angeles',
      'California State University, Los Angeles',
      'Loyola Marymount University',
    ],
  },
  {
    name: 'Chicago',
    colleges: [
      'University of Chicago',
      'Northwestern University',
      'University of Illinois at Chicago',
      'DePaul University',
    ],
  },
  {
    name: 'Houston',
    colleges: [
      'Rice University',
      'University of Houston',
      'Texas Southern University',
      'Houston Community College',
    ],
  },
  {
    name: 'Philadelphia',
    colleges: [
      'University of Pennsylvania',
      'Drexel University',
      'Temple University',
      'La Salle University',
    ],
  },
  {
    name: 'San Francisco',
    colleges: [
      'University of San Francisco',
      'San Francisco State University',
      'City College of San Francisco',
      'Golden Gate University',
    ],
  },
  {
    name: 'Boston',
    colleges: [
      'Harvard University',
      'Massachusetts Institute of Technology',
      'Boston University',
      'Northeastern University',
    ],
  },
  {
    name: 'Seattle',
    colleges: [
      'University of Washington',
      'Seattle University',
      'Seattle Central College',
      'North Seattle College',
    ],
  },
  {
    name: 'Miami',
    colleges: [
      'University of Miami',
      'Florida International University',
      'Miami Dade College',
      'Barry University',
    ],
  },
  {
    name: 'Denver',
    colleges: [
      'University of Denver',
      'Metropolitan State University of Denver',
      'Community College of Denver',
      'Regis University',
    ],
  },
  {
    name: 'New York',
    colleges: [
      'Columbia University',
      'New York University',
      'Fordham University',
      'The City College of New York',
    ],
  },
  {
    name: 'Los Angeles',
    colleges: [
      'University of Southern California',
      'University of California, Los Angeles',
      'California State University, Los Angeles',
      'Loyola Marymount University',
    ],
  },
  {
    name: 'Chicago',
    colleges: [
      'University of Chicago',
      'Northwestern University',
      'University of Illinois at Chicago',
      'DePaul University',
    ],
  },
  {
    name: 'Houston',
    colleges: [
      'Rice University',
      'University of Houston',
      'Texas Southern University',
      'Houston Community College',
    ],
  },
  {
    name: 'Philadelphia',
    colleges: [
      'University of Pennsylvania',
      'Drexel University',
      'Temple University',
      'La Salle University',
    ],
  },
  {
    name: 'San Francisco',
    colleges: [
      'University of San Francisco',
      'San Francisco State University',
      'City College of San Francisco',
      'Golden Gate University',
    ],
  },
  {
    name: 'Boston',
    colleges: [
      'Harvard University',
      'Massachusetts Institute of Technology',
      'Boston University',
      'Northeastern University',
    ],
  },
  {
    name: 'Seattle',
    colleges: [
      'University of Washington',
      'Seattle University',
      'Seattle Central College',
      'North Seattle College',
    ],
  },
  {
    name: 'Miami',
    colleges: [
      'University of Miami',
      'Florida International University',
      'Miami Dade College',
      'Barry University',
    ],
  },
  {
    name: 'Denver',
    colleges: [
      'University of Denver',
      'Metropolitan State University of Denver',
      'Community College of Denver',
      'Regis University',
    ],
  },
  {
    name: 'Atlanta',
    colleges: [
      'Emory University',
      'Georgia Institute of Technology',
      'Georgia State University',
      'Spelman College',
    ],
  },
  {
    name: 'Dallas',
    colleges: [
      'Southern Methodist University',
      'University of Texas at Dallas',
      'El Centro College',
      'Dallas Baptist University',
    ],
  },
  {
    name: 'Washington',
    colleges: [
      'Georgetown University',
      'George Washington University',
      'Howard University',
      'American University',
    ],
  },
  {
    name: 'Austin',
    colleges: [
      'University of Texas at Austin',
      'St. Edwards University',
      'Austin Community College',
      'Concordia University Texas',
    ],
  },
  {
    name: 'San Diego',
    colleges: [
      'University of California, San Diego',
      'San Diego State University',
      'University of San Diego',
      'Point Loma Nazarene University',
    ],
  },
  {
    name: 'Miami',
    colleges: [
      'University of Miami',
      'Florida International University',
      'Miami Dade College',
      'Barry University',
    ],
  },
  {
    name: 'Denver',
    colleges: [
      'University of Denver',
      'Metropolitan State University of Denver',
      'Community College of Denver',
      'Regis University',
    ],
  },
  ,
  {
    name: 'Denver',
    colleges: [
      'University of Denver',
      'Metropolitan State University of Denver',
      'Community College of Denver',
      'Regis University',
    ],
  },
  ,
  {
    name: 'Denver',
    colleges: [
      'University of Denver',
      'Metropolitan State University of Denver',
      'Community College of Denver',
      'Regis University',
    ],
  },
  ,
  {
    name: 'Denver',
    colleges: [
      'University of Denver',
      'Metropolitan State University of Denver',
      'Community College of Denver',
      'Regis University',
    ],
  },
];

export const thanksPolicy = 'I acknowledge that, by clicking the checkbox as my official signature, I consent to representatives of universityNames, contacting me about educational opportunities via email, text, or phone, including my mobile phone number(s) 7185851401, using an automatic dialer, or pre-recorded message. Message and data rates may apply. I understand that my consent is not a requirement for enrollment, and I may withdraw my consent at any time.';

export const adOptimizorData = {
  searchResultId: 'acbb214a-e69e-4394-bea0-3b48f6997cca',
  duration: 446,
  items: [
    {
      itemId: '458',
      brandName: 'Florida Career College',
      networkSort: 1,
      requestDuration: 306,
      sourceID: null,
      extClickID: 'testClickID',
      advertiserId: '409',
      displayName:
        'Earn A Business Office Administration Diploma - Start Building A Future You Can Be Proud Of',
      adCopyVersion: 1,
      headline:
        'Learn valuable technical skills like - Microsoft Word&#174;, Microsoft Excel&#174;, Microsoft PowerPoint&#174; and more!&lt;br /&gt;Prepare for career opportunities like: Administrative Assistant, Secretary, Customer Service Rep, and more!&lt;br /&gt;Fast: Prepare for a career in as few as 10 months&lt;br /&gt;Convenient: Daytime and evening classes available',
      blurbs: [
        'Learn valuable technical skills like - Microsoft Word®, Microsoft Excel®, Microsoft PowerPoint® and more!',
        'Prepare for career opportunities like: Administrative Assistant, Secretary, Customer Service Rep, and more!',
        'Fast: Prepare for a career in as few as 10 months',
        'Convenient: Daytime and evening classes available',
        'Helpful: Financial Aid available to those who qualify',
      ],
      programAdCopy: {
        customVar: [null, null, null],
        constraints: [],
        location: '',
        advertiserName: '',
        programName: '',
        programDescription: '',
        imageUrl: '',
      },
      imageUrl:
        'https://cdn.myadoptimizer.com/maojsfiles/images/LogoAdvertiser_000458_52ce13ea-5a04-42cc-8c44-919677e99f04.jpg',
      destUrl:
        'https://api.myadoptimizer.com/api/MAOHttpRedirect?src=https%3A%2F%2Finfo.floridacareercollege.com%2Fbusiness-office-administration%2F%3Fadkey%3DIS1CAEXN00%26ctc%3D877-425-6149%26utm_source%3Dcexplorer%26utm_medium%3Dcpc%26utm_campaign060118-fcc-cpc%26utm_content%3DFCC-Business%26CCK%3Dacbb214a-e69e-4394-bea0-3b48f6997cca%7Cfcc_business%26t%3DtestClickID&LandingPageID=43&EventID=acbb214a-e69e-4394-bea0-3b48f6997cca&AdNetworkAPIID=44&cpc=34.50&Brand=Florida Career College&Title=Earn A Business Office Administration Diploma - Start Building A Future You Can Be Proud Of&CB=1VawjEjip8ij5oaSZJZ0mw==&M=4XarSvqYDCayCqZpzLZFSg==&Weight=34.50&BidModifiers=50.00&NetworkAdID=458&SourceID=&LandingPageURL=',
      impressionUrl:
        'https://api.myadoptimizer.com/api/MAOSaveResults?LandingPageID=43&AdNetworkAPIID=44&EventID=acbb214a-e69e-4394-bea0-3b48f6997cca&AdCampaignID=458&RequestTypeID=4',
      revenue: 34.5,
      baseRevenue: 23.0,
      isOnlineSchool: null,
      schoolAddress: '',
      schoolCity: '',
      schoolState: '',
      schoolZipCode: '',
      bidModifierLog: [
        'Ad Placement: ICF - Value: 50.00%',
        'States: PA - Value: -10.00%',
        'Tuesday: 14:40 - Value: 10.00%',
      ],
      weight: 34.5,
      statusId: 1,
      trackingURL:
        'https://api.myadoptimizer.com/api/MAOLeadTracking?AdNetworkAPIID=44&LandingPageID=43&EventID=acbb214a-e69e-4394-bea0-3b48f6997cca&IP=123.32.32.123&AdCampaignID=458',
      displayUrl:
        'http://www.floridacareercollege.com/business-office-administration',
    },
    {
      itemId: '4583',
      brandName: 'Florida Career College',
      networkSort: 1,
      requestDuration: 306,
      sourceID: null,
      extClickID: 'testClickID',
      advertiserId: '409',
      displayName:
        'Earn A Business Office Administration Diploma - Start Building A Future You Can Be Proud Of',
      adCopyVersion: 1,
      headline:
        'Learn valuable technical skills like - Microsoft Word&#174;, Microsoft Excel&#174;, Microsoft PowerPoint&#174; and more!&lt;br /&gt;Prepare for career opportunities like: Administrative Assistant, Secretary, Customer Service Rep, and more!&lt;br /&gt;Fast: Prepare for a career in as few as 10 months&lt;br /&gt;Convenient: Daytime and evening classes available',
      blurbs: [
        'Learn valuable technical skills like - Microsoft Word®, Microsoft Excel®, Microsoft PowerPoint® and more!',
        'Prepare for career opportunities like: Administrative Assistant, Secretary, Customer Service Rep, and more!',
        'Fast: Prepare for a career in as few as 10 months',
        'Convenient: Daytime and evening classes available',
        'Helpful: Financial Aid available to those who qualify',
      ],
      programAdCopy: {
        customVar: [null, null, null],
        constraints: [],
        location: '',
        advertiserName: '',
        programName: '',
        programDescription: '',
        imageUrl: '',
      },
      imageUrl:
        'https://cdn.myadoptimizer.com/maojsfiles/images/LogoAdvertiser_000458_52ce13ea-5a04-42cc-8c44-919677e99f04.jpg',
      destUrl:
        'https://api.myadoptimizer.com/api/MAOHttpRedirect?src=https%3A%2F%2Finfo.floridacareercollege.com%2Fbusiness-office-administration%2F%3Fadkey%3DIS1CAEXN00%26ctc%3D877-425-6149%26utm_source%3Dcexplorer%26utm_medium%3Dcpc%26utm_campaign060118-fcc-cpc%26utm_content%3DFCC-Business%26CCK%3Dacbb214a-e69e-4394-bea0-3b48f6997cca%7Cfcc_business%26t%3DtestClickID&LandingPageID=43&EventID=acbb214a-e69e-4394-bea0-3b48f6997cca&AdNetworkAPIID=44&cpc=34.50&Brand=Florida Career College&Title=Earn A Business Office Administration Diploma - Start Building A Future You Can Be Proud Of&CB=1VawjEjip8ij5oaSZJZ0mw==&M=4XarSvqYDCayCqZpzLZFSg==&Weight=34.50&BidModifiers=50.00&NetworkAdID=458&SourceID=&LandingPageURL=',
      impressionUrl:
        'https://api.myadoptimizer.com/api/MAOSaveResults?LandingPageID=43&AdNetworkAPIID=44&EventID=acbb214a-e69e-4394-bea0-3b48f6997cca&AdCampaignID=458&RequestTypeID=4',
      revenue: 34.5,
      baseRevenue: 23.0,
      isOnlineSchool: null,
      schoolAddress: '',
      schoolCity: '',
      schoolState: '',
      schoolZipCode: '',
      bidModifierLog: [
        'Ad Placement: ICF - Value: 50.00%',
        'States: PA - Value: -10.00%',
        'Tuesday: 14:40 - Value: 10.00%',
      ],
      weight: 34.5,
      statusId: 1,
      trackingURL:
        'https://api.myadoptimizer.com/api/MAOLeadTracking?AdNetworkAPIID=44&LandingPageID=43&EventID=acbb214a-e69e-4394-bea0-3b48f6997cca&IP=123.32.32.123&AdCampaignID=458',
      displayUrl:
        'http://www.floridacareercollege.com/business-office-administration',
    },
  ],
};

export const schoolFields = [
  'result_set_identifier',
  'distance_miles',
  'degree_level',
  'result_type',
  'school',
  'brand_name',
  'logo',
  'schoolid',
  'clientid',
  'consent',
  'payout',
  'location',
  'state'
];
export const programFields = [
  'result_identifier',
  'online',
  'program',
  'questions'
];

export const intrestedSubjectArea = [
  {
    title: 'Business',
    value: 'Business'
  },
  {
    title: 'Psychology',
    value: 'Psychology'
  },
  {
    title: 'Criminal Justice & Legal',
    value: 'Criminal Justice & Legal'
  },
  {
    title: 'Technology',
    value: 'Technology'
  },
  {
    title: 'Education & Liberal Arts',
    value: 'Education & Liberal Arts'
  },
  {
    title: 'Healthcare',
    value: 'Healthcare'
  },
  {
    title: 'Art & Design',
    value: 'Art & Design'
  },
  {
    title: 'Hospitality & Culinary Arts',
    value: 'Hospitality & Culinary Arts'
  },
  {
    title: 'Nursing',
    value: 'Nursing'
  },
  {
    title: 'Trade and Vocational',
    value: 'Trade and Vocational'
  }
];