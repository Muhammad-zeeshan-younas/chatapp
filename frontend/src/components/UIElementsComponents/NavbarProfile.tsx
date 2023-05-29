import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

type Props = {};

function NavbarProfile({}: Props) {
  const user = useSelector((state: RootState) => state.user);
  return (
    <section className="flex items-center gap-2">
      <div className="relative w-10 h-10 lg:w-12 lg:h-12  rounded-full border-2 border-[#a49cbd] bg-[#a49cbd]">
        <img
          src="https://media.istockphoto.com/id/1305665241/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette-stock-illustration.jpg?s=612x612&w=0&k=20&c=qA6GUTalFyrBCRVUzQgp2B5zODxmOA4NXTBcw9notYY="
          className="absolute w-full h-full rounded-full object-cover"
        ></img>
      </div>
      <p className="text-sm font-bold xl:text-xl md:text-base lg:text-lg">
        {user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)}{" "}
        {user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1)}
      </p>
    </section>
  );
}

export default NavbarProfile;
