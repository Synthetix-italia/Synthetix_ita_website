import { Header } from '..';
import Sidebar, { SidebarProps } from '../Sidebar';
import BuildFooter from '../Build/BuildFooter';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface TagsPageLayoutProps {
	navDocs: SidebarProps['navDocs'];
	updatedAt: string;
	title: string;
	subTitle: string;
}

export default function TagsPageLayout({
	navDocs,
	updatedAt,
	title,
	subTitle,
}: TagsPageLayoutProps) {
	const subMenu = {
		label: 'guides',
		navTitle: 'User Guides',
		items: navDocs,
	};

	return (
		<Flex direction="column" alignItems="center" bg="navy.900">
			<Header config={subMenu} />
			<Flex position="relative" w="100%">
				<Sidebar navDocs={navDocs} subSlug="guides" />
				<Flex direction="column" w="full" maxW="800px" m="12" borderWidth="1px">
					<Heading as="h1" size="xl" mb="2">
						{title}
					</Heading>
					<Heading as="h2" size="lg" mb="2">
						{subTitle}
					</Heading>
					<BuildFooter updatedAt={updatedAt} />
				</Flex>
			</Flex>
		</Flex>
	);
}
