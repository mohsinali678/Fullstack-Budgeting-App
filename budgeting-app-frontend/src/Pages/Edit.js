import BudgetLogEditForm from "../Components/BudgetLogEditForm";

function Edit(props) {
    const {updateBudgetLog} = props;
    return (
        <div className="New Edit">
            <h2>Edit</h2>
            <BudgetLogEditForm updateBudgetLog={updateBudgetLog}/>
        </div>
    )
}

export default Edit
