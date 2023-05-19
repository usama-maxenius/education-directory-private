import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import checkboxCheckedSvg from '@/assets/icons/checked.svg';
import defaultCheckbox from '@/assets/icons/checkbox.svg';

type CheckboxProps = {
  selectedProgram?: boolean | null;
  onChange?: (checked: boolean) => void;
  rounded?: boolean;
};

const TermsCheckbox: React.FC<CheckboxProps> = ({
  onChange,
  selectedProgram,
  rounded = false,
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    selectedProgram && setChecked(true);
  }, [selectedProgram]);
  const handleChange = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <div
      className={rounded ? styles.roundedCheckbox : styles.checkbox}
      onClick={handleChange}
    >
      {checked ? (
        <Image
          loading="lazy"
          src={checkboxCheckedSvg}
          className={rounded ? styles.roundedImgClass : ''}
          alt="edu-checkbox"
          style={{maxWidth: 'inherit'}}
        />
      ) : (
        <Image
          loading="lazy"
          src={defaultCheckbox}
          className={rounded ? styles.roundedImgClass : ''}
          alt="edu-checkbox"
          style={{maxWidth: 'inherit'}}
        />
      )}
    </div>
  );
};

export default TermsCheckbox;
