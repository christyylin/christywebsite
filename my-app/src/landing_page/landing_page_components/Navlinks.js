import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faCaretDown,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const NavLinks = ({ open, setOpen }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setsubHeading] = useState("");

  function isExternal(url) {
    const match = url.match(/^(https?:)?\/\//);
    return match !== null;
  }

  const links = [
    {
      name: "Projects",
      submenu: false,
      new_tab: false,
      link: "/projects",
    },
    {
      name: "About",
      submenu: false,
      new_tab: false,
      link: "/about",
    },
    {
      name: "Contact",
      submenu: false,
      new_tab: false,
      link: "/contact",
    },


  ];
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left lg:cursor-pointer group">
            {link.link ? (
              <a
                className="text-[#353535] text-lg font-['Josefin_sans'] hover:text-sky-300 flex justify-between items-center py-7 lg:pr-0 pr-5 group"
                href={link.link}
                target={link.new_tab ? "_blank" : "_self"}
                // onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <div
                className={`py-7 text-lg font-['Helvetica_Neue'] hover:text-sky-300 flex justify-between items-center lg:pr-0 pr-5 group ${
                  heading !== link.name ? "text-gray-100" : "text-sky-300"
                }`}
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                  setsubHeading("");
                }}
              >
                {link.name}
                {link.submenu && (
                  <span>
                    <span className="text-xl lg:hidden inline">
                      <FontAwesomeIcon
                        icon={
                          heading === link.name ? faChevronUp : faChevronDown
                        }
                        style={{ color: "#ffffff" }}
                      />
                    </span>
                    <span className="text-lg lg:ml-2 lg:block hidden group-hover:rotate-180">
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        style={{ color: "#ffffff" }}
                      />
                    </span>
                  </span>
                )}
              </div>
            )}
            {link.submenu && (
              <div>
                <div className="absolute top-14 z-20 hidden group-hover:lg:block hover:lg:block ">
                  <div className="py-3">
                    <div className="w-4 h-4 left-8 absolute mt-1 bg-gray-800 rotate-45 "></div>
                  </div>

                  {link.extramenu ? (
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-10 py-10 grid grid-cols-2 gap-10 rounded-lg">
                      {link.sublinks.map((mysublinks) => (
                        <div>
                          <div>
                            <div className="text-2xl font-['Helvetica_Neue'] font-bold flex">
                              {mysublinks.head}
                            </div>
                            {mysublinks.sublinks1.map((mysublinks1) => (
                              <li className="text-lg font-['Helvetica_Neue'] font-semibold text-gray-100 my-2.5 pt-5 hover:text-sky-300">
                                {mysublinks1.icon1 && (
                                  <span>
                                    <FontAwesomeIcon
                                      className="w-8 text-start"
                                      icon={mysublinks1.icon1}
                                    />
                                  </span>
                                )}
                                <Link
                                  className="font-['Helvetica_Neue']"
                                  to={mysublinks1.link1}
                                  // onClick={() => setOpen(false)}
                                >
                                  {mysublinks1.head1}
                                </Link>
                              </li>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-10 pt-10 rounded-lg">
                      {link.sublinks.map((mysublinks) => (
                        <div className="flex flex-col">
                          <div className="text-lg font-['Helvetica_Neue'] font-semibold flex">
                            {isExternal(mysublinks.link) ? (
                              <a
                                href={mysublinks.link}
                                className="hover:text-sky-300 font-['Helvetica_Neue'] flex flex-row"
                                target="_blank"
                                // onClick={() => setOpen(false)}
                              >
                                {mysublinks.icon && (
                                  <div>
                                    <FontAwesomeIcon
                                      className="w-8 text-start"
                                      icon={mysublinks.icon}
                                    />
                                  </div>
                                )}
                                {mysublinks.head}
                              </a>
                            ) : (
                              <Link
                                to={mysublinks.link}
                                className="hover:text-sky-300 font-['Helvetica_Neue'] flex flex-row"
                                // onClick={() => setOpen(false)}
                              >
                                {mysublinks.icon && (
                                  <div>
                                    <FontAwesomeIcon
                                      className="w-8 text-start"
                                      icon={mysublinks.icon}
                                    />
                                  </div>
                                )}
                                {mysublinks.head}
                              </Link>
                            )}
                          </div>
                          <p className="text-sm font-light  text-anoteblack-300 pb-8">
                            {mysublinks.info}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          {/* Mobile menu */}
          {link.submenu && (
            <div
              className={`
            ${heading === link.name ? "lg:hidden" : "hidden"}
            `}
            >
              {link.sublinks.map((mysublinks) => (
                <div>
                  <div>
                    <a
                      href={mysublinks.link}
                      onClick={() => {
                        subHeading !== mysublinks.head
                          ? setsubHeading(mysublinks.head)
                          : setsubHeading("");
                        setOpen(false);
                      }}
                      className={`py-4 pl-7 font-semibold lg:pr-0 pr-5 flex ${
                        mysublinks.icon ? "justify-start" : "justify-between"
                      } items-center ${
                        subHeading === mysublinks.head
                          ? "text-sky-300"
                          : "text-gray-100"
                      } }`}
                    >
                      {mysublinks.icon && (
                        <div>
                          <FontAwesomeIcon
                            className="w-10"
                            icon={mysublinks.icon}
                          />
                        </div>
                      )}
                      {mysublinks.head}

                      {link.extramenu && (
                        <span className="text-xl lg:mt-1 lg:ml-2 inline">
                          <FontAwesomeIcon
                            icon={
                              subHeading === mysublinks.head
                                ? faChevronUp
                                : faChevronDown
                            }
                            style={{ color: "#ffffff" }}
                          />
                        </span>
                      )}
                    </a>
                    {link.extramenu && (
                      <div
                        className={`${
                          subHeading === mysublinks.head
                            ? "lg:hidden"
                            : "hidden"
                        }`}
                      >
                        {mysublinks.sublinks1.map((mysublinks1) => (
                          <li className="py-3 pl-14 font-['Helvetica_Neue'] hover:text-sky-300">
                            {mysublinks1.icon1 && (
                              <span>
                                <FontAwesomeIcon
                                  className="w-10"
                                  icon={mysublinks1.icon1}
                                />
                              </span>
                            )}
                            <Link
                              className="font-['Helvetica_Neue']"
                              to={mysublinks1.link1}
                              // onClick={() => setOpen(false)}
                            >
                              {mysublinks1.head1}
                            </Link>
                          </li>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
