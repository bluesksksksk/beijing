import "./RedirectButton.css";
import { useNavigate } from "react-router-dom";

function RedirectButton({ children, onClick }) {
  const navigate = useNavigate();

  const redirectHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    if (children.includes("Beijing")) {
      navigate(`/about beijing`);
    } else if (children.includes("Travel")) {
      navigate(`/travel tips`);
    } else if (children.includes("Attractions")) {
      navigate(`/attractions`);
    }
  };

  return (
    <button
      className="btn btn-primary redirect"
      href="#"
      onClick={redirectHandler}
    >
      {children}
    </button>
  );
}

export default RedirectButton;
