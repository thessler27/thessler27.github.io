// @flow
import styled, {type ReactComponentStyled} from 'styled-components';
import { Colors, Fonts } from 'theme';

type Props = {
	color?: string,
	size?: 'small' | 'large' //defaults to small
};

const TextLink: ReactComponentStyled<Props> = styled.a`
	font-family: ${Fonts.Heebo};
	font-size: ${({size}) => size === 'large' ? 20 : 16}px;
	color: ${({color}) => color || Colors.granite};
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;

export default TextLink;