import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={(): ReactElement => <h2>home</h2>} />
      <Route path="/about/" component={(): ReactElement => <h2>about</h2>} />
      <Route path="/users/" component={(): ReactElement => <h2>users</h2>} />
    </Router>
  </>
);

App.propTypes = {
  what: PropTypes.string,
};

export default App;
