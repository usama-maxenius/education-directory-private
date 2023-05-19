import React, { FC } from 'react';
import styles from './index.module.css';
import Image, { StaticImageData } from 'next/image';

type IProps = {
  type: 'email' | 'number' | 'text' | 'tel';
  placeholder: string;
  onChange: (e: string) => void;
  icon: StaticImageData;
  value?: string;
  endIcon?: StaticImageData;
  onBlur?: () => void;
  isEmail?: boolean;
};

const Input: FC<IProps> = (props): JSX.Element => {
  const { inputWithIcon, inputText } = styles;
  const { type, placeholder, icon, value, onChange, endIcon, onBlur, isEmail } = props;

  return (
    <div className={inputWithIcon}>
      <div className={styles.iconWrapper}>
        <Image
          src={icon}
          loading='lazy'
          width='0'
          height='0'
          sizes='100%'
          className={styles.imgIconClass}
          alt={placeholder}
        />
      </div>
      <input
        className={inputText}
        type={type}
        autoComplete='on'
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        style={{border: `${isEmail ? '1px solid red' : 'none'}`}}
      />
      {endIcon ? (
        <div className={styles.endIconWrapper}>
          <Image
            src={endIcon}
            loading='lazy'
            width='0'
            height='0'
            sizes='100%'
            className={styles.imgIconClass}
            alt={placeholder}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Input;
