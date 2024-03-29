import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./Navlinks";

function Navbar(props) {

  const [hovered, setHovered] = useState(false);

  const navigate = useNavigate();

  const urlObject = new URL(window.location.origin);
  var hostname = urlObject.hostname;
  if (hostname.startsWith("www.")) {
    hostname = hostname.substring(4);
  }
  urlObject.hostname = `dashboard.${hostname}`;

  var startPath = urlObject.toString();
  return (

    <nav className="fixed h-20 top-0 w-full bg-[#F2f2f2] text-[#353535] z-30">
      <div className="flex items-center font-medium justify-around">
        <div className="flex items-start">
          <div className="p-5 lg:w-auto w-full flex z-40">
          <div style={{ background: 'rgba(255, 255, 255, 0.8)' }}>
          </div>
            <div
              className="text-3xl lg:hidden right-3 absolute"
              onClick={() => props.setOpen(!props.open)}
            >
              <FontAwesomeIcon icon={props.open ? faXmark : faBars} />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <ul className="lg:flex hidden items-center gap-8 ">
            <NavLinks />
          </ul>
        </div>

        <ul
          className={`lg:hidden bg-[#1A191A] fixed w-full h-full top-0 py-24 pl-4 z-20 duration-500 ${props.open ? "left-0" : "left-[-100%]"
            }`}
        >
          <li>
            <NavLinks isOpen={props.open} setIsOpen={props.setOpen} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
