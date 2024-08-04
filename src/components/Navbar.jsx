import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const links = [
    { key: "home", link: "Home" },
    { key: "features", link: "Features" },
    { key: "pricing", link: "Pricing" },
    { key: "blog", link: "Blog" },
  ];

  return (
    <div className="flex items-center justify-between p-4 px-20 font-medium">
      <img className="" src={logo} alt="logo" width={80} height={80} />
      <ul className="flex gap-16 list-none">
        {links.map((lk) => (
          <li className="cursor-pointer" key={lk.key}>
            {lk.link}
          </li>
        ))}
      </ul>
      {/* right side of the navbar */}
      <div className="flex items-center gap-[max(1vw, 12px)]">
        <select className="px-4 py-2 rounded-2xl bg-transparent text-white border-2 cursor-pointer">
          <option className="bg-[#09005c] text-white" value="usd">
            USD
          </option>
          <option className="bg-[#09005c] text-white" value="eur">
            EUR
          </option>
          <option className="bg-[#09005c] text-white" value="ind">
            IND
          </option>
        </select>
        <button className="flex items-center gap-2 m-2 px-4 py-2 w-30 border-2 border-transparent rounded-2xl bg-white text-black cursor-pointer hover:bg-transparent hover:text-white hover:border-white transition-all duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
