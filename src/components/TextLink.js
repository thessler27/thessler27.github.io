// @flow
import * as React from 'react';
import styled, {type ReactComponentStyled} from 'styled-components';
import { Colors, Fonts } from 'theme';

type Props = {
	size?: 'small' | 'large' //defaults to small
};

const TextLink: ReactComponentStyled<Props> = styled.a`
	font-family: ${Fonts.Heebo};
	font-size: ${({size}) => size === 'large' ? 20 : 16}px;
	color: ${Colors.granite};
`;

export default TextLink;