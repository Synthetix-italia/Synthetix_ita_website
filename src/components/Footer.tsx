import { Fragment } from 'react';
import { Logo, Socials } from './';
import { Box, Divider, Flex, Link, Show, Text } from '@chakra-ui/react';
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const footerMenu = [
	[
		{ title: 'Twitter' },
		{
			title: 'Synthetix_ita',
			link: 'https://twitter.com/Synthetix_ita',
		},
		{
			title: 'Kwenta_ita',
			link: 'https://twitter.com/Kwenta_ita',
		},
		{
			title: 'ThalesMarket_it',
			link: 'https://twitter.com/ThalesMarket_it',
		},
		{
			title: 'LyraFinance_ita',
			link: 'https://twitter.com/LyraFinance_ita',
		},

	],
	[
		{ title: 'TOOLs' },
		{
			title: 'Staking',
			link: 'https://staking.synthetix.io/',
		},
		{
			title: 'Governance',
			link: 'https://governance.synthetix.io/',
		},
		{
			title: 'SIP / SCCP GitPR',
			link: 'https://pr.synthetix.io/',
		},
		{
			title: 'SIP / SCCP list',
			link: 'https://sips.synthetix.io/all-sip/',
		},
		{
			title: 'General Tools',
			link: 'https://tools.synthetix.io/all',
		},

	],
	[
		{ title: 'Community' },
		{ title: 'Italian Discord', link: 'https://discord.com/invite/3GJqVVYKrd' },
		{ title: 'Italian Telegram', link: 'https://t.me/synthetix_ita' },
		{ title: 'International Discord', link: 'https://discord.com/invite/AEdUHzt' },
	],
	[
		{ title: 'STATS' },
		{
			title: 'Dune',
			link: 'https://dune.com/drethereum/Synthetix-Futures:-Overview',
		},
		{
			title: 'Grafana',
			link: 'https://grafana.synthetix.io/d/pjPJZ6x7z/synthetix-system-stats?orgId=1&kiosk=full',
		},
	],
];

export default function Footer() {
	return (
		<>
			<Show above="md">
				<Flex w="100%" flexDir="column" maxW="5xl" as="footer">
					<Flex w="100%" justifyContent="space-between">
						<Flex gap="20" m="5" w="100%">
							{footerMenu.map((col, i) => {
								return (
									<Flex flexDir="column" gap="2" key={'col' + i}>
										{col.map((menu, index) => (
											<Flex flexDir="column" key={'menu' + index + i}>
												{!index && (
													<Text fontWeight="bold" textTransform="uppercase">
														{menu.title}
													</Text>
												)}
												{menu.link && (
													<Link
														href={menu.link}
														textDecoration="none !important"
													>
														<Text
															color="gray.500"
															_hover={{ color: 'white' }}
															fontFamily="heading"
															fontSize="md"
															fontWeight="bold"
														>
															{menu.title}
														</Text>
													</Link>
												)}
											</Flex>
										))}
									</Flex>
								);
							})}
						</Flex>
						<Box m="5">
							<Logo small={true} />
						</Box>
					</Flex>
					<Box my="10">
						<Socials isFooter />
					</Box>
				</Flex>
			</Show>
			<Show below="md">
				<Flex
					as="footer"
					w="100%"
					justifyContent="center"
					alignItems="center"
					flexDir="column"
					pt="5"
				>
					{footerMenu.map((col, i) => {
						return (
							<Fragment key={'col' + i}>
								<Accordion w="100%" allowToggle>
									<AccordionItem>
										<AccordionButton>
											<Text
												fontWeight="bold"
												textTransform="uppercase"
												mr="auto"
											>
												{col[0].title}
											</Text>
											<AccordionIcon>
												<ChevronRightIcon />
											</AccordionIcon>
										</AccordionButton>
										<AccordionPanel>
											<Flex flexDir="column" gap="2">
												{col.map((menu, index) => (
													<Fragment key={(menu.link || 'menu-link') + index}>
														{!!index && (
															<Link
																href={menu.link}
																textDecoration="none !important"
															>
																<Text
																	fontWeight="bold"
																	color="gray.500"
																	_hover={{ color: 'white' }}
																	fontFamily="heading"
																	fontSize="md"
																>
																	{menu.title}
																</Text>
															</Link>
														)}
													</Fragment>
												))}
											</Flex>
										</AccordionPanel>
									</AccordionItem>
								</Accordion>
								<Divider color="gray.900" />
							</Fragment>
						);
					})}

					<Box m="5">
						<Logo small={true} />
					</Box>
					<Box my="10">
						<Socials isFooter />
					</Box>
				</Flex>
			</Show>
		</>
	);
}
