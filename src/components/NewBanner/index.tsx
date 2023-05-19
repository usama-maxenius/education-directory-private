import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import styles from './index.module.css';

const { overlayCover } = styles;

type IProps = {
    height?: string;
    isVideo?: boolean;
    isParallax?: boolean;
    src: string;
    children?: ReactNode | ReactNode[];
};

const NewBanner: FC<IProps> = (props): JSX.Element => {
    const { height = '589px', isVideo, isParallax, children, src } = props;

    return (
        <>
            <Box w='100%' minH={height} pos='relative'>
                <Box 
                    w='100%' 
                    minH={height} 
                    // bg='ED.shahdowPrimary'
                    pos='absolute'
                    zIndex='1'
                    className={overlayCover}
                ></Box>
                {
                    isVideo ? 
                    <>
                        <Box
                            as='video'
                            src={src}
                            w='100%' 
                            h={height} 
                            objectFit='cover'
                            pos={isParallax ? 'fixed' : 'unset'}
                            // controls 
                            autoPlay 
                            loop 
                            muted
                        />
                        {children}
                    </> : <>
                        <Box
                            backgroundImage={`url(${src})`}
                            backgroundAttachment={isParallax ? 'fixed' : 'unset'}
                            backgroundPosition='center'
                            backgroundRepeat='no-repeat'
                            backgroundSize='cover'
                            objectFit='cover'
                            height={height}
                            pos='absolute'
                            width='100%'
                        >
                            {children}
                        </Box>
                    </>
                }
            </Box>
        </>
    );
};

export default NewBanner;