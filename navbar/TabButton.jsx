import React from "react";

function TabButton({ page, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {page}
      </button>
    </li>
  );
}

export default TabButton;
