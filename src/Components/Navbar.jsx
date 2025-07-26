import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { useLocation, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { logo } from "../../public/assets";
const Navbar = () => {
  const location = useLocation();
  const [bar, setBar] = useState(false);
  const [activeLink, setActiveLink] = useState(false);
  const [active, setActive] = useState(null);
  const links = [
    {
      id: 0,
      name: "ABOUT",
      to: location.pathname === "/" ? "about" : "/about",
    },
    {
      id: 1,
      name: "SERVICE",
      to: location.pathname === "/" ? "#service" : "/#service",
    },
    {
      id: 2,
      name: "EXPERIENCE",
      to: location.pathname === "/" ? "#experience" : "/#experience",
    },
    {
      id: 3,
      name: "PROJECTS",
      to: location.pathname === "/" ? "#projects" : "/#projects",
    },
    {
      id: 4,
      name: "CONTACT",
      to: location.pathname === "/" ? "#contact" : "/#contact",
    },
  ];
  return (
    <nav className="text-white h-10 w-full top-5 z-100 fixed">
      <div className="container mx-auto px-[5%]">
        <div className="flex items-center justify-between bg-[#0A0F1F] border-1 border-gray-600 p-5 rounded-2xl">
          <Link
            onClick={() => setActiveLink(true)}
            className="text-[18px] hover:text-[#4A90E2] transition duration-300"
            to="/"
          >
            <div className="flex items-center">
              <img
                className="w-15 h-10"
                src={logo}
                alt="Image-Error"
                loading="lazy"
              />
              &#8826; A7med Hussien &#8726; &#8827;
            </div>
          </Link>{" "}
          <br />
          <div className="hidden lg:flex gap-5">
            {location.pathname === "/" ? (
              <HashLink
                onClick={() => setActiveLink(true)}
                smooth
                to="#Home"
                className={`text-[18px] hover:text-[#4A90E2] ${
                  activeLink && "text-[#4A90E2]"
                } transition duration-300`}
              >
                HOME
              </HashLink>
            ) : (
              <Link
                onClick={() => setActiveLink(true)}
                to="/"
                className={`text-[18px] hover:text-[#4A90E2] ${
                  activeLink &&
                  location.pathname !== "/projects" &&
                  "text-[#4A90E2]"
                } transition duration-300`}
              >
                HOME
              </Link>
            )}
            {links.map((link) => (
              <HashLink
                smooth
                onClick={() => {
                  setActive(link.id), setActiveLink(false);
                }}
                className={`text-[18px] hover:text-[#4A90E2] ${
                  active === link.id &&
                  !activeLink &&
                  location.pathname !== link.to &&
                  location.pathname !== "Home" &&
                  location.pathname !== "/projects" &&
                  "text-[#4A90E2]"
                } transition duration-300`}
                key={link.id}
                to={link.to}
              >
                {link.name}
              </HashLink>
            ))}
          </div>
          <div className="lg:hidden">
            {!bar ? (
              <FaBars
                onClick={() => setBar(true)}
                className="hover:text-[#4A90E2] transition duration-300 cursor-pointer"
                size={25}
              />
            ) : (
              <IoCloseCircle
                onClick={() => setBar(false)}
                className="hover:text-[#4A90E2] transition duration-300 cursor-pointer"
                size={25}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col items-end lg:hidden">
          {bar && (
            <div className="flex flex-col gap-2 w-43 mt-2 bg-[#0A0F1F] border-1 border-gray-600 rounded-2xl p-5">
              {location.pathname === "/" ? (
                <HashLink
                  onClick={() => {
                    setBar(false), setActiveLink(true);
                  }}
                  smooth
                  to="#Home"
                  className={`text-[18px] hover:text-[#4A90E2] ${
                    activeLink && "text-[#4A90E2]"
                  } transition duration-300`}
                >
                  HOME
                </HashLink>
              ) : (
                <Link
                  onClick={() => {
                    setBar(false), setActiveLink(true);
                  }}
                  to="/"
                  className={`text-[18px] hover:text-[#4A90E2] ${
                    activeLink &&
                    location.pathname !== "/projects" &&
                    "text-[#4A90E2]"
                  } transition duration-300`}
                >
                  HOME
                </Link>
              )}
              {links.map((link) => (
                <HashLink
                  smooth
                  onClick={() => {
                    setActive(link.id), setBar(false), setActiveLink(false);
                  }}
                  className={`text-[18px] hover:text-[#4A90E2] ${
                    active === link.id &&
                    location.pathname === "/" &&
                    !activeLink &&
                    "text-[#4A90E2]"
                  } transition duration-300`}
                  key={link.id}
                  to={link.to}
                >
                  {link.name}
                </HashLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
