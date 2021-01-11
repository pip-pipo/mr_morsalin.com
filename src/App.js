import React from 'react'
import Nav from './Nav'
import {HashRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home'
const App = () => {
  return (
    <div>
      <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      </Router>
    </div>
  )
}

export default App
