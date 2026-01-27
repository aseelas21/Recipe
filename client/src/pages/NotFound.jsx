import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page">
      <h1>404 – Page not found</h1>
      <p className="subtext">This route does not exist.</p>
      <Link to="/" className="nav-button">Go Home</Link>
    </div>
  );
}

