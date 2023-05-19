import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';
import style from './index.module.css';

type IProps = {
  content: string;
  stepNumber: number;
  icon: StaticImageData;
  navModel?: boolean;
};

const Step: FC<IProps> = ({
  content,
  stepNumber,
  icon,
  navModel,
}): JSX.Element => {
  return (
    <div className={style.root}>
      <div className={style.iconWrapper}>
        <div
          className={
            navModel ? style.navStepIconContainer : style.stepIconContainer
          }
        >
          <Image
            className={navModel ? style.stepIconsColor : ''}
            src={icon}
            alt="edu-user"
          />
        </div>
        <h4 className={navModel ? style.navHeading : style.heading}>
          {' '}
          Step {stepNumber}
        </h4>
      </div>
      <p className={navModel ? style.navContent : style.content}>{content}</p>
    </div>
  );
};

export default Step;
