// @flow
import React from 'react';
import Typography from 'components/Typography';
import styled from 'styled-components';

const StyledContainer = styled.div`
	text-align: center;
`; 

function App() {
  return (
    <StyledContainer>
      <Typography size="large">Website Coming Soon!</Typography>
    </StyledContainer>
  );
}

export default App;
