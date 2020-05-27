import React from 'react';
import {Routes} from './navigation/Routes';
import {Header} from './components';

const App = () => {
  return (
    <>
      <Header text={'Son depremler'} />
      <Routes />
    </>
  );
};

export default App;
