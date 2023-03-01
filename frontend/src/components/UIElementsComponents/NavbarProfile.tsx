import React from "react";

type Props = {};

function NavbarProfile({}: Props) {
  return (
    <section className="flex items-center gap-2">
      <div className="relative w-10 h-10 lg:w-12 lg:h-12  rounded-full border-2 border-[#a49cbd] bg-[#a49cbd]">
        <img
          src="./profile.jpg"
          className="absolute w-full h-full rounded-full"
        ></img>
      </div>
      <p className="text-sm font-bold xl:text-xl md:text-base lg:text-lg">
        Muhammad Zeeshan Younas
      </p>
    </section>
  );
}

export default NavbarProfile;
