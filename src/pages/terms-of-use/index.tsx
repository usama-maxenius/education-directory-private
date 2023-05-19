import { FC, useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '@/context/AppContext';
import Image from 'next/image';
import { Box, Text, Stack, Flex, InputGroup, InputLeftElement, Input, Button } from '@chakra-ui/react';
import emailSvg from '@/assets/icons/email.svg';
import mobileSvg from '@/assets/icons/mobile.svg';
import homeSvg from '@/assets/icons/home.svg';
import userSvg from '@/assets/icons/user.svg';

import style from './index.module.css';
const { sectionWrapper, terms_form } = style;

const TermsAndCondition: FC = ():JSX.Element => {
    const { query } = useRouter();
    const { setNavType } = useContext(AppContext);
    const [showForm, setShowForm] = useState(false as boolean);

    useEffect(()=> console.log('TOU query path is', query), [query]);
    useEffect(() => {
        setNavType('primary');
    }, []);

    return(
        <>
            <Stack bg='ED.lotion'>
                <Box className='container' py='42px'>
                    <Stack className={sectionWrapper}>
                        {
                            showForm ? 
                            <>
                                <Flex direction='column' gap='3'>
                                    <Text fontSize='36px' fontFamily='IBM Plex Sans' fontWeight='600' color='ED.primary'>
                                        California and Nevada residents may use this form to opt out of the sale of their personal information to third parties.
                                    </Text>
                                    <Stack spacing={4} maxW='388px' mt='42px'>
                                        <InputGroup>
                                            {/* <InputLeftElement
                                                pointerEvents='none'
                                                children={<Image src={userSvg} alt='icon' />}
                                            /> */}
                                            <Input
                                                placeholder='First name' 
                                                _placeholder={{ 
                                                    color: 'ED.lightGray', 
                                                    fontSize: '14px',
                                                    fontWeight: '400'
                                                }} 
                                                className={terms_form}
                                            />
                                        </InputGroup>
                                        <InputGroup>
                                            {/* <InputLeftElement
                                                pointerEvents='none'
                                                children={<Image src={userSvg} alt='' />}
                                            /> */}
                                            <Input 
                                                placeholder='Last name' 
                                                _placeholder={{ 
                                                    color: 'ED.lightGray', 
                                                    fontSize: '14px',
                                                    fontWeight: '400'
                                                }} 
                                                className={terms_form}
                                            />
                                        </InputGroup>
                                        <InputGroup>
                                            {/* <InputLeftElement
                                                pointerEvents='none'
                                                children={<Image src={emailSvg} alt='' />}
                                            /> */}
                                            <Input 
                                                placeholder='Email' 
                                                _placeholder={{ 
                                                    color: 'ED.lightGray', 
                                                    fontSize: '14px',
                                                    fontWeight: '400'
                                                }} 
                                                className={terms_form}
                                            />
                                        </InputGroup>
                                        <InputGroup>
                                            {/* <InputLeftElement
                                                pointerEvents='none'
                                                children={<Image src={mobileSvg} alt='' />}
                                            /> */}
                                            <Input 
                                                type='tel' 
                                                placeholder='Phone number' 
                                                _placeholder={{ 
                                                    color: 'ED.lightGray', 
                                                    fontSize: '14px',
                                                    fontWeight: '400'
                                                }} 
                                                className={terms_form}
                                            />
                                        </InputGroup>
                                        <InputGroup>
                                            {/* <InputLeftElement
                                                pointerEvents='none'
                                                children={<Image src={homeSvg} alt='' />}
                                            /> */}
                                            <Input 
                                                placeholder='State' 
                                                _placeholder={{ 
                                                    color: 'ED.lightGray', 
                                                    fontSize: '14px',
                                                    fontWeight: '400'
                                                }} 
                                                className={terms_form}
                                            />
                                        </InputGroup>
                                        <Button
                                            bg='ED.primary' 
                                            color='ED.white' 
                                            borderRadius='26'
                                            w='100%'
                                            h='52px'
                                            fontFamily='IBM Plex Sans' 
                                            fontSize='22px'
                                            fontWeight='600'
                                            _hover={{ background: 'ED.primary' }}
                                            my='26px !important'
                                        >
                                            Submit Request
                                        </Button>
                                    </Stack>
                                </Flex>
                            </> : <>
                                <Flex direction='column' gap='4'>
                                    <Text fontSize='60px' fontFamily='IBM Plex Serif' fontWeight='500' color='ED.primary'>Terms and Conditions for EducationDirectory.org</Text>
                                    <Text fontSize='22px' fontFamily='IBM Plex Sans' fontWeight='600' color='ED.primary'>REVISED SEPTEMBER 3, 2020</Text>
                                </Flex>
                                <Flex direction='column' gap='8' mt='42px !important'>
                                    <Text fontSize='16px' fontFamily='IBM Plex Sans' fontWeight='400' color='ED.dark'>
                                        PLEASE CHECK THIS PAGE FREQUENTLY FOR UPDATES. THE CURRENT VERSION OF THESE TERMS AND CONDITIONS APPLY EACH TIME YOU USE THE SITE. PLEASE READ THIS DOCUMENT CAREFULLY. IT CONTAINS VERY IMPORTANT INFORMATION ABOUT YOUR RIGHTS AND OBLIGATIONS, AS WELL AS LIMITATIONS AND EXCLUSIONS THAT MAY APPLY TO YOU. THIS DOCUMENT CONTAINS A DISPUTE RESOLUTION CLAUSE. 
                                    </Text>
                                    <Text fontSize='16px' fontFamily='IBM Plex Sans' fontWeight='400' color='ED.dark'>
                                        This Agreement (“Agreement”), is made by and between Education Directory (“We,” “Us,” or “Our”), with mailing address of 3219 E Camelback Rd. Ste 221, Phoenix, AZ 85018, pursuant to its provision of the Web Site called EducationDirectory.org (“Web Site”), and you (“You,” “Your” or “Yourself”). The Web Site, all products or services offered on this site, all text, pictures, graphics, logos, button items, images, works of authorship and other information and all revisions, modifications, and enhancements thereto (“Content”) are subject to the following terms and conditions, which may be updated from time to time. 
                                    </Text>
                                    <Text fontSize='16px' fontFamily='IBM Plex Sans' fontWeight='400' color='ED.dark'>
                                        UPON ACCESSING EDUCATIONDIRECTORY.ORG, YOU AGREE TO THESE TERMS AND CONDITIONS. PLEASE READ THESE TERMS CAREFULLY. IF YOU DO NOT AGREE WITH ANY OF THESE TERMS OR CONDITIONS, OR IF ANY OR ALL OF THE FOLLOWING ARE PROHIBITED WITHIN YOUR JURISDICTION, DO NOT ACCESS OR OTHERWISE USE THIS WEB SITE, THE PRODUCTS, OR ANY INFORMATION CONTAINED ON THIS WEB SITE. YOUR ACCESS TO AND USE OF THIS WEB SITE CONSTITUTE YOUR AGREEMENT TO ABIDE BY, AND UNDERSTANDING OF EACH OF THE TERMS AND CONDITIONS SET FORTH BELOW. IF YOU HAVE ANY QUESTIONS, VISIT THE “CONTACT US” SECTION OF OUR WEB SITE TO SUBMIT QUESTIONS TO OUR CUSTOMER SERVICE REPRESENTATIVES.
                                    </Text>
                                </Flex>
                                <Flex direction='column' gap='4' mt='26px !important' mb='42px !important'>
                                    <Text fontSize='22px' fontFamily='IBM Plex Sans' fontWeight='600' color='ED.primary'>
                                        1.MANDATORY ARBITRATION.
                                    </Text>
                                    <Text fontSize='16px' fontFamily='IBM Plex Sans' fontWeight='400' color='ED.dark'>
                                        You understand and agree that all claims, disputes, or controversies between You and Education Directory and its parents, subsidiaries or related companies, including but not limited to tort and contract claims, claims based upon any federal, state, or local statute, law, order, ordinance, or regulation, and the issue of arbitrability, shall be resolved by final and binding arbitration using the American Arbitration Association’s (AAA) Commercial Arbitration Rules (AAA Rules) in effect on the date of initiation of the arbitration, except as to those AAA Rules that conflict with or differ from this Agreement, by one or more arbitrators appointed in accordance with the said rules at a location determined by the arbitrator(s). The arbitrator shall be a lawyer with more than ten years experience or a retired or former judge. The arbitrator shall be independent of and unrelated to You. Notwithstanding any language in these Terms and Conditions to the contrary, no arbitration may be administered without the consent of all parties to the arbitration. Any controversy concerning whether a dispute is arbitrable shall be determined by the arbitrator(s) and not by the court. Judgment upon any award rendered by the arbitrator(s) may be entered by any state or federal court having jurisdiction thereof. This arbitration contract is made pursuant to a transaction in interstate commerce and its interpretation, application, enforcement, and proceedings thereunder shall be governed by the Federal Arbitration Act, 9 U.S.C. Sec. 1-16 (“FFA”). NEITHER YOU NOR WE SHALL BE ENTITLED TO JOIN OR CONSOLIDATE CLAIMS IN ARBITRATION BY OR AGAINST OTHER CONSUMERS OR ARBITRATE ANY CLAIM AS A REPRESENTATIVE OR MEMBER OF A CLASS OR IN A PRIVATE ATTORNEY GENERAL CAPACITY. The parties voluntarily and knowingly waive any right they have to a jury trial.
                                    </Text>
                                </Flex>
                                <Flex direction='column' gap='4'>
                                    <Text fontSize='36px' fontFamily='IBM Plex Sans' fontWeight='600' color='ED.primary'>
                                        CONTACTING US
                                    </Text>
                                    <Text fontSize='16px' fontFamily='IBM Plex Sans' fontWeight='400' color='ED.dark'>
                                        If You have questions about any offer, Partner, completion, Web Site or this Agreement, please <br/>
                                        email : <span className='pointer text-underline' onClick={() => setShowForm(true)}>info@educationdirectory.org.</span>
                                    </Text>
                                </Flex>
                            </>
                        }
                        
                    </Stack>
                </Box>
            </Stack>
        </>
    );
};

export default TermsAndCondition;