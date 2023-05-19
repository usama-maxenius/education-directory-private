import React, { useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import ProgressBarTick from '@/assets/icons/ProgressIcon.svg';
import Image from 'next/image';
import style from './index.module.css';
import { Text, Box, Stack, Flex } from '@chakra-ui/react';

interface IProps {
    width: any,
}

const { progress_container, progress_forground, iconProgress, progressStep__applyColor } = style;

const ProgressBar = ({ width }: IProps) => {
    const { stepsData, deviceType } = useContext(AppContext);
    const fillBar = `${width == 0 ? '11' : width-1}`;
    const tickIcon = `${width == 0 ? '12' : width}`;

    return (
        <>
            <Text mb='4' align='center' color='ED.primary' fontSize='sm' fontWeight='600' fontFamily='ED.fontFamilyPrimary'>
                Step {stepsData.current == 0 ? 1 : stepsData.current} of 7
            </Text>
            <Stack w={`${deviceType === 'Mobile' ? '360px' : '490px'}`} className={progress_container}>
                <Flex className='progress_background'>
                    <Box w={`${deviceType === 'Mobile' ? '79px' : '112px'}`} h='16px' borderRadius='8px' bg='ED.brightGray' mr='8px' className='progress_tile'></Box>
                    <Box w={`${deviceType === 'Mobile' ? '79px' : '112px'}`} h='16px' borderRadius='8px' bg='ED.brightGray' mr='8px' className='progress_tile'></Box>
                    <Box w={`${deviceType === 'Mobile' ? '79px' : '112px'}`} h='16px' borderRadius='8px' bg='ED.brightGray' mr='8px' className='progress_tile'></Box>
                    <Box w={`${deviceType === 'Mobile' ? '79px' : '112px'}`} h='16px' borderRadius='8px' bg='ED.brightGray' mr='8px' className='progress_tile'></Box>
                </Flex>
                <Flex mt='0 !important' className={progress_forground} style={{width: `${fillBar}%`}}>
                    <Box minW={`${deviceType === 'Mobile' ? '79px' : '112px'}`} h='16px' borderRadius='8px' bg='ED.primary' mr='8px' className='progress_tile'></Box>
                    <Box minW={`${deviceType === 'Mobile' ? '79px' : '112px'}`} h='16px' borderRadius='8px' bg='ED.primary' mr='8px' className='progress_tile'></Box>
                    <Box minW={`${deviceType === 'Mobile' ? '79px' : '112px'}`} h='16px' borderRadius='8px' bg='ED.primary' mr='8px' className='progress_tile'></Box>
                    <Box minW={`${deviceType === 'Mobile' ? '79px' : '112px'}`} h='16px' borderRadius='8px' bg='ED.primary' mr='8px' className='progress_tile'></Box>
                </Flex>
                <Flex style={{ width: `${tickIcon}%` }} mt='0 !important' justifyContent='flex-end' className={progressStep__applyColor}>
                    <Image
                        src={ProgressBarTick}
                        alt=""
                        className={iconProgress}
                    />
                </Flex>
            </Stack>
        </>
    );
};

export default ProgressBar;