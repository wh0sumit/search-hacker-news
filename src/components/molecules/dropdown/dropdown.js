import Button from "../../atoms/Buttons/Button";
import "./Dropdown.scss";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

import { useState } from "react";

export default function Dropdown({ children, title }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <ul>
      <li className="dropdown ">
        <Button className="btn-soft dropdown-btn" onClick={toggleDropdown}>
          {title}
          {showDropdown ? (
            <RiArrowUpSLine className="icon" />
          ) : (
            <RiArrowDownSLine className="icon" />
          )}
        </Button>
        {/* Navbar Dropdown Start */}
        {showDropdown && children && (
          <ul
            className="rounded-5"
            style={{
              visibility: "visible",
            }}
          >
            {children}
          </ul>
        )}
        {/* Navbar Dropdown End */}
      </li>
    </ul>
  );
}
