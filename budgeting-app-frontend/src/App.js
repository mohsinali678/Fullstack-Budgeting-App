//DEPENDENCIES
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { apiURL } from "./util/apiURL";
import axios from "axios";
import './App.css';

//PAGES
import Home from "./Pages/Home";
import Index from './Pages/Index';
import New from './Pages/New';
import Show from './Pages/Show';
import Edit from "./Pages/Edit";



//COMPONENTS
import NavBar from './Components/NavBar';
import FootBar from './Components/FootBar';

export class App extends Component {
  constructor(){
    super();
    
    this.state = {
      transactions:[]
    }

    this.API_BASE = apiURL();
  }
  
  //Load Budget Logs on Page Load
  componentDidMount(){
    
    axios.get(`${this.API_BASE}/transactions`)
      .then(response => {
        const { data } = response;

        this.setState({
          transactions:[...data]
        })

      },
      error => console.error(`Error: ${error}`)
      )
      .catch(c => console.warn(`Warning: ${c}`));
  };
  

    //Create a New Budget Log
    addBudgetLog = (newBudgetLog) => {
      const {transactions} = this.state;
      axios.post(`${this.API_BASE}/transactions`, newBudgetLog)
        .then(response => {
          this.setState({
            transactions:[...transactions, newBudgetLog]
          })
        },
        error => console.error(`Error: ${error}`)
        )
        .catch(c => console.warn(`Warning: ${c}`))
    };


  //Delete a Budget Log
  deleteBudgetLog = (index) => {
    const {transactions} = this.state;
    axios.delete(`${this.API_BASE}/transactions/${index}`)
      .then(response => {
        const tempArray = [...transactions];
        tempArray.splice(index, 1);        
        this.setState({
          transactions:[...tempArray]
        })
      },
      error => console.error(`Error: ${error}`)
      )
      .catch(c => console.warn(`Warning: ${c}`));
  };


  //Update a Budget Log
  updateBudgetLog = (updatedBudgetLog, index) => {
    const {transactions} = this.state;
    axios.put(`${this.API_BASE}/transactions/${index}`, updatedBudgetLog)
      .then(response => {
        const tempArray = [...transactions];
        tempArray[index] = updatedBudgetLog;

        this.setState({
          transactions:[...tempArray]
        })
      },
      error => console.error(`Error: ${error}`)
      )
      .catch(c => console.warn(`Warning: ${c}`));
  };

  render() {
    const {transactions} = this.state;
    return (
      <div className="App">
        <Router>
          <NavBar />

          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/transactions">
                <Index transactions={transactions}/>
              </Route>

              <Route path="/transactions/new">
                <New addBudgetLog={this.addBudgetLog}/>
              </Route>

              <Route exact path="/transactions/:index">
                <Show transactions={transactions} deleteBudgetLog={this.deleteBudgetLog}/>
              </Route>

              <Route path="/transactions/:index/edit">
                <Edit updateBudgetLog={this.updateBudgetLog}/>
              </Route>
            </Switch>
          </main>
          <FootBar />
        </Router>
      </div>
    )
  }
}

export default App
