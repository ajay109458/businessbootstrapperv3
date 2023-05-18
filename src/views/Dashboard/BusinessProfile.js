/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// Chakra imports
import {
	Box,
	Button,
	CircularProgress,
	CircularProgressLabel,
	Flex,
	Grid,
	Icon,
	Progress,
	SimpleGrid,
	Spacer,
	Stack,
	Stat,
	StatHelpText,
	StatLabel,
	StatNumber,
	Table,
	Tbody,
	Text,
	Th,
	Thead,
	Tr
} from '@chakra-ui/react';
// Styles for the circular progressbar
import medusa from 'assets/img/cardimgfree.png';
// Custom components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import BarChart from 'components/Charts/BarChart';
import LineChart from 'components/Charts/LineChart';
import IconBox from 'components/Icons/IconBox';
// Icons
import { CartIcon, DocumentIcon, GlobeIcon, RocketIcon, StatsIcon, WalletIcon } from 'components/Icons/Icons.js';
import DashboardTableRow from 'components/Tables/DashboardTableRow';
import TimelineRow from 'components/Tables/TimelineRow';
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiHappy } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { IoCheckmarkDoneCircleSharp, IoEllipsisHorizontal } from 'react-icons/io5';
// Data
import {
	barChartDataDashboard,
	barChartOptionsDashboard,
	lineChartDataDashboard,
	lineChartOptionsDashboard
} from 'variables/charts';
import { dashboardTableData, timelineData } from 'variables/general';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class BusinessProfile extends React.Component {

	constructor(props){
		super(props);
		this.state = {
		  businessData: {},
		  businessId: cookies.get('businessId'),
		  typesMap: {
			  "1": "URL Shortener",
			  "2": "ECommerce",
			  "3": "Messenger",
			  "4": "Social Media",
			  "5": "Streaming",
			  "6": "Cloud File System",
			  "7": "Wallet",
			  "8": "Payment Gateway",
			  "9": "Code Sharing",
			  "10": "VoIP Calling",
			  "11": "Food Ordering",
			  "12": "Appointment Booking",
			  "13": "Hotel Booking",
			  "14": "Git Versioning Control"
		  },
		}
	}

	componentDidMount = () => {
		console.log(this.state.businessId);
		this.fetchProfileInfo();
	}

	fetchProfileInfo = () => {

		fetch(
			'http://swagger.ajayyadavofficial.com/api/business/' + this.state.businessId,
			{
				method: 'GET',
				headers: { 'content-type': 'application/json' },
			}
		)
			.then(response => response.json())
			.then(data => this.setState({ businessData: data }));
	  } 

	  onClickUserPortal = () => {
		window.open(this.state.businessData.userPortal, "_blank") //to open new page
	  }
	
	  onClickAdminPortal = () => {
		window.open(this.state.businessData.adminURL, "_blank") //to open new page
	  }
	

	render() {
		const businessData = this.state.businessData;
		const businessType = this.state.typesMap[businessData.type];
		const businessEmail = "Support@" + businessData.name + ".com"
		return (
			<Flex flexDirection='column' pt={{ base: '120px', md: '75px' }}>
				<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', '2xl': '2fr 1.2fr 1.5fr' }} my='26px' gap='18px'>
					{/* Welcome Card */}
					<Card
						p='0px'
						gridArea={{ md: '1 / 1 / 2 / 3', '2xl': 'auto' }}
						bgImage={medusa}
						bgSize='cover'
						bgPosition='50%'>
						<CardBody w='100%' h='100%'>
							<Flex flexDirection={{ sm: 'column', lg: 'row' }} w='100%' h='100%'>
								<Flex flexDirection='column' h='100%' p='22px' minW='60%' lineHeight='1.6'>
									<Text fontSize='sm' color='gray.400' fontWeight='bold'>
										Welcome,
									</Text>
									<Text fontSize='28px' color='#fff' fontWeight='bold' mb='18px'>
										Ajay Yadav
									</Text>
									
								</Flex>
							</Flex>
						</CardBody>
					</Card>
					
					{/* Referral Tracking */}
					<Card gridArea={{ md: '2 / 1 / 3 / 2', '2xl': 'auto' }}>
						<Flex direction='column'>
							<Flex justify='space-between' align='center' mb='40px'>
								<Text color='#fff' fontSize='lg' fontWeight='bold'>
									Business Details
								</Text>
								<Button borderRadius='12px' w='38px' h='38px' bg='#22234B' _hover='none' _active='none'>
									<Icon as={IoEllipsisHorizontal} color='#7551FF' />
								</Button>
							</Flex>
							<Flex direction={{ sm: 'column', md: 'row' }}>
								<Flex direction='column' me={{ md: '6px', lg: '52px' }} mb={{ sm: '16px', md: '0px' }}>
									<Flex
										direction='column'
										p='22px'
										pe={{ sm: '22e', md: '8px', lg: '22px' }}
										minW={{ sm: '220px', md: '140px', lg: '220px' }}
										bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
										borderRadius='20px'
										mb='20px'>
										<Text color='gray.400' fontSize='sm' mb='4px'>
											Organization
										</Text>
										<Text color='#fff' fontSize='lg' fontWeight='bold'>
											{businessData.name} - Hy Hotel
										</Text>
									</Flex>
									<Flex
										direction='column'
										p='22px'
										pe={{ sm: '22px', md: '8px', lg: '22px' }}
										minW={{ sm: '170px', md: '140px', lg: '170px' }}
										bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
										borderRadius='20px'>
										<Text color='gray.400' fontSize='sm' mb='4px'>
											Business Type
										</Text>
										<Text color='#fff' fontSize='lg' fontWeight='bold'>
											{businessType} - Booking Platform
										</Text>
									</Flex>
								</Flex>
								<Box mx={{ sm: 'auto', md: '0px' }}>
									<Flex
										direction='column'
										p='22px'
										pe={{ sm: '22e', md: '8px', lg: '22px' }}
										minW={{ sm: '220px', md: '140px', lg: '220px' }}
										bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
										borderRadius='20px'
										mb='20px'>
										<Text color='gray.400' fontSize='sm' mb='4px'>
											Email address
										</Text>
										<Text color='#fff' fontSize='lg' fontWeight='bold'>
											{businessEmail}
										</Text>
									</Flex>
								</Box>
							</Flex>
						</Flex>
					</Card>
					{/* Satisfaction Rate */}
					<Card gridArea={{ md: '2 / 2 / 3 / 3', '2xl': 'auto' }}>
						<CardHeader mb='24px'>
							<Flex direction='column'>
								<Text color='#fff' fontSize='lg' fontWeight='bold' mb='4px'>
									Satisfaction Rate
								</Text>
								<Text color='gray.400' fontSize='sm'>
									From all projects
								</Text>
							</Flex>
						</CardHeader>
						<Flex direction='column' justify='center' align='center'>
							<Box zIndex='-1'>
								<CircularProgress
									size={200}
									value={80}
									thickness={6}
									color='#582CFF'
									variant='vision'
									rounded>
									<CircularProgressLabel>
										<IconBox mb='20px' mx='auto' bg='brand.200' borderRadius='50%' w='48px' h='48px'>
											<Icon as={BiHappy} color='#fff' w='30px' h='30px' />
										</IconBox>
									</CircularProgressLabel>
								</CircularProgress>
							</Box>
							<Stack
								direction='row'
								spacing={{ sm: '42px', md: '68px' }}
								justify='center'
								maxW={{ sm: '270px', md: '300px', lg: '100%' }}
								mx={{ sm: 'auto', md: '0px' }}
								p='18px 22px'
								bg='linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgba(10, 14, 35) 91.2%)'
								borderRadius='20px'
								position='absolute'
								bottom='5%'>
								<Text fontSize='xs' color='gray.400'>
									0%
								</Text>
								<Flex direction='column' align='center' minW='80px'>
									<Text color='#fff' fontSize='28px' fontWeight='bold'>
										95%
									</Text>
									<Text fontSize='xs' color='gray.400'>
										Based on likes
									</Text>
								</Flex>
								<Text fontSize='xs' color='gray.400'>
									100%
								</Text>
							</Stack>
						</Flex>
					</Card>
				</Grid>
				
				<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '2fr' }} gap='24px'>
					{/* Projects */}
					<Card p='16px' overflowX={{ sm: 'scroll', xl: 'hidden' }}>
						<CardHeader p='12px 0px 28px 0px'>
							<Flex direction='column'>
								<Text fontSize='lg' color='#fff' fontWeight='bold' pb='8px'>
									Portals
								</Text>
								<Flex align='center'>
									<Icon as={IoCheckmarkDoneCircleSharp} color='teal.300' w={4} h={4} pe='3px' />
									<Text fontSize='sm' color='gray.400' fontWeight='normal'>
										<Text fontWeight='bold' as='span'>
											30 mins 
										</Text>{' '}
										last synced.
									</Text>
								</Flex>
							</Flex>
						</CardHeader>
						<Table variant='simple' color='#fff'>
							<Thead>
								<Tr my='.8rem' ps='0px'>
									<Th
										ps='0px'
										color='gray.400'
										fontFamily='Plus Jakarta Display'
										borderBottomColor='#56577A'>
										Portal
									</Th>
									<Th color='gray.400' fontFamily='Plus Jakarta Display' borderBottomColor='#56577A'>
										URL
									</Th>
									
								</Tr>
							</Thead>
							<Tbody>
								{dashboardTableData.map((row, index, arr) => {
									return (
										<DashboardTableRow
											name={row.name}
											logo={row.logo}
											budget={row.url}
											lastItem={index === arr.length - 1 ? true : false}
										/>
									);
								})}
							</Tbody>
						</Table>
					</Card>
					
				</Grid>
			</Flex>
		);
	}

}

export default BusinessProfile;
