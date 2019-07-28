import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

type AppProps = {
  what: string;
};

const App: React.FC<AppProps> = ({ what }): ReactElement => <Title>hello {what}</Title>;

App.propTypes = {
  what: PropTypes.string,
};

export default App;
