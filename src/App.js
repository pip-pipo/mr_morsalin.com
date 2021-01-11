import React from 'react'
import Nav from './Nav'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Services from './components/pages/Services'
import NotFound from './components/pages/NotFound'
import './App.css';
const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Services} />
          <Route component={NotFound} />

        </Switch>
      </Router>
    </div>
  )
}

export default App
