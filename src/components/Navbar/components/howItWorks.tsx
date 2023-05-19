import React, { useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import Step from '@/components/Step';
import { Box, Text, Flex, VStack, Button } from '@chakra-ui/react';
import { howItWorksData } from '@/appConstants';
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';

const HowItWorks = () => {
  const router = useRouter();
  
  const handleGetStarted = () => {
    ReactGA.event({
      category: 'How it works',
      action: 'Get Started',
      label: 'How it works'
    });
  };

  return (
    <>
      <Box bg='ED.primary' w='100%' borderRadius='6'>
        <VStack p={20}>
          <Text fontFamily='IBM Plex Sans' fontWeight='500' fontSize='4xl' color='ED.white'>3 Easy Steps to get matched</Text>
          <Flex alignItems='center' justifyContent='space-between' flexWrap='wrap'>
            {howItWorksData.map(({ id, content, icon, stepNumber }) => (
              <Step
                navModel={true}
                key={id}
                stepNumber={stepNumber}
                content={content}
                icon={icon}
              />
            ))}
            <Box m='auto' w='30%'>
              <Button bg='ED.secondary' color='ED.white' className='btn-secondry h-btn' _hover={{ background: 'ED.secondary' }}
                onClick={() => { handleGetStarted(); router.push('/get-started/2'); }}
              >
                Get Started
              </Button>
            </Box>
          </Flex>
        </VStack>
      </Box>
    </> 
  );
};
export default HowItWorks;
