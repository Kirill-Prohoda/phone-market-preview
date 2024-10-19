import React from 'react';
import classes from './HomePage.module.css';
import Catalog from '../components/catalog/Catalog';
import Feedbeck from '../components/feedback/Feedback';
import Firms from '../components/firms/Firms';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';


 const HomePage = () =>{


    return(
        <div>
<Header/>
      <div className={classes.content}> 
        <Catalog/>
        <Firms/>
        <Feedbeck/>
      </div>
      <Footer/>



        </div>


    )
}

export default HomePage;