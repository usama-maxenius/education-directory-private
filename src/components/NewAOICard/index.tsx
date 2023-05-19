import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Text, Stack } from '@chakra-ui/react';
import Card from '@/components/Card';

import { Image_Quality } from '@/appConstants';

import style from './index.module.css';

type IProps = {
    header?: boolean;
    headerTitle?: string;
    loading?: boolean;
    data: any;
    currentCount?: number;
    onClick?: () => void;
    device: string;
};

const { cardStack, mob_cardStack, card, cardBody, cardImg, img, cardContentBody } = style;

const AOICard: FC<IProps> = (props): JSX.Element => {
    const { header, headerTitle, data, device } = props;

    return (
        <>
            <Stack className='container'>
            {
                header ?
                <>
                    <Text
                        align='center'
                        color='ED.fontColorPrimary' 
                        fontFamily='IBM Plex Serif' 
                        fontSize={`${device == 'Mobile' ? '4xl' : '6xl'}`}
                        fontWeight={`${device == 'Mobile' ? '600' : '500'}`}
                    >
                        {headerTitle}
                    </Text>
                </> : null
            }

            <Box mt='0 !important' className={`${device == 'Mobile' ? mob_cardStack : cardStack }`}>
                {
                    data.length !== 0 &&
                    data?.map(({slug, text, image, title}: ProgramSlug, index: any) => {
                        return (
                            <Stack key={`aoi-${index}-${slug}`} className={card} id={`aoi-${index}-${slug}`}>
                                <Card>
                                    <Box className={cardBody}>
                                        <Box className={cardImg}>
                                            <Image
                                                src={image}
                                                width='0'
                                                loading='lazy'
                                                quality={Image_Quality}
                                                height='0'
                                                sizes='100%'
                                                className={img}
                                                alt={text}
                                            />
                                        </Box>
                                        <Box className={cardContentBody} fontFamily='IBM Plex Sans'>
                                            <Link href={`/area-of-interest/${slug}`}>
                                                <Text color='ED.fontColorPrimary' textTransform='uppercase'  fontSize='xl' fontWeight='600' mb='10px'>
                                                    {title}
                                                </Text>
                                            </Link>
                                            <Text fontSize='md'  className='truncate-4'>
                                                {text}
                                            </Text>
                                        </Box>
                                    </Box>
                                </Card>
                            </Stack>
                        );
                    })
                }
            </Box>

            {/* {
                data && count > currentCount && 
                <>
                    <Box textAlign='center' py='5'>
                        <Button
                            minW='290px'
                            maxH='80px'
                            h='52px'
                            bg='ED.primary'
                            color='ED.fontColorWhite'
                            fontSize='xl'
                            fontWeight='600'
                            fontFamily='IBM Plex Sans' 
                            borderRadius='26'
                            py='0.5rem'
                            px='1rem'
                            _hover={{ background: 'ED.primary' }}
                            onClick={() => { onClick() }}
                        >
                            { loading ? <Loading height='32px' color='white' /> : 'See more' }
                        </Button>
                    </Box>
                </>
            } */}
            </Stack>
        </>
    );
};

export default AOICard;