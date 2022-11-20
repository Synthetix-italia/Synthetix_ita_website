import styled from 'styled-components';
import media from 'styled-media-query';
import { FlexDivColCentered } from 'src/styles/common';
import { Header } from '..';
import Sidebar from '../Sidebar';
import BuildFooter from './BuildFooter';
import { PropsWithChildren } from 'react';
import { NavDocs } from 'src/typings/cms-types';

const OutWrapper = styled.div`
	width: 100%;
	background-color: #000; //TODO: refactor to body black background and remove this
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	position: relative;
	gap: var(--s1);
	max-width: ${({ theme }) => theme.maxContentWidthBuild};
	width: 100%;
	position: relative;
	margin: 0 auto;
`;

const MainContent = styled.div`
	flex-basis: 0;
	flex-grow: 999;
	min-inline-size: 50%;
	padding: 0 50px;
	overflow-wrap: anywhere;
	min-height: 100vh; //TODO: refactor to body black background and remove this

	${media.lessThan('medium')`
		padding: 0 25px;
	`}
`;
export interface OrderedDoc {
	cat: string;
	slug: { _type: string; current: string };
	title: string;
}

interface sIProps {
	lv: string;
}

const ScrollItem = styled.li<sIProps>`
	font-family: Inter;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 25px;
	list-style-type: none;
	${sIProps => {
		if (sIProps.lv === 'h2') return `margin-left: 10px;`;
		if (sIProps.lv === 'h3') return `margin-left: 20px;`;
		if (sIProps.lv === 'h4') return `margin-left: 30px;`;
	}}
`;

export type BuildPageLayoutProps<T> = {
	headings: {
		style: string;
		slug: string;
		text: string;
	}[];
	navDocs: NavDocs[];
	nextDoc?: T;
	prevDoc?: T;
	updatedAt: string;
};

export default function BuildPageLayout({
	children,
	headings,
	navDocs,
	nextDoc,
	prevDoc,
	updatedAt,
}: PropsWithChildren<BuildPageLayoutProps<OrderedDoc>>) {
	const subMenu = {
		label: 'build',
		navTitle: 'Build Documents',
		items: navDocs,
	};
	return (
		<FlexDivColCentered>
			<Header config={subMenu} />
			<OutWrapper>
				<ContentWrapper>
					<Sidebar navDocs={navDocs} subSlug="build" />
					<MainContent>
						{children}
						<BuildFooter
							nextDoc={nextDoc}
							prevDoc={prevDoc}
							updatedAt={updatedAt}
						/>
					</MainContent>
				</ContentWrapper>
			</OutWrapper>
		</FlexDivColCentered>
	);
}
