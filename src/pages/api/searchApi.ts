import { ACCESS_KEY, CANDIMAVEN_BASE_URL } from '@/appConstants';

// Prepare search body
export const prepareSearchBody = async (state: StepData) => {
  const response = await fetch('/api/get-ip-address');

  const findMyIp = await response.json();

  const {
    email,
    gender,
    first_name,
    last_name,
    address_line1,
    zip_code,
    computer_internet_access,
    hsyear,
    us_citizen,
    preferred_enrollment,
    online_or_campus,
    rn_license,
    military,
    phone,
    current_education_level,
    currently_enrolled_in_college,
    areas_of_interest,
    channel_name,
    preferred_education_level,
  } = state;

  const age = new Date().getFullYear() - +state.age;
  const body: ISearchBody = {
    accesskey: ACCESS_KEY as string,
    prospect: {
      gender: gender === 'Male' ? 'M' : 'F',
      first_name,
      last_name,
      email,
      phone,
      phone2: '',
      address_line1,
      address_line2: '',
      city: 'Ajo',
      state: 'AZ',
      zip_code,
      computer_internet_access: computer_internet_access as TBoolean,
      age: `${age}`,
      hsyear: hsyear,
      current_education_level: current_education_level,
      preferred_education_level: preferred_education_level,
      us_citizen: us_citizen as TBoolean,
      military: {
        military_status: military.military_status,
        military_affiliation: 'air force',
        relationship: '',
      },
      preferred_enrollment: +preferred_enrollment,
      online_or_campus,
      ip: '68.109.129.255',
    },
    search: {
      areas_of_interest,
      currently_enrolled_in_college,
      can_complete_enrollment: 'No',
      rn_license: rn_license as TBoolean,
      teaching_certificate: 'No',
      is_contacted_by_school: 'Yes',
      graduated_in_us: 'Yes',
      channel_name,
      ss1: '9829',
      ss2: 'organic',
      ss3: '',
      ss4: '',
      web_url: 'https://test.google.com/',
      webinitiatingurl: 'https://test.google.com/workdocs/index.html#/share/document/',
      traffic_trustedform_url: 'http://google.com',
      traffic_jornaya_leadid: '79d2d183-1012-02cf-6ef5-bf3aaec09570',
      traffic_trustedform_token: 'c52c65236469061b609a1046ec60e5b21b48939f',
      traffic_category: 'education',
      supplier_jornaya_leadid: '79d2d183-1012-02cf-6ef5-bf3aaec09570',
      supplier_trustedform_token: 'c52c65236469061b609a1046ec60e5b21b48939f',
      supplier_trustedform_url: 'https://cert.trustedform.com/c52c65236469061b609a1046ec60e5b21b48939f',
      time_to_call: 'https://cert.trustedform.com/c52c65236469061b609a1046ec60e5b21b48939f',
      callcenter: {
        cc_rep_id: 'NA',
        PublisherBrandName: 'NA',
        callid: '',
        sessionid: '',
        cc_inbound_transfer_company: '',
        cc_dba: '',
        cc_inbound_transfer_dba: '',
        cc_outbound_company: '',
      },
      test_flag: 0,
      tcpa_text: 'by checking this box, i agree to be contacted by degreesearch and the schools i am matched to on the following pages by telephone, which may include artificial or pre-recorded calls and/or sms text messages, delivered via automated technology to the phone number that i have provided above regarding educational opportunities. i also represent that i am the subscriber and primary user of the telephone that i have provided above. i understand that my consent is not required to make a purchase or obtain services and that i may opt-out at any time. in order to proceed without providing consent, call 401-396-0389.',
    },
    other_info: {
      client_ids: '',
      level_of_interest: '',
      browser_user_agent: '',
      time_zone: '',
      device_type: '',
      lead_unique_id: '',
      web_session_id: '',
      site_name: 'edu',
      landing_page: 'grant',
      supplier_campaign: 'web',
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_content: '',
      utm_term: '',
      utm_supplier_id: '',
      utm_sub_id: '',
      utm_ad_id: '',
      traffic_source_type: 'grant',
    },
  };
  return body;
};

// Search Api
export const postSearchRequest = async (
  body: ISearchBody
): Promise<ISearchResponse | null> => {
  try {
    const response = await fetch(`${CANDIMAVEN_BASE_URL}/search`, {
      method: 'POST',
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`Error: status code ${response.status}`);
    }
    const data: ISearchResponse = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
