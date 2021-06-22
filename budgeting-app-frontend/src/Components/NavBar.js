import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/">HOME</Link>
            </h1>

            <h1>
                <Link to="/transactions">BUDGET</Link>
            </h1>


            <button>
                <Link style={{color:"#02007C", fontSize:"15px", fontWeight:"bolder"}} to="/transactions/new">New Transaction</Link>
            </button>
        </nav>
    )
}

export default NavBar
