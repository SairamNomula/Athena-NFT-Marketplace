import React from 'react'
import './App.css';
import Navbar from './components/pages/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/HomePage/Home'
import Community from './components/pages/Community/Community'
import Auctions from './components/pages/Auctions/Auctions'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Community' component={Community}/>
        <Route path='/Auctions' component={Auctions}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
