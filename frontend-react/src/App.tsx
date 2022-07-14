import React from 'react';
import './App.css';
import {useRoutes} from 'react-router-dom'
import routes from './router';
const App:React.FC=()=> {
  const element=useRoutes(routes)
  return (
    <>
      {element} 
    </>
  );
}

export default App;
