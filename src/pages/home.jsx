import { Link } from "@tanstack/react-router";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Home Page 🏠</h1>
      <p>Hello</p>
      <p>hjddfjhfkj</p>
      <p>Welcome to our landing page</p>

      <nav style={{ marginTop: "20px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>
          Home
        </Link>

        <Link to="/about">About Us</Link>
      </nav>
    </div>
  );
}
