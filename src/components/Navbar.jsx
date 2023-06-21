import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { MdOutlineLogin } from "react-icons/md";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("men");
  let navigate = useNavigate();
  const navitems = [
    {
      title: "MEN",
      link: "men",
    },
    {
      title: "WOMEN",
      link: "women",
    },
    {
      title: "KIDS",
      link: "kids",
    },
    {
      title: "HOME & LIVING",
      link: "home_&_living",
    },
    {
      title: "BEAUTY",
      link: "beauty",
    },
    {
      title: "STUDIO",
      link: "studio",
    },
  ];

  return (
    <div className="flex w-full bg-white  h-20 sticky top-0 shadow-md z-20  px-16 items-center justify-between">
      {/* left */}
      <div className="flex gap-x-10 ">
        {/* logo */}
        <div className="w-28 h-14 flex items-center">
          <img
            onClick={() => navigate("/")}
            src="https://images.indianexpress.com/2021/01/myntra.png"
            alt="logo"
            className="w-full h-full object-contain cursor-pointer"
          />
        </div>
        {/* nav item */}
        <div className="flex gap-x-14 items-center font-medium tracking-widest">
          {navitems.map((item) => {
            return (
              <p
                key={item.title}
                className={`text-sm hover:text-primary cursor-pointer ${
                  activeNav === item.link &&
                  "text-primary border-b-2 border-b-primary"
                } `}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav(item.link);
                  navigate(item.link);
                }}
              >
                {item.title}
              </p>
            );
          })}
        </div>
      </div>
      {/* right */}

      <div className="flex gap-12">
        <BsCart4
          title="cart"
          size={25}
          className=" hover:text-primary cursor-pointer"
          onClick={() => navigate("/cart")}
        />
        <AiOutlineHeart
          size={25}
          className=" hover:text-primary cursor-pointer"
        />

        <MdLogout
          title="logout"
          size={25}
          className=" hover:text-primary cursor-pointer"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
};

export default Navbar;
