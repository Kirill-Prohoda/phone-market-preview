import React from 'react';
import useRoutes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { Document, Page, View, Text } from '@react-pdf/renderer';


function App() {
  const routes = useRoutes()
  return ( 
    <BrowserRouter>
   {routes}
   </BrowserRouter>
  );
}

export default App;
