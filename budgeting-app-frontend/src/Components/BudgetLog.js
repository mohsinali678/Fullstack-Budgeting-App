import { Link } from "react-router-dom"
function BudgetLog(props) {
    const { transaction, index } = props;

    return (
        <tr>
            <td>{index + 1}</td>

            <td>{transaction.transactionDate}</td>

            <td>{transaction.transactionName}</td>

            <td>{transaction.transactionFrom}</td>

            <td>{transaction.transactionAmount}</td>

            <td><Link to={`/transactions/${index}`}>✏️</Link></td>
        </tr>
    )
}

export default BudgetLog
