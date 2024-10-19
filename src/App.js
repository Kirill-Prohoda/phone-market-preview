import React from 'react';
import classes from './App.module.css';
import useRoutes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const routes = useRoutes()
  return ( 
    <BrowserRouter >
   {routes}
   </BrowserRouter>
  );
}

export default App;
