// @flow
import React from 'react';
import Typography from 'components/Typography';
import Header from 'components/Header';
import styled from 'styled-components';

const StyledContainer = styled.div`
	text-align: center;
`; 

const items = [
	{ title: 'Home', link: '/' },
	{ title: 'Home', link: '/' },
	{ title: 'Home', link: '/' },
	{ title: 'Home', link: '/' }
];

function App() {
  return (
    <StyledContainer>
    	<Header items={items} />
    	<Typography size="large">Website Coming Soon!</Typography>
    </StyledContainer>
  );
}

export default App;
