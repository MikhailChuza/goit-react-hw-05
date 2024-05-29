import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "400px",
        margin: "0 auto",
        border: "2px solid black",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1>Opps! Page not found! Sorry!</h1>
      <p style={{ fontSize: "30px" }}>
        Please visit
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "blue",
            padding: "10px 20px",
            margin: "15px",
            borderRadius: "5px",
            display: "inline-block",
          }}
        >
          Home page
        </Link>
      </p>
    </div>
  );
}
