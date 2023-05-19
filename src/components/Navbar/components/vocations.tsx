import { FC, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppContext } from '@/context/AppContext';
import { Box, Text, VStack } from '@chakra-ui/react';
import style from './index.module.css';

type IProps = {
  onClose?: Function;
};

const Vocations: FC<IProps> = (props) => {
  const { onClose } = props;
  const { programSlug } = useContext(AppContext);

  return (
    // <>
    //   {
    //     router.pathname == '/new-home' ?
        <>
          <Box bg='ED.primary' w='100%' borderRadius='6'>
            <VStack p={4}  alignItems='flex-start' spacing='4'>
              { programSlug && programSlug.map((item) => (
                  <Link key={item.slug} href={`/area-of-interest/${item.slug}`} onClick={()=> onClose && onClose()}>
                    <Text key={item.slug} textTransform='capitalize' fontFamily='IBM Plex Sans' fontWeight='400' fontSize='md' color={'white'}>{item.title}</Text>
                  </Link>
                ))
              }
            </VStack>
          </Box>
        </> 
    //     : <>
    //       <div className={style.vocationContainer}>
    //         { programSlug && programSlug.map((item) => (
    //             <Link key={item.slug} href={`/area-of-interest/${item.slug}`}>
    //               <h4 key={item.id} className='h4 text-white'>{item.slug.split('-').join(' ')}</h4>
    //             </Link>
    //           ))
    //         }
    //       </div>
    //     </>
    //   }
    // </>
  );
};
export default Vocations;
