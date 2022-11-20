import styled from 'styled-components';
import { Button } from '../../components';
import media from 'styled-media-query';
import Accordion, {
	AccordionItemsType,
} from 'src/components/Accordion/Accordion';
import { useState } from 'react';
import { FlexDiv, Section, SectionTitle } from 'src/styles/common';

const SynthSection = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const graphics = [
		<SynthGraphicAbsolute src="/illustration.svg" key="illustration-synths" />,
		<SynthGraphic src="/earn.svg" key="earnSVG" />,
		<SynthGraphic src="/trade-synths-eth-btc.svg" key="synthsSVG" />,
		<SynthGraphic src="/build-circle.svg" key="circleSVG" />,
		<SynthGraphic src="/graph.svg"  key="graphSVG" />,
		<SynthGraphic src="/graph.svg"  key="graphSVG" />,
		<SynthGraphic src="/graph.svg"  key="graphSVG" />,

	];

	return (
		<SynthContainer  id="futures">
			<Left>
				<SectionTitle>Perchè Amiamo Synthetix?</SectionTitle>
				<Accordion
					items={accordionItems}
					activeIndex={activeIndex}
					onAccordionItemChange={setActiveIndex}
				/>
			</Left>
			{graphics[activeIndex]}
		</SynthContainer>
	);
};

const SynthContainer = styled(Section)`
	min-height: 700px;
	display: flex;
	align-items: center;
	padding: 0 0 0 153px;

	${media.lessThan('medium')`
		flex-direction: column-reverse;
		justify-content: flex-end;
		align-items: flex-start;
		min-height: 1000px;
		padding: 0 40px;
	`}

	${media.lessThan('small')`
		min-height: 1050px;
	`}

	${media.lessThan('320px' as any)`
		min-height: 1120px;
	`}
`;

const Left = styled.div`
	max-width: 480px;
	height: 364px;
	margin-right: auto;
`;

const SynthGraphicAbsolute = styled.img`
	height: 444px;
	position: absolute;
	right: 0;
	pointer-events: none;
	${props => props.theme.animations.show};
	animation-delay: 100ms;
	opacity: 0;

	${media.lessThan('1200px' as any)`
		left: 480px;
	`}

	${media.lessThan('medium')`
		position: static;
		margin-bottom: 16px;
	`}
`;

const SynthGraphic = styled.img`
	height: 500px;
	pointer-events: none;
	${props => props.theme.animations.show};
	animation-delay: 100ms;
	opacity: 0;
	margin-right: 100px;

	${media.lessThan('large')`
		margin-right: 0;
		height: 400px;
	`}

	${media.lessThan('950px' as any)`
		height: 300px;
	`}

	${media.lessThan('medium')`
		width: 100%;
		height: 444px;
		margin-bottom: 16px;
		transform: none;
		`}
`;

const BuildButton = styled(Button)<{ margin?: string }>`
	margin: ${({ margin }) => (margin ? margin : '29px 14px 0px 0px')};
	width: 147px;
	height: 56px;

	${media.lessThan('medium')`
		width: 100%;
		height: 40px;
		max-width: 224px;
	`};
`;

const FlexDivRowResponsive = styled(FlexDiv)`
	${media.lessThan('medium')`
		width: 100%;
	`};
`;

const accordionItems: AccordionItemsType[] = [
	{
		title: 'Synthetix Assets',
		descriptions: [
			<div key="synthetix-assets-description-one">
				Simulare prezzi di cripto, valute fiat, azioni, materie prime e molto altro ancora con uno slippage pari a zero.
			</div>,
			<div key="synthetix-assets-description-three">
				Gli asset sintetici o Synth, sono votati dalla DAO e possono esseere: valute fiat, cripto,
				azioni, materie prime e qualsiasi altra cosa abbia un prezzo.
			</div>,
		],
	},
	{
		title: 'Stake & Earn',
		descriptions: [
			<div key="stake-earn">
				La partecipazione allo staking di SNX fornisce garanzie per il pool di debiti e fa guadagnare ricompense settimanali che sono una combinazione di commissioni di protocollo e di incentivi
				derivanti dall'inflazionistica. <a href="https://staking.synthetix.io/" target="_blank"> <br></br> 👉 STAKE ORA 👈</a> 
			</div>,
		],
	},
	{
		title: 'Trade Synth',
		descriptions: [
			<div key="trade-synth">
				Negoziare qualsiasi Synths con uno slippage basso o nullo e una liquidità profonda. Disponibile nei mercati spot e futures.    
				 <a href="https://kwenta.io/" target="_blank"> <br></br> 👉 KWENTA 👈</a>
			</div>,
		],

	},
	{
		title: 'BuiDl',
		descriptions: [
			<div key="build-synths">
				Con una migliore componibilità, chiunque può sfruttare il protocollo
				ed avviare il proprio protocollo e community attraverso Synthetix. <a href="https://docs.synthetix.io/" target="_blank"> <br></br> 👉 SCOPRI DI PIU 👈</a>
				</div>,
		],
	},
		{
		title: 'PERPETUAL FUTURES: Esecuzione del miglior prezzo',
		descriptions: [
			<div key="Best Price Execution">
				Sfruttando il pool di debito di Synthetix e l'innovativo quadro di liquidità, i nostri trader hanno
				l'esecuzione dei prezzi tra le migliori in circolazione, con uno slippage minimo/nullo.
			</div>,
		],
	},
	{
		title: 'PERPETUAL FUTURES: Minimo tempo di inattività e rischio di liquidazione',
		descriptions: [
			<div key="Lowest Downtime & Liquidation Risk">
				Dite addio ai tempi morti durante i periodi di alta volatilità. 
				Come ulteriore vantaggio, i nostri contratti futures eliminano il rischio di liquidazioni a cascata dovute a ribassi forzati.
			</div>,
		],
	},
	{
		title: 'PERPETUAL FUTURES: Senza permessi e componibile',
		descriptions: [
			<div key="Permissionless & Composable">
				Ottenete tutti i vantaggi della DeFi con un'esperienza di trading sui futures completamente on-chain e senza permessi.
				Esperienza di trading PERMISSIONLESS. 
				Volete costruire con contratti futures perpetui a leva?  <a href="https://docs.synthetix.io/" target="_blank"> <br></br> 👉 SCOPRI DI PIU 👈</a>
			</div>,
		],
	},
];

export default SynthSection;
