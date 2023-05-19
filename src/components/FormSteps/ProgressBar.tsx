import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/context/AppContext';
import style from './index.module.css';
import ProgressBarTick from '@/assets/icons/ProgressIcon.svg';
import Image from 'next/image';
import { CurrentStatus } from './Two';

interface IProps {
  currentStatus: CurrentStatus;
}
const ProgressSteps = ({ currentStatus }: IProps) => {
  const { appName, stepsData, setStepsData } = useContext(AppContext);
  const { width, completed, isForward } = currentStatus;

  return (
    <div className={style.progressBar__outercontainer}>
      <p className='text-sm text-primary text-center font-semibold '>
        Step {stepsData.current} of 7
      </p>
      <div className={`${style.progressStep__container}`}>
        {/* step 2 */}
        <div className={style.progressStep__bar}>
          {stepsData.current >= 1 && (
            <div
              style={{
                width: `${completed == 2 || stepsData.current > 2 ? '100' : width}%`,
              }}
              className={style.progressStep__applyColor}
            >
              {stepsData.current <= 2 && (
                <Image
                  src={ProgressBarTick}
                  alt=''
                  className={style.iconProgress}
                />
              )}
            </div>
          )}
        </div>

        {/* step 3 and step 4 */}
        <div className={style.progressStep__bar}>
          {stepsData.current > 2 && (
            <div
              style={{
                width: `${ completed == 4 || stepsData.current > 4 ? '100' : width}%`,
              }}
              className={style.progressStep__applyColor}
            >
              {stepsData.current < 5 && (
                <Image
                  src={ProgressBarTick}
                  alt=''
                  className={style.iconProgress}
                />
              )}
            </div>
          )}
        </div>

        {/* step 5 and step 6 */}
        <div className={style.progressStep__bar}>
          {stepsData.current > 4 && (
            <div
              style={{
                width: `${completed == 6 || stepsData.current > 6 ? '100' : width}%`,
              }}
              className={style.progressStep__applyColor}
            >
              {stepsData.current < 7 && (
                <Image
                  src={ProgressBarTick}
                  alt=''
                  className={style.iconProgress}
                />
              )}
            </div>
          )}
        </div>

        {/* step 7 */}
        <div className={style.progressStep__bar}>
          {stepsData.current >= 7 && (
            <div
              style={{
                width: `${completed > 6 || stepsData.current > 6 ? '60' : width}%`,
              }}
              className={style.progressStep__applyColor}
            >
              {stepsData.current < 8 && (
                <Image
                  src={ProgressBarTick}
                  alt=''
                  className={style.iconProgress}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProgressSteps;
