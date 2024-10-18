import classes from './App.module.css';
import Catalog from './pages/catalog/Catalog';
import Feedbeck from './pages/feedback/Feedback';
import Firms from './pages/firms/Firms';
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header';

function App() {
  return (
    <div>
      <Header/>
      <div className={classes.content}> 
        <Catalog/>
        <Firms/>
        <Feedbeck/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
