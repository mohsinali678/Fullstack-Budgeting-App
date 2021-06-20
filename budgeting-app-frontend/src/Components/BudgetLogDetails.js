import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

function BudgetLogDetails(props) {
  const { deleteBudgetLog } = props;
  const [transaction, setTransaction] = useState([]);
  const API_BASE = apiURL();

  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${API_BASE}/transactions/${index}`)
      .then(
        (response) => {
          setTransaction(response.data);
        },
        (error) => {
          console.error(`Error: ${error}`);
        }
      )
      .catch((c) => {
        console.warn(`Warning: ${c}`);
        history.push("/not-found");
      });
  }, [index, history, API_BASE]);

  const handleDelete = () => {
    deleteBudgetLog(index);
    history.push("/transactions");
  };

  return (
    <article>
      <h3>Title: {transaction.transactionName}</h3>
      <h3>Transaction Detail: {transaction.transactionFrom}</h3>
      <h3>Transaction Date: {transaction.transactionDate}</h3>
      <h2>Transaction Amount: {transaction.transactionAmount}</h2>

      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default withRouter(BudgetLogDetails);
