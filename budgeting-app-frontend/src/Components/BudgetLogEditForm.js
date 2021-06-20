import React, { Component } from 'react'
import axios from "axios";
import { withRouter } from 'react-router'
import { apiURL } from "../util/apiURL";

export class BudgetLogEditForm extends Component {
    constructor(){
        super();

        this.state = {
            transaction :{
                transactionDate: "",
                transactionDetail: "",
                transactionAmount: 0
            }
        }

        this.API_BASE = apiURL();
    }

    handleTextChange = (e) => {
        const {transaction} = this.state;
        this.setState({
            transaction: {...transaction, [e.target.id]:e.target.value}
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const {updateBudgetLog} = this.props;
        console.log(this.state.transaction, this.props.match.params)
        updateBudgetLog(this.state.transaction, this.props.match.params.index);
        this.props.history.push("/transactions");
    }

    componentDidMount = () => {
        axios.get(`${this.API_BASE}/transactions/${this.props.match.params.index}`)
        .then(response => {
            this.setState({
                transaction:{...response.data}
            })
        },
        error => console.error(`Error: ${error}`)
        )
        .catch(c => console.warn(`Warning: ${c}`))
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

export default withRouter(BudgetLogEditForm)
