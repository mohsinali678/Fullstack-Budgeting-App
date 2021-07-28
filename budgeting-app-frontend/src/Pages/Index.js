import BudgetLogs from "../Components/BudgetLogs";

function Index({transactions}) {
    
    // Could you refactor this code to use .reduce instead of .forEach?
    // Anytime you iterate through an array where your goal is to compute a single value (like totalBalance),
    // .reduce is a better choice.
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
