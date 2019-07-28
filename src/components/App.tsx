import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Segoe UI', 'Helvetica Neue', sansserif;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: palevioletred;
`;

type AppProps = {
  what: string;
};

const App: React.FC<AppProps> = ({ what }): ReactElement => (
  <>
    <GlobalStyle />
    <Title>hello {what}</Title>
  </>
);

App.propTypes = {
  what: PropTypes.string,
};

export default App;
