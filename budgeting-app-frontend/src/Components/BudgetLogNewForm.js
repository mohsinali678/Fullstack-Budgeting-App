import React, { Component } from 'react'
import { withRouter } from 'react-router'

export class BudgetLogNewForm extends Component {
    constructor(){
        super();

        this.state = {
            transaction :{
                    transactionDate: "",
                    transactionName: "",
                    transactionFrom:"",
                    transactionAmount: 0
                }
                
        }

    }

    handleTextChange = (e) => {
        const {transaction} = this.state;
        this.setState({
            transaction: {...transaction, [e.target.id]:e.target.value}
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {addBudgetLog} = this.props;
        addBudgetLog(this.state.transaction);
        this.props.history.push("/transactions");
    }

    render() {
        const { transaction } = this.state;

        return (
            <div className="New">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="transactionDate">Enter Date:</label>
                    <input 
                        id="transactionDate"
                        type="Date"
                        value={transaction.transactionDate}
                        onChange={this.handleTextChange}
                        required 
                    />
                    <br />
                    <label htmlFor="transactionName">Title:</label>
                    <input 
                        id="transactionName"
                        type="text"
                        value={transaction.transactionName}
                        onChange={this.handleTextChange}
                        placeholder = "Name the transaction"
                        required 
                    />
                    <br />
                    <label htmlFor="transactionFrom">From:</label>
                    <textarea
                        id="transactionFrom"
                        value={transaction.transactionFrom}
                        onChange={this.handleTextChange}
                        placeholder = "Description...."
                        required 
                    />
                    <br />
                    <label htmlFor="transactionAmount">Enter Amount</label>
                    <input 
                        id="transactionAmount"
                        type="number"
                        value={transaction.transactionAmount}
                        onChange={this.handleTextChange}
                        placeholder = "Enter amount"
                        required 
                    />
                    <br />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default withRouter(BudgetLogNewForm)
