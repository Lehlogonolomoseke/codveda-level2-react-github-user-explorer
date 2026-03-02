import { Link } from "react-router-dom";

function Error({ message }) {
  return (
    <div>
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>

      <div className="error-box">{message}</div>
    </div>
  );
}

export default Error;
