// @flow
import * as React from 'react';
import styled, {type ReactComponentStyled} from 'styled-components';
import Typography from 'components/Typography';
import { Colors } from 'theme/colors';
import { Github } from '@styled-icons/entypo-social/Github';

const HeaderWrapper: ReactComponentStyled = styled.div`
	background-color: ${Colors.granite};
	display: flex;
	color: white;
	padding: 20px;
	justify-content: space-between;
`;

const StyledIconLink = styled.a`
	&:hover {
		opacity: 0.5;
	}
`;

const GithubIcon = styled(Github)`
	color: ${Colors.white};
	height: 16px;
	width: 16px;
`;

function Header () {
	return <HeaderWrapper>
		<Typography size="small" primitive="h1">Some thoughts.</Typography>
		<StyledIconLink href="https://github.com/thessler27/thessler27.github.io" target="_blank">
			<GithubIcon/>
		</StyledIconLink>
	</HeaderWrapper>;
}

export default Header;