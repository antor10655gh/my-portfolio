// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Show the hamburger menu when the screen width is less than 768px
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Add the 'scrolled' class to the header when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      // Add the 'scrolled' class to the header when scrolling down
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        // Remove the 'scrolled' class when at the top
        setScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const myMenu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Works",
      link: "/works",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <div
        id="myHeader"
        className={`hidden lg:block lg:flex lg:justify-between lg:items-center py-4 px-4 lg:px-[100px] fixed top-0 left-0 right-0 z-10 ${
          scrolled
            ? "bg-[#28282D] transition-bg duration-300"
            : "bg-transparent transition-bg duration-300"
        } text-white`}
      >
        <div>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div>
          <ul className="flex gap-4 items-center text-lg">
            {myMenu.map((menu) => (
              <li key={menu.name}>
                <Link to={menu.link}>
                  <button className="cta">
                    <span className="hover-underline-animation">
                      {menu.name}
                    </span>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        id="myHeader"
        className={`lg:hidden block flex justify-between items-center py-4 px-4 px-4 fixed top-0 left-0 right-0 z-10 ${
          scrolled
            ? "bg-[#28282D] transition-bg duration-300"
            : "bg-transparent transition-bg duration-300"
        } text-white`}
      >
        <div>
          <img src={logo} alt="logo.png" />
        </div>
        <div>
          <GiHamburgerMenu
            size={30}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
          {showMenu && (
            <div
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className="min-h-screen  absolute top-0 left-0 right-0 bg-[#28282D] transition-bg duration-300"
            >
              <div className="flex justify-between items-center py-4 px-4">
                <img src={logo} alt="logo.png" />
                <RxCross1
                  size={30}
                  onClick={toggleMenu}
                  className="cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-4 px-4 mt-5">
                {myMenu.map((menu) => (
                  // eslint-disable-next-line react/jsx-key
                  <Link to={menu.link}>
                    <button className="cta">
                      <span
                        className="hover-underline-animation"
                        style={{ fontSize: "20px" }}
                      >
                        {menu.name}
                      </span>
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
