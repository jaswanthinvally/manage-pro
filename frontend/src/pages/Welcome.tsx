import { Link } from "react-router-dom"
const Welcome = () => {
  return (
    <div>
    <div>
        <h1>welcome to Manage pro </h1>
        <h2>The next gen management system</h2>
    </div>
    <div>
        <Link to='/signup'><button>Sign up</button></Link>
        <Link to='/login'>Login</Link>
    </div>
    </div>)
}

export default Welcome