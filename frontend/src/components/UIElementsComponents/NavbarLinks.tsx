import React from "react";

type Props = {};

function NavbarLinks({}: Props) {
  const LogoutHandler = () => {};
  return (
    <ul>
      <li>
        <button
          className="border-2 border-[#a49cbd] px-4 py-2 hover:scale-105 transition-all duration-200"
          type="button"
          onClick={LogoutHandler}
        >
          Logout
        </button>
      </li>
    </ul>
  );
}

export default NavbarLinks;
