import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

type AppProps = {
  what: string;
};

const App: React.FC<AppProps> = ({ what }): ReactElement => <h1>hello {what}</h1>;

App.propTypes = {
  what: PropTypes.string,
};

export default App;
