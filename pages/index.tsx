import Head from 'next/head';
import { GetServerSideProps } from 'next';
import MainSection from '../src/sections/home/main';
import SynthSection from 'src/sections/home/synths';
import Ecosystem from 'src/sections/home/ecosystem';
import { PageLayout } from '../src/components';
import { Line } from 'src/styles/common';
import PoweredBy from 'src/sections/home/poweredBy';
import axios from 'axios';
import { Box } from '@chakra-ui/react';

export interface ApiStatsProps {
	totalStakedValue?: number;
}

const Home = ({ totalStakedValue }: ApiStatsProps) => {
	return (
		<>
			<Head>
				<title>Synthetix Italia 🇮🇹</title>
			</Head>
			<PageLayout>
				<Box
					position="absolute"
					top="0"
					left="0"
					w="100%"
					height="100vh"
					bg="linear-gradient(180deg, #08021e 0%, #120446 146.21%)"
					pointerEvents="none"
				/>
				<MainSection />
				<Line showOnMobile />
				<SynthSection />
				<Line showOnMobile />
				<Ecosystem />
				<Line showOnMobile />
				<PoweredBy />
				<Line showOnMobile />
			</PageLayout>
		</>
	);
};



export default Home;
