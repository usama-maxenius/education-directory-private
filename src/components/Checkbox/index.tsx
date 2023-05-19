import Image from 'next/image';
import React, { FC } from 'react';
import style from './index.module.css';
import tickSvg from '@/assets/icons/tick.svg';

type TProps = {
  readonly name: string;
  readonly icon: any;
  readonly checked?: boolean;
  readonly clickHandler?: () => void;
};

const Checkbox: FC<TProps> = ({
  checked = false,
  icon,
  name,
  clickHandler,
}: TProps) => {
  return (
    <div
      onClick={clickHandler}
      className={
        checked ? style.activeCheckbox : style.defaultCheckbox
      }
    >
      <div className='relative pl-1 pr-3'>
        <div
          className={checked ? style.activeIcon : style.defaultIcon}
        >
          <p className={style.defaultIconWrapper}>
            <Image
              src={checked ? tickSvg : icon}
              width='0'
              height='0'
              sizes='100%'
              className={style.defaultImgClass}
              alt='edu-icon'
            />
          </p>
        </div>
      </div>
      <div className='text-base'>{name}</div>
    </div>
  );
};

export default Checkbox;
