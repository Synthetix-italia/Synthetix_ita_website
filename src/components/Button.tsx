import { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type ButtonProps = {
	readonly link: string;
	readonly className?: string;
	readonly external?: boolean;
	children: ReactNode;
} & StyledButton;

type StyledButton = {
	readonly buttonType?: 'primary' | 'secondary';
	readonly size?: 'large' | 'medium';
};

const ButtonComponent: FunctionComponent<ButtonProps> = ({
	link,
	className,
	children,
	buttonType = 'primary',
	external = true,
	size,
}) => (
	<Link href={link} passHref={true}>
		<A
			className={className}
			target={external ? '_blank' : ''}
			rel="noopener noreferrer"
		>
			<Button buttonType={buttonType} size={size}>
				{children}
			</Button>
		</A>
	</Link>
);

const A = styled.a`
	display: inline-block;
`;

const Button = styled.button<StyledButton>`
	text-decoration: uppercase;

	box-shadow: 0px 0px 10px rgba(0, 209, 255, 0.9);
	box-sizing: border-box;
	border-radius: 4px;

	background: ${props =>
		props.buttonType === 'primary' ? props.theme.colors.cyan : '#0C2344'};
	border: ${props =>
		props.buttonType === 'primary'
			? 'none'
			: `1px solid ${props.theme.colors.cyan}`};
	color: ${props =>
		props.buttonType === 'primary'
			? props.theme.colors.bgBlack
			: props.theme.colors.cyan};

	outline: none;
	cursor: pointer;
	${({ size, theme }) =>
		size === 'medium' ? theme.fonts.button : theme.fonts.largeButton};
	width: 100%;
	height: 100%;

	transition: opacity 0.2s ease-out, color 0.2s ease-out,
		background 0.2s ease-out;

	&:hover {
		background: ${props =>
			props.buttonType === 'primary' ? '#58E1FF' : '#173764'};
	}

	&:disabled {
		opacity: 0.2;
		background: #00d1ff !important;
	}
`;

export default ButtonComponent;
