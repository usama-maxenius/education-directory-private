import React, { FC, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Input from '../Input';
import emailSvg from '@/assets/icons/email.svg';
import mobileSvg from '@/assets/icons/mobile.svg';
import locationSvg from '@/assets/icons/location.svg';
import homeSvg from '@/assets/icons/home.svg';
import TermsCheckbox from '../TermsCheckbox';
import { AppContext } from '@/context/AppContext';
import styles from './index.module.css';
import { validatePhone } from '@/utils/fieldvalidation';
import { Button } from '@chakra-ui/react';

type TProp = {
  readonly primaryForm?: boolean;
  readonly textColorBlack: boolean;
};
const isFieldRequired = ['email', 'phone', 'zip_code', 'address_line1'] as const;
const ProgramsForm: FC<TProp> = ({ primaryForm = false, textColorBlack }: TProp) => {
  const router = useRouter();
  const { stepsData, setStepsData } = useContext(AppContext);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [validateEmail, setValidateEmail] = useState('' as string);
  const [isEmailValidate, setIsEmailValidate] = useState(false as boolean);

  const getStartedDisabled = isFieldRequired?.every(item =>  stepsData[item] && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stepsData.email));

  const clickHandler = async () => {
    await setStepsData({
      ...stepsData,
      apllynow: true,
    });
    acceptTerms && router.push('/get-started/2');
  };

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
      <div className={styles.programs__form}>
        <div className='my-4'>
          <Input
            icon={emailSvg}
            value={stepsData.email}
            type='email'
            placeholder='Email Address'
            isEmail={isEmailValidate}
            onChange={(e) =>
              {
                setStepsData({
                  ...stepsData,
                  email: e,
                });
                setValidateEmail(e);
              }
            }
            onBlur={() => checkEmailValidation() }
          />
        </div>
        <div className={styles.multiCols}>
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
            placeholder='Zip Code'
            value={stepsData.zip_code}
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
            placeholder='Street Address'
            value={stepsData.address_line1}
            icon={homeSvg}
            onChange={(e) =>
              setStepsData({
                ...stepsData,
                address_line1: e,
              })
            }
          />
        </div>
        <div className='flex my-2'>
          <TermsCheckbox
            rounded
            onChange={(check) => setAcceptTerms(check)}
          />
          <p
            className={`${
              textColorBlack ? 'text-dark' : 'text-white'
            } text-xs ml-3`}
          >
            Here’s is the minimum required legal text so we can
            capture and store email address’s and also contact them
            with offers.
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            onClick={() => getStartedDisabled && clickHandler()}
            bg={primaryForm ? 'ED.primary' : 'ED.secondary'} 
            borderRadius='26'
            color='ED.white'
            h='52px'
            w='287px'
            fontFamily='IBM Plex Sans' 
            fontSize='xl'
            fontWeight='600'
            className={`text-white h4 h-btn ${!getStartedDisabled ? 'btn-disabled' : ''} `}
            _hover={{ background: primaryForm ? 'ED.primary' : 'ED.secondary' }}
            disabled={getStartedDisabled}
          >
            Apply now
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProgramsForm;
