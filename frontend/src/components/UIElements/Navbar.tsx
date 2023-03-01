import React from "react";
import NavbarLinks from "../UIElementsComponents/NavbarLinks";
import NavbarProfile from "../UIElementsComponents/NavbarProfile";

type Props = {};

function Navbar({}: Props) {
  return (
    <>
      <nav className="w-full h-20 bg-[#393053] px-4 lg:px-8 xl:px-12 flex items-center justify-between text-[#a49cbd] text-sm md:text-base xl:text-lg">
        <NavbarProfile />
        <NavbarLinks />
      </nav>
    </>
  );
}

export default Navbar;
