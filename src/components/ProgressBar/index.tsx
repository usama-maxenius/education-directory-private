import React, { useContext } from 'react';
import { ProgressBar } from '@/assets/icons';
import Image from 'next/image';
import style from './index.module.css';
import { Text, Box, Stack, Flex } from '@chakra-ui/react';

interface IProps {
    width: any,
}

const { progress_container, progress_forground, iconProgress, progressStep__applyColor } = style;

const ProgressBarNew = ({ width }: IProps) => {
    const fillBar = `${width == 0 ? '11' : width-1}`;
    const tickIcon = `${width == 0 ? '12' : width}`;

    return (
        <>
            
            <Stack w='100%' className={progress_container}>
                <Flex className='progress_background'>
                    <Box w='100%' h='6px' borderRadius='8px' bg='ED.brightGray' mr='8px' className='progress_tile'></Box>
                </Flex>
                <Flex mt='0 !important' className={progress_forground} style={{width: `${fillBar}%`}}>
                    <Box minW='100%' h='6px' borderRadius='8px' bg='ED.secondary' mr='8px' className='progress_tile'></Box>
                </Flex>
                <Flex style={{ width: `${tickIcon}%` }} mt='0 !important' justifyContent='flex-end' className={progressStep__applyColor}>
                    <Box className={iconProgress}>
                        <ProgressBar colour={'#f4b51e'}/>
                    </Box>
                </Flex>
            </Stack>
        </>
    );
};

export default ProgressBarNew;