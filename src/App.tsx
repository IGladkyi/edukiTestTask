import React from 'react';
import {LogBox} from 'react-native';
import Navigation from './navigation';

LogBox.ignoreAllLogs();

const App = () => {
  return <Navigation />;
};

export default App;
