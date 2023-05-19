// * GLOBAL CLIENT TYPINGS =====================================================
// * Globally declared modules, types, and interfaces. Can be used anywhere in
// * the project without importing directly.
// * ===========================================================================

declare module 'react-scroll';

interface IImage {
  id: number;
  name: string;
  asset: string;
}

interface ILogo {
  id: number;
  name: string;
  image: string;
  link: string;
}

interface IResults {
  hero_heading: string;
  hero_image: string;
  hero_text: string;
  slug: string;
}
interface IHero {
  id: string;
  hero_image: IImage | null;
  hero_heading: string;
  hero_text: string;
  hero_video: string | null;
}

interface IHeros {
  slug: any;
  slug: any;
  hero_heading: ReactNode;
  count: number;
  next: null;
  previous: null;
  results: IResults[];
}
interface IInterest {
  slug: any;
  slug: any;
  hero_heading: ReactNode;
  count: number;
  next: null;
  previous: null;
  results: IResults[];
}
interface IProgramsArray {
  slug: any;
  slug: any;
  hero_heading: ReactNode;
  count: number;
  next: null;
  previous: null;
  results: IProgram[];
}

interface IProgram {
  readonly id: number;
  readonly hero: number;
  readonly slug: string;
  banner: IHero;
  readonly program_as_heading: string;
  readonly program_as_text: string;
  readonly logos: ILogo[];
  readonly goals_image: IImage;
  readonly outcomes_image: IImage;
  readonly experience_image: IImage;
  readonly quote_bg_image: IImage;
  readonly goals_heading: string;
  readonly goals_text: string;
  readonly goals_list: string;
  readonly outcomes_heading: string;
  readonly outcomes_text: string;
  readonly outcomes_list: string;
  readonly experience_heading: string;
  readonly experience_text: string;
  readonly experience_list: string;
  readonly careers_heading: string;
  readonly careers_text: string;
  readonly careers_first_sub_heading: string;
  readonly careers_first_sub_heading_text: string;
  readonly careers_second_sub_heading: string;
  readonly careers_second_sub_heading_text: string;
  readonly careers_list: string;
  readonly quote_text: string;
  readonly quote_footer: string;
}

interface IPage {
  id: number;
  slug: string;
  hero: number;
  programs: IProgram[];
  banner: IHero;
  overview_heading: string;
  overview_text: string;
  degrees_can_study_heading: string;
  degrees_can_study_text: string;
  degrees_image: IImage;
  degrees_list: string;
  requirements_heading: string;
  requirements_text: string;
  requirements_image: IImage;
  requirements_list: string;
  experience_heading: string;
  experience_text: string;
  experience_image: IImage;
  experience_list: string;
  careers_heading: string;
  careers_text: string;
  careers_first_sub_heading: string;
  careers_first_sub_heading_text: string;
  careers_second_sub_heading: string;
  careers_second_sub_heading_text: string;
  careers_list: string;
  quote_text: string;
  quote_footer: string;
  quote_bg_image: IImage;
  quote_video: string | null;
  logos: ILogo[];
}

type TTitle = s;

type OptionType = {
  title?: string;
  value?: string;
  OptionLabel?: string;
  QuestionValue?: string;
  IsVisible?: boolean;
  result_identifier?: string;
  result_set_identifier?: string;
};

type SubmitIndentifiers = {
  result_identifier: string;
  result_set_identifier: string;
  schoolid?: string;
};

type IKeys =
  | 'classes'
  | 'like_to_start'
  | 'current_education_level'
  | 'hsyear'
  | 'currently_enrolled'
  | 'hold_licence'
  | 'email'
  | 'tel'
  | 'zip_code'
  | 'st_address'
  | 'us_citizen'
  | 'computer_internet_access';

interface IAppContextProps {
  appTitle: string;
  setAppTitle: (title: string)=> void;
  appName: string;
  stepsData: StepData;
  searchIdentifier: ISearchResponse;
  setSearchIdentifier: (val: ISearchResponse) => void;
  setStepsData: Function;
  uniList: object;
  programSlug: ProgramSlug[] | [];
  currentPage: string;
  setCurrentPage: (str)=> void;
  navType: string;
  setNavType: (str: string)=> void;
  showSubNav: boolean;
  setShowSubNav: (b: boolean)=> void;
  handleStarted: (str: string) => void;
  pageLogos: [];
  deviceType: string;
  footerText: string;
  setFooterText: (str: string) => void;
  whiteGStepsData: whiteGStepsData;
  setWhiteGStepsData: Function;
};

type StepOneToThree = {
  current: number;
  classes: string;
  interest: string[];
};

type StepFourFive = {
  [key in StepData]: string;
};

type Gender = 'Male' | 'Female';
type TBoolean = 'Yes' | 'No';
type Classes = 'Online' | 'Either' | 'Campus';

interface StepData {
  current: number;
  gender: Gender | string;
  online_or_campus: Classes;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  phone2: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  zip_code: string;
  rn_license: TBoolean | string;
  computer_internet_access: TBoolean | string;
  age: string;
  hsyear: string;
  current_education_level: string;
  preferred_education_level: string;
  currently_enrolled_in_college: TBoolean | string;
  us_citizen: TBoolean | string;
  preferred_enrollment: '0' | '1' | '4';
  areas_of_interest: string[];
  is_contacted_by_school: TBoolean | string;
  military: {
    military_status: TBoolean | string;
    military_affiliation: string;
    relationship: string;
  };
  channel_name: 'Web' | 'Call Center' | 'Data Supplier';
  searchIdentifier: string;
}

interface ISearchBody {
  accesskey: string;
  prospect: {
    gender: 'F' | 'M';
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    phone2: string;
    address_line1: string;
    address_line2: string;
    city: string;
    state: string;
    zip_code: string;
    computer_internet_access: TBoolean;
    age: string;
    hsyear: string;
    current_education_level: string;
    preferred_education_level: string;
    us_citizen: TBoolean;
    military: {
      military_status: TBoolean | string;
      military_affiliation: string;
      relationship: string;
    };
    preferred_enrollment: number;
    online_or_campus: TClassType;
    ip: string;
  };
  search: {
    areas_of_interest: string[];
    can_complete_enrollment: TBoolean;
    currently_enrolled_in_college: TBoolean | string;
    rn_license: TBoolean;
    teaching_certificate: TBoolean;
    is_contacted_by_school: string;
    graduated_in_us: string;
    channel_name: 'Web' | 'Call Center' | 'Data Supplier';
    ss1: string;
    ss2: string;
    ss3: string;
    ss4: string;
    web_url: string;
    webinitiatingurl: string;
    traffic_trustedform_url: string;
    traffic_jornaya_leadid: string;
    traffic_trustedform_token: string;
    traffic_category: string;
    supplier_jornaya_leadid: string;
    supplier_trustedform_token: string;
    supplier_trustedform_url: string;
    time_to_call: string;
    callcenter: {
      cc_rep_id: string;
      PublisherBrandName: string;
      callid: string;
      sessionid: string;
      cc_inbound_transfer_company: string;
      cc_dba: string;
      cc_inbound_transfer_dba: string;
      cc_outbound_company: string;
    };
    test_flag: number;
    tcpa_text: string;
  };
  other_info: {
    client_ids: string;
    level_of_interest: string;
    browser_user_agent: string;
    time_zone: string;
    device_type: string;
    lead_unique_id: string;
    web_session_id: string;
    site_name: string;
    landing_page: string;
    supplier_campaign: string;
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_content: string;
    utm_term: string;
    utm_supplier_id: string;
    utm_sub_id: string;
    utm_ad_id: string;
    traffic_source_type: string;
  };
}

interface ISearchResponse {
  accesskey: string;
  search_identifier: string;
}
type StepFourFive = {
  [key in IKeys]: string;
};

//interface for search results
interface IQuestionResultSearch {
  IsVisible: boolean;
  QuestionDescription: null;
  QuestionFieldName: string;
  QuestionLabel: null;
  QuestionNotes: null;
  QuestionOptions: null;
  QuestionRequired: boolean;
  QuestionType: boolean;
  QuestionValue: string;
  Rules: null;
}
interface IPrograms {
  OptionLabel: string;
  QuestionValue: string;
  program: string;
  questions: IQuestionResultSearch[];
  result_identifier: string;
  result_set_identifier: string;
}

interface IResultSearch {
  brand_name: string;
  clientid: string;
  consent: string;
  degree_level: string;
  distance_miles: number;
  location: string;
  logo: string;
  online: boolean;
  payout: number;
  program: string;
  programs: IPrograms[];
  questions: IQuestionResultSearch[];
  result_identifier: string;
  result_set_identifier: string;
  result_type: string;
  school: string;
  schoolid: string;
  state: string;
  status?: boolean;
}
interface CurrentStatus {
  width: number;
  completed: number;
  isForward: boolean;
}
interface IProps {
  statusHandler: (currentStatus: CurrentStatus) => void;
}

type DropdownsType = {
  dropdown1: string;
  dropdown2: string;
  dropdown3: string;
} & { [key: string]: string };

//program slug
interface ProgramSlug {
  slug: string;
  title: string;
  text: string;
  image: string;
}

interface IHomePage {
  id: number;
  logos: ILogo[];
  quote_bg_image: IImage;
  slug: string;
  quote_text: string;
  quote_footer: string;
  quote_video: null | string;
  hero: number;
}

type IQueryParams = {
  LandingPageToken: string;
  Device: string;
  ClientIP: string;
  ZipCode: string;
  State: string;
  AdPlacement: string;
  AreaOfStudy: string;
  Concentration: string;
  DegreeLevel: string;
  HighSchoolGradYear: string;
  HighestEducationLevel: string;
  LearningPreference: string;
  LikelihoodToEnroll: string;
  MilitaryStatus: boolean;
  RNDegree: boolean;
  StartDate: string;
  USCitizen: boolean;
  Accreditations: string;
  ProgramLength: string;
  ProgramRequirements: string;
  City: string;
  CustomVar1: string;
};

interface AdOptimizorResponse {
  searchResultId: string;
  duration: number;
  items: AdItem[];
}

interface AdItem {
  itemId: string;
  brandName: string;
  networkSort: number;
  requestDuration: number;
  sourceID: null | string;
  extClickID: string;
  advertiserId: string;
  displayName: string;
  adCopyVersion: number;
  headline: string;
  blurbs: string[];
  programAdCopy: {
    customVar: (null | string)[];
    constraints: any[];
    location: string;
    advertiserName: string;
    programName: string;
    programDescription: string;
    imageUrl: string;
  };
  imageUrl: string;
  destUrl: string;
  impressionUrl: string;
  revenue: number;
  baseRevenue: number;
  isOnlineSchool: null | boolean;
  schoolAddress: string;
  schoolCity: string;
  schoolState: string;
  schoolZipCode: string;
  bidModifierLog: string[];
  weight: number;
  statusId: number;
  trackingURL: string;
  displayUrl: string;
}
