import React, { useState, useEffect, useRef } from 'react';
import { STATUS, INITIAL_COUNT } from '@/appConstants';

export default function CountdownApp() {
  const [secondsRemaining, setSecondsRemaining] =
    useState(INITIAL_COUNT);
  const [status, setStatus] = useState(STATUS.STOPPED);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  useEffect(() => {
    setStatus(STATUS.STARTED);
  }, []);

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
  );
  return (
    <div>
      <div className='text-xs'>
        {twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
      </div>
    </div>
  );
}

function useInterval(callback: any, delay: any) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      //@ts-ignore
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
//@ts-ignore
const twoDigits = (num) => String(num).padStart(2, '0');
