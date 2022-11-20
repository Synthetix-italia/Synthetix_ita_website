import { Box, BoxProps, keyframes } from '@chakra-ui/react';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { theme } from './theme';
import { motion } from 'framer-motion';

interface SectionProps extends BoxProps {
	customMaxWidth?: boolean;
	children: ReactNode;
}
const showKeyframes = keyframes`to{opacity: 1;}`;
const showAnimation = `${showKeyframes} 500ms ease-out forwards`;
export const Section = ({
	customMaxWidth,
	children,
	...rest
}: SectionProps) => {
	return (
		<Box
			as={motion.section}
			animation={showAnimation}
			w="100%"
			opacity="0"
			position="relative"
			overflow="hidden"
			maxWidth={customMaxWidth ? '' : '1920px'}
			{...rest}
		>
			{children}
		</Box>
	);
};

export const ExternalLink = styled.a.attrs({
	target: '_blank',
	rel: 'noopener noreferrer',
})``;

export const PageTitle = styled.h1`
	${theme.fonts.pageHeadline};
`;

export const SectionTitle = styled.h2`
	${theme.fonts.sectionTitle};
`;

export const Subline = styled.article`
	${theme.fonts.subline};
	text-align: inherit;
`;

export const Line = styled.div<{ showOnMobile?: boolean }>`
	width: 100vw;
	height: 1px;
	background: rgba(14, 4, 53, 0.29);
	background-image: linear-gradient(
			0deg,
			rgba(14, 4, 53, 0.29),
			rgba(14, 4, 53, 0.29)
		),
		linear-gradient(88.63deg, #00d1ff -14.83%, #ed1eff 108.22%);
	opacity: 0.39;

	${({ showOnMobile }) => {
		if (!showOnMobile) {
			return media.lessThan('medium')`
			display: none;
		`;
		}
	}}
`;

export const FlexDiv = styled.div`
	display: flex;
`;

export const FlexDivCentered = styled(FlexDiv)`
	align-items: center;
`;

export const FlexDivCol = styled(FlexDiv)`
	flex-direction: column;
`;

export const FlexDivColCentered = styled(FlexDivCol)`
	align-items: center;
`;

export const FlexDivRow = styled(FlexDiv)`
	justify-content: space-between;
`;

export const FlexDivRowCentered = styled(FlexDivRow)`
	align-items: center;
`;

export const resetButtonCSS = css`
	border: none;
	background: none;
	outline: none;
	cursor: pointer;
	padding: 0;
`;
