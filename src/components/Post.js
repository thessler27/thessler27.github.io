// @flow
import * as React from 'react';
import styled, {type ReactComponentStyled} from 'styled-components';
import Typography from 'components/Typography';

type PostProps = {
	date: string,
	title: string,
	content: string
};

const Wrapper: ReactComponentStyled = styled.div`
	padding-left: 20px;
	padding-right: 20px;
	padding-top: 16px;
`;

function Post (props: PostProps) {
	return <Wrapper>
		<Typography primitive="h2" size="medium">{props.date}</Typography>
		<Typography primitive="h3" size="small">{props.title}</Typography>
		<Typography primitive="p">{props.content}</Typography>
	</Wrapper>;
}

export default Post;