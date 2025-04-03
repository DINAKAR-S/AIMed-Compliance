import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/chatbot">Chatbot</Link>
      <Link to="/hospital-finder">Find Hospitals</Link>
      <Link to="/ai-comparison">AI Comparison</Link>
    </nav>
  );
};

export default Navbar;
