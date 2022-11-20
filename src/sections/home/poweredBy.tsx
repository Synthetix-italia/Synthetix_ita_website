import styled from 'styled-components';
import media from 'styled-media-query';
import { Arrow } from '../../svg';
import { ExternalLink, Section, SectionTitle, Subline } from '../../styles/common';
import { useRef, useState } from 'react';
import PoweredBySNXLogo from 'src/svg/PoweredBySNXLogo';
import PoweredByBlur from 'src/svg/PoweredByBlur';
import PoweredByGrid from 'src/svg/PoweredByGrid';
import PoweredByBackground from 'src/svg/PoweredByBackground';
import PoweredByBackgroundMobile from 'src/svg/PoweredByBackgroundMobile';
import Image from 'next/image';

type PoweredByCards = {
	name: string;
	description: string;
	link: string;
	logo: string;
};

const poweredByCards: PoweredByCards[] = [
	{
		name: 'Kwenta_ita',
		description:
			'Trading con una leva fino a 20x e una liquidità simulata per ottenere i migliori prezzi. Segui su Twitter!',
		link: 'https://twitter.com/Kwenta_ita',
		logo: '/kwenta.png',
	},
	{
		name: 'LyraFinance_ita',
		description: 'Il primo protocollo di opzioni completamente decentralizzato. Segui su Twitter!',
		link: 'https://twitter.com/LyraFinance_ita',
		logo: '/lyra.png',
	},
	{
		name: 'ThalesMarket_it',
		description:
			'Un protocollo Parimutuel Markets per il trading su price action, sport e altri eventi. Segui su Twitter!',
		link: 'https://twitter.com/ThalesMarket_it',
		logo: '/thales.png',
	},
];

type CustomSliderArrow = {
	onClick: () => void;
	disabled?: boolean;
};

const ArrowWrapper = styled.button`
	cursor: pointer;
	transition: 100ms ease-in-out;
	background-color: transparent;
	border: none;

	:active:enabled {
		transform: scale(0.9);
	}

	${media.greaterThan('900px' as any)`
		display: none;
	`}

	${media.lessThan('medium')`
		display: none;
	`}
`;

function NextArrow({ onClick }: CustomSliderArrow) {
	return (
		<ArrowWrapper onClick={onClick}>
			<Arrow />
		</ArrowWrapper>
	);
}

function PrevArrow({ onClick, disabled }: CustomSliderArrow) {
	return (
		<ArrowWrapper onClick={onClick} disabled={disabled}>
			<Arrow style={{ transform: 'rotate(180deg)' }} disabled={disabled} />
		</ArrowWrapper>
	);
}

const slideMargin = 16;

const PoweredBy = () => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [accumulatedOffset, setAccumulatedOffset] = useState(0);

	const handleScroll = (ltr: boolean) => {
		const ref = sliderRef.current!;
		const clientWidthWithMargin = ref.clientWidth + slideMargin;
		setAccumulatedOffset((state) => {
			const calculatedOffset = ltr ? clientWidthWithMargin + state : state - clientWidthWithMargin;
			/* If returning to the beginning or at the end: set initial value */
			if (calculatedOffset <= 0 || calculatedOffset >= ref.scrollWidth) {
				scroll(0);
				return 0;
			} else {
				scroll(calculatedOffset);
				return calculatedOffset;
			}
		});
	};

	const scroll = (offset: number) => {
		sliderRef.current
			? sliderRef.current.scroll({
					behavior: 'smooth',
					left: offset,
			  })
			: console.warn('SliderRef is undefined');
	};

	return (
		<PoweredByContainer customMaxWidth={true}>
			<StyledPoweredByBackground />
			<StyledPoweredBySNXLogo />
			<StyledPoweredByBlur />
			<StyledPoweredByGrid />
			<StyledBackgroundByBackgroundMobile />
			<ContentWrapper>
				<PoweredBySectionTitle>Ecosistema Synthetix ITALIA</PoweredBySectionTitle>
				<PoweredBySubline>
					Synthetix come base per Asset in blockchain completamente aperto permette a qualunque progetti di costruire su di esso. 
					Synthetix Italia quindi cerca di coprire ed informare il mertato italiano anche su quei Protocolli che fanno parte dell'ecosistema Synthetix. 
				</PoweredBySubline>
				<SliderWrapper>
					<PrevArrow
						onClick={() => handleScroll(false)}
						disabled={accumulatedOffset === 0}
						data-test-id="slider-arrow-prev"
					/>
					<Slider ref={sliderRef} dir="ltr" data-test-id="powered-by-slider">
						{poweredByCards.map((card) => {
							return (
								<Slide key={card.name} data-test-id="powered-by-slide">
									<Card href={card.link}>
										<CardImage src={card.logo} height="120px" width="244px" />
										<CardHeadline>{card.name}</CardHeadline>
										<p>{card.description}</p>
									</Card>
								</Slide>
							);
						})}
					</Slider>
					<NextArrow onClick={() => handleScroll(true)} data-test-id="slider-arrow-next" />
				</SliderWrapper>
			</ContentWrapper>
		</PoweredByContainer>
	);
};

const PoweredByContainer = styled(Section)`
	min-height: 1000px;
	position: relative;
	background-position: top center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.bgBlackHighlighted};
	padding: 10px 40px 30px;

	${media.lessThan('1920px' as any)`
		min-height: 800px;
	`}

	${media.lessThan('medium')`
		background-image: url('/home/powered-by/background-tablet.svg');
		background-color: transparent;
		padding: 20px 40px;
		min-height: 700px;
	`}
	
	${media.lessThan('small')`
		background-image: none;
	`}
`;

const ContentWrapper = styled.div`
	padding: 70px 40px 30px;
	position: absolute;
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: auto;

	${media.lessThan('medium')`
		padding: 20px 40px;`}
`;

const StyledPoweredByBackground = styled(PoweredByBackground)`
	display: none;
	position: absolute;
	top: 0;
	left: auto;
	right: auto;
	width: auto;
	height: 100%;

	${media.lessThan('large')`
		display: block;
	`}

	${media.lessThan('medium')`
		display: none;
	`}
`;

const StyledPoweredBySNXLogo = styled(PoweredBySNXLogo)`
	position: absolute;
	top: 0;
	left: auto;
	right: auto;
	width: 100%;
	height: 70%;

	${media.lessThan('large')`
		display:none
	`}
`;

const StyledPoweredByGrid = styled(PoweredByGrid)`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: auto;
	${media.lessThan('large')`
		display:none
	`}
`;

const StyledPoweredByBlur = styled(PoweredByBlur)`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: auto;
	${media.lessThan('large')`
		display:none
	`}
`;

const StyledBackgroundByBackgroundMobile = styled(PoweredByBackgroundMobile)`
	display: none;
	${media.lessThan('small')`
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 00%;
		height: auto;
`}
`;

const PoweredBySectionTitle = styled(SectionTitle)`
	width: 100%;
	text-align: center;
	margin-bottom: 22px;
`;

const PoweredBySubline = styled(Subline)`
	max-width: 900px;
	text-align: center;
	margin-bottom: 0px;

`;

const SliderWrapper = styled.div`
	margin-top: 105px;
	display: flex;
	align-self: center;
	align-items: center;
	justify-content: space-around;

	${media.lessThan('medium')`
		margin-top: 0px;
		padding-top: 135px;
 `}

	${media.lessThan('medium')`
	padding-top: 50px;
 `}
`;

const Slider = styled.div`
	overflow: hidden;
	display: flex;
	height: 290px;
	margin: 0 16px;
	width: 812px;

	${media.lessThan('900px' as any)`
		width: 538px;
		margin: 0 32px;
		`}

	${media.lessThan('medium')`
		overflow: scroll hidden;
		scroll-snap-type: x mandatory;
		margin: 0 32px;
		width: 380px;
	`}

	${media.lessThan('550px' as any)`
		width: 100vw;
`}

	::-webkit-scrollbar {
		height: 0px;
	}
`;

const Slide = styled.div`
	background-image: url('home/tile-background.png');
	@supports (backdrop-filter: blur(14px)) {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(14px);
		background-image: none;
	}
	margin-right: ${slideMargin}px;
	position: relative;
	min-width: 260px;
	height: 289px;
	scroll-snap-align: start;
	:last-of-type {
		margin-right: 0px;
	}
	${media.lessThan('medium')`
			scroll-snap-align: center;
			:first-of-type {
				margin-left: 20px;
			}
			:last-of-type {
				margin-right: 20px;
			}`}
`;

const Card = styled(ExternalLink)`
	/* Needs to be absolute and a high z index because of the backdrop polyfill, otherwise font is milkyish */
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	padding: 18px;

	p {
		${({ theme }) => theme.fonts.subline};
		text-align: center;
	}
`;

const CardImage = styled(Image)`
	width: 100%;
	height: 120px;
	margin-bottom: 16px;
`;

const CardHeadline = styled.h4`
	${({ theme }) => theme.fonts.smallHeadline};
`;

export default PoweredBy;
