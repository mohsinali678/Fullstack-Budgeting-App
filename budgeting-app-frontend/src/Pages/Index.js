import BudgetLogs from "../Components/BudgetLogs";

function Index({transactions}) {
    
    let totalBalance = 0;
    transactions.forEach((transaction) => {
        totalBalance += Number(transaction.transactionAmount);
    });
    
    let balanceChecker = "";
    if(totalBalance <= 0){
        balanceChecker="red"
    }else if(totalBalance >= 1000){
        balanceChecker = "green"
    }else{
        balanceChecker = "orange"
    }

    return (
        <div className="Index">
            <h2>Bank Account Total: <span className={balanceChecker}>{totalBalance}</span></h2>
            <BudgetLogs transactions={transactions}/>
        </div>
    )
}

export default Index
