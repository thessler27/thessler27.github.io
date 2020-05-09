// @flow
import * as React from 'react';
import styled, {type ReactComponentStyled} from 'styled-components';
import TextLink from 'components/TextLink';
import { Colors } from 'theme/colors';

type HeaderItemType = {
	title: string,
	link: string
};

type HeaderProps = {
	items: Array<HeaderItemType>
};

const HeaderWrapper: ReactComponentStyled = styled.div`
	background-color: ${Colors.granite};
	display: flex;
	flex-direction: row;
	color: white;
	padding-top: 20px;
	padding-bottom: 20px;
	padding-left: 20px
`;

const HeaderItem: ReactComponentStyled = styled.div`
	padding-right: ${({lastChild}) => lastChild ? 0 : 12}px;
	paddind-left: ${({firstChild}) => firstChild ? 0 : 12}px;
`;

function Header (props: HeaderProps) {
	return <HeaderWrapper>{
		props.items.map(({title}, index) => (
			<HeaderItem 
				key={index.toString()}
				firstChild={index===0}
				lastChild={(index+1) === props.items.length}>
				<TextLink color={Colors.white}>
					{title}
				</TextLink>
			</HeaderItem>
		))
	}</HeaderWrapper>;
}

export default Header;