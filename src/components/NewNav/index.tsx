import { FC, useContext } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Text, Popover, PopoverTrigger, PopoverContent, List, ListItem, Stack  } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { programNavLinks, subNavLinks } from '@/appConstants';
import { AppContext } from '@/context/AppContext';
import Link from 'next/link';
import Image from 'next/image';
import LogoSvg from '@/assets/icons/logo.svg';
import MenuSvg from '@/assets/icons/menu.svg';
import leftChevron from '@/assets/icons/leftChevron.svg';
import WhyED from '../Navbar/components/whyED';
import styles from '../Navbar/index.module.css';
import HowItWorks from '../Navbar/components/howItWorks';
import Vocations from '../Navbar/components/vocations';
import Schools from '../Navbar/components/Schools';
import Select from '../Select';


const { activeClass, lists, subnav_links, secondaryLogo, secondaryMenu } = styles;

const Navbar: FC = (): JSX.Element => {
    const { navType, showSubNav, deviceType } = useContext(AppContext);

    return (
        <Stack pos='fixed' top='0' w='100%' zIndex={999}>
            <Flex w='100%' justifyContent='center'  bg={navType === 'primary' ? 'ED.white' : 'ED.primary'}>
                <Flex w='87%' py={navType === 'secondry' ? '2' : '4'} alignItems='center' justifyContent='space-between'>
                    <Link href='/'>
                        <Image 
                            src={LogoSvg} 
                            alt='brand-logo' 
                            className={navType == 'primary' ? '' : secondaryLogo}
                        />
                    </Link>

                    {
                        navType == 'tertiary' ?
                        <>
                            <Flex columnGap='0' color='ED.white'>
                                <Image src={leftChevron} alt='left-chevron'/>
                                <Link href={'/'}>
                                    Go Back
                                </Link>
                            </Flex>
                        </> : <>
                            {
                               (deviceType === 'Tablet' || deviceType === 'Mobile') ?
                                <>
                                    <Image 
                                        src={MenuSvg} 
                                        alt='menu-icon'
                                        className={navType == 'primary' ? '' : secondaryMenu} 
                                    />
                                </> : <>
                                    <Flex columnGap='26' fontFamily='IBM Plex Sans' fontWeight='500' fontSize='sm' color={navType == 'primary' ? 'ED.primary' : 'ED.white'}>
                                        <Popover placement='bottom' trigger='hover'>
                                            <PopoverTrigger>
                                                <Text role='button'>Why Education Directory?</Text>
                                            </PopoverTrigger>
                                            <PopoverContent w='40%' right='-18%' border='none' boxShadow='xl' _focusVisible={{ outline: 'none'}}>
                                                <WhyED />
                                            </PopoverContent>
                                        </Popover>
                                        <Popover placement='bottom' trigger='hover'>
                                            <PopoverTrigger>
                                                <Text role='button'>How it works</Text>
                                            </PopoverTrigger>
                                            <PopoverContent w='80%' border='none' boxShadow='xl' _focusVisible={{ outline: 'none'}}>
                                                <HowItWorks />
                                            </PopoverContent>
                                        </Popover>
                                        <Popover placement='bottom-end' trigger='hover'>
                                        {({ onClose }) => (
                                            <>
                                                <PopoverTrigger>
                                                    <Text role='button'>Vocations</Text>
                                                </PopoverTrigger>
                                                <PopoverContent w='100%' right='-30%' m='0 auto' border='none' boxShadow='xl' _focusVisible={{ outline: 'none'}}>
                                                    <Vocations onClose={onClose} />
                                                </PopoverContent>
                                            </>
                                        )}
                                        </Popover>
                                        <Popover placement='bottom-end' trigger='hover'>
                                            <PopoverTrigger>
                                                <Text role='button'>School</Text>
                                            </PopoverTrigger>
                                            <PopoverContent minW={{ base: '100%', lg: 'max-content' }} m='0 auto' border='none' boxShadow='xl' _focusVisible={{ outline: 'none'}}>
                                                <Schools />
                                            </PopoverContent>
                                        </Popover>
                                    </Flex>
                                </>
                            }
                        </>
                    }
        
                </Flex>
            </Flex>
            { showSubNav && <NewSubNav />}
        </Stack>
    );
};

export default Navbar;

export const NewSubNav = () => {
    const router = useRouter();
    const isProgram = router.pathname.includes('programs');
    const { programSlug } = useContext(AppContext);

    return (
        <Flex w='100%' justifyContent='center' bg='ED.white' mt='0 !important'>
            <Flex w='87%' h='70px' alignItems='center' justifyContent='space-between'>
                <List display='flex' className={subnav_links}>
                    {(isProgram ? programNavLinks : subNavLinks).map(
                        ({ id, name }) => (
                            <ScrollLink
                                key={id}
                                activeClass={activeClass}
                                smooth
                                spy
                                offset={-120}
                                to={id}
                            >
                                <ListItem className={lists}>{name}</ListItem>
                            </ScrollLink>
                        )
                    )}
                </List>
                <Box w='20rem'>
                    <Select 
                        options={programSlug.map(p=> ({title: p.title, value: p.slug}))}
                        placeholder={'Select interest'}
                        selectedOptions={{ title: programSlug.find(p=> p.slug === router.query.interest)?.title || '' }}
                        onSelect={e=> router.push(`/area-of-interest/${e}`)}
                    />
                </Box>
            </Flex>
        </Flex>
    );
};