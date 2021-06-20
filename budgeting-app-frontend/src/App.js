//DEPENDENCIES
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { apiURL } from "./util/apiURL";


//PAGES
import Home from "./Pages/Home";


//COMPONENTS
import NavBar from './Components/NavBar';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />

          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    )
  }
}

export default App
