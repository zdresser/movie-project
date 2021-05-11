import React from 'react';
import styled from "styled-components";

const App = (props) => {
  return (
    <AppContainer>
      {props.children}
    </AppContainer>
  )
}

export default App;

const AppContainer = styled.div`
  padding-top: 90px;
`;
