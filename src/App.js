import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import TheOar from './components/TheOar'
import Crew from './components/Crew'
import Navigation from './components/Navigation'


class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
          <div className="wrapper">
            <div className='App'>
              <Route path='/' component={TheOar} exact />
              <Route path='/crew' component={Crew}/>
            </div>
          </div>
          
          
        </BrowserRouter>
      
      
    );
  }
}

export default App;
