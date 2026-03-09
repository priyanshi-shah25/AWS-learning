import { Link } from "@tanstack/react-router";

export default function AboutUs() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>About Us ℹ️</h1>

      <p>This is a simple About Page</p>

      <nav style={{ marginTop: "20px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>
          Home
        </Link>

        <Link to="/about">About Us</Link>
      </nav>
    </div>
  );
}
