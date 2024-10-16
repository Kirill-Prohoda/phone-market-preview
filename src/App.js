import classes from './App.module.css';
import Catalog from './pages/catalog/Catalog';
import Firms from './pages/firms/Firms';
import Header from './pages/header/Header';




function App() {
  return (
    <div>
      <Header/>
      <div className={classes.content}> 
      <Catalog/>
      <Firms/>
      </div>
    </div>
  );
}

export default App;
