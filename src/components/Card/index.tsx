import React, { FC } from 'react';
import style from './index.module.css';

type IProps = {
  children: JSX.Element | JSX.Element[];
  bgColor?: string;
};

const Card: FC<IProps> = ({
  children,
  bgColor = 'white',
}): JSX.Element => {
  return (
    <div className={`bg-${bgColor} ${style.card}`}>{children}</div>
  );
};

export default Card;
