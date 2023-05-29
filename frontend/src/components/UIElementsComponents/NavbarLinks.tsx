import React from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../../reduser/userReducer";
import userContext from "../../lib/api/userContext";

type Props = {};

function NavbarLinks({}: Props) {
  const dispatch = useDispatch();
  const LogoutHandler = (event: any) => {
    event.preventDefault();
    userContext.logout();
    dispatch(clearUser());
  };
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
