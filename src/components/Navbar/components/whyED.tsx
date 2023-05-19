import { FC } from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import style from './index.module.css';
import tick from '@/assets/icons/tick.svg';

const WhyED: FC = (): JSX.Element => {
  const points = [1, 2, 3];
  const router = useRouter();
  return (
    // <>
    //   { 
    //     router.pathname == '/new-home' ? 
        <>
          <Box w='100%' p={6} bg='ED.primary' borderRadius='6'>
            <Flex gap='5'>
              <Box w='50%' display='flex' alignItems='center' flexDir='column' gap={4}>
                <Text fontFamily='IBM Plex Sans' fontWeight='500' fontSize='4xl' color='white'>
                  Education Directory helps match you with Education institutions
                </Text>
                <Text fontFamily='IBM Plex Sans' fontWeight='500' fontSize='sm' color='white'>
                  Combine creativity with technological origination and development of a
                  project from start to finish. Art programs can use interactive tools
                  to create art through technology, to share through digital media or
                  for business purposes such as marketing and branding.
                </Text>
              </Box>
              <Box w='50%' display='flex' alignItems='center' flexDir='column' gap={4} p={12} borderLeft='1px solid white'>
                {points.map((item) => (
                  <Box key={item} className={style.whyEDPoints}>
                    <Image className={style.whyEDIcon} src={tick} alt='' />

                    <Text color='ED.white' fontFamily='IBM Plex Sans' fontWeight='400' fontSize='md'>
                      Here’s a really good thing about Education Directory
                    </Text>
                  </Box>
                ))}
              </Box>
            </Flex>
          </Box>
        </> 
    //     : <>
    //       <div className={style.whyEDContainer}>
    //         <div className={style.whyEdLeft}>
    //           <h3 className={`${style.WhyEDheading} text-white`}>
    //             Education Directory helps match you with Education institutions
    //           </h3>
    //           <p className='text-sm text-light'>
    //             Combine creativity with technological origination and development of a
    //             project from start to finish. Art programs can use interactive tools
    //             to create art through technology, to share through digital media or
    //             for business purposes such as marketing and branding.
    //           </p>
    //         </div>
    //         <div className={style.whyEDRight}>
    //           {points.map((item) => (
    //             <div key={item} className={style.whyEDPoints}>
    //               <Image className={style.whyEDIcon} src={tick} alt='' />

    //               <p className='text-base text-white'>
    //                 Here’s a really good thing about Education Directory
    //               </p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </> 
    //   }
    // </>
  );
};
export default WhyED;
