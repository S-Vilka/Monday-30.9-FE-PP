import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Job Search</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add-job"> Job</Link>
        <Link to={"/edit-job/:id"}>Edit Job</Link>
        <Link to={"/signup"}>Sign up</Link>
        <Link to={"/login"}>Login</Link>
       </div>
    </nav>
  );
}
 
export default Navbar;