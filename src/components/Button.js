// @flow
import * as React from 'react';
import styled, {type ReactComponentStyled} from 'styled-components';
import { Colors, Fonts } from 'theme';

type Props = {
	size?: 'small' | 'large' //defaults to small
};

const Button: ReactComponentStyled<Props> = styled.button`
	background-color: ${Colors.granite};
	color: ${Colors.white};
	font-family: ${Fonts.Heebo};
	font-size: ${({size}) => size === 'large' ? 20 : 16}px;
	width: ${({size}) => size === 'large' ? 200 : 100}px;
	height: ${({size}) => size === 'large' ? 60 : 44}px;
	border-radius: ${({size}) => size === 'large' ? 30 : 22}px;
	cursor: pointer;
	border: none;
	&:hover {
		opacity: 0.5;
	}
`;

export default Button;