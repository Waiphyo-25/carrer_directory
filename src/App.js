import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import AddCarrier from './pages/AddCarrier/AddCarrier';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route exact path="/add/carrier" component={AddCarrier}/>
        </Switch>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
