import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import TabButton from "./TabButton";
import { TOPICS } from "../../data/ContentData";

function Navbar() {
  const navigate = useNavigate();

  function handleSelect(tabName) {
    navigate(`/${tabName.toLowerCase()}`);
  }

  return (
    <nav className="d-flex flex-row justify-content-start">
      <div className="logo p-2">Experience Beijing</div>
      <menu>
        {TOPICS.map((topic, index) => (
          <TabButton
            key={index}
            page={topic}
            onSelect={() => handleSelect(topic)}
          />
        ))}
      </menu>
    </nav>
  );
}

export default Navbar;
