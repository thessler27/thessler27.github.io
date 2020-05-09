// @flow
import React from 'react';
import Header from 'components/Header';
import Post from 'components/Post';
import styled from 'styled-components';

const RootContainer = styled.div`
	overflow-x: hidden;
`; 

function App() {
  return (
    <RootContainer>
    	<Header/>
    	<Post 
    		date="10.12.2020" 
    		title="Hello!" 
    		content="Yo"
    	/>
    </RootContainer>
  );
}

export default App;
