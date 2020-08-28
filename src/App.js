import React from 'react';
import './App.css';
import {renderRoutes} from 'react-router-config';

function App({route}) {
  return (
    <div className="App h-screen flex justify-center items-center bg-gray-200">
      {renderRoutes(route.routes)}
    </div>
  );
}

export default App;
