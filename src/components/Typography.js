/**
@flow
*/
import * as React from 'react';
import styled, {type ReactComponentStyled} from 'styled-components';
import { Fonts } from 'theme';

type Props = {
	primitive?: string,
	size?: string,
	children: any
};

const StyledType: ReactComponentStyled<Props> = styled.span`
	font-family: ${Fonts.Heebo};
	font-size: ${({size}) => calcFontSize(size)}px;
`;

function calcFontSize (size: string) : number {
	switch (size) {
		case 'extraLarge':
			return 64;
		case 'large':
			return 40;
		case 'medium':
			return 24;
		default: 
			return 12;
	}
}

function Typography (props: Props) {

	const { primitive, children, size } = props;
	
	return <StyledType 
		as={primitive || 'span'} 
		size={size}>
			{children}
	</StyledType>;

}

export default Typography;