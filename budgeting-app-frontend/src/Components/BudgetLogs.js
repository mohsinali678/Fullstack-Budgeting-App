import BudgetLog from "./BudgetLog";

function BudgetLogs(props) {
    const { transactions } = props;
    return (
        <div className="BudgetLogs">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => {
                            return <BudgetLog key={index} transaction={transaction} index={index} />
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default BudgetLogs
