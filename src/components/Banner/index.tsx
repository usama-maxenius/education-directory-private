import { Image_Quality } from '@/appConstants';
import Image from 'next/image';
import React, { FC, useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import style from './index.module.css';

type IProps = {
  src: string;
  children?: React.ReactNode;
  styles?: string;
  parallax?: boolean;
  quote?: boolean;
  srcType?: 'image' | 'video';
};

const Banner: FC<IProps> = ({
  src,
  children,
  styles,
  parallax = false,
  quote = false,
  srcType = 'image',
}): JSX.Element => {
  const videoRef = useRef<any>(null);
  const playerRef = useRef<any>();

  useEffect(() => {
    if (srcType === 'video') {
      const videoElement = videoRef.current;

      const setupPlayer = () => {
        playerRef.current = videojs(videoElement, {
          sources: [{ src }],
          controls: false,
          muted: false,
          // autoplay: false,
          loop: true,
          // preload: 'auto',
          poster: '',
          responsive: false,
          lazy: true,
          fluid: false,
        });

        playerRef.current?.on('ready', () => {
          videoElement?.setAttribute('autoplay', 'autoplay');
        });
      };

      setupPlayer();
    }
  }, [src, srcType]);

  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div
      className={`relative ${parallax ? style.parallaxClass : ''} ${
        styles ?? quote ? style.quoteClass : style.defaultBanner
      }`}
    >
      <div className={style.img_container}>
        <div
          className={
            parallax
              ? style.parallaxGradient
              : style.gradient_background
          }
        ></div>
        {srcType === 'video' ? (
          <div data-vjs-player>
            <video
              // preload='auto'
              autoPlay={true}
              style={{ position: 'absolute' }}
              src={`${src}?v=${Math.random()}`}
              ref={videoRef}
              className={`video-js ${
                parallax ? style.fixedVideoClass : style.videoClass
              }`}
            ></video>
          </div>
        ) : (
          src && <Image
            src={src}
            fill
            quality={Image_Quality}
            loading='lazy'
            alt={src}
            className={parallax ? style.fixedImageClass : style.imageClass}
          />
        )}
        <div className='container relative'>{children}</div>
      </div>
    </div>
  );
};

export default React.memo(Banner);
