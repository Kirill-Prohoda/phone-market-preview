import classes from './App.module.css';
import Catalog from './pages/catalog/Catalog';
import Header from './pages/header/Header';


function App() {
  return (
    <div>
      <Header/>
      <div className={classes.content}> 
      <Catalog/>
      </div>
    </div>
  );
}

export default App;
