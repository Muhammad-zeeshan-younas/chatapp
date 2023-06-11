import React, { useState } from "react";
import userContext from "../../lib/api/userContext";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Channel } from "../interfaces/Channel";

type Props = {
  channel: Channel;
  activeIndex: number;
  index: number;
  setActiveIndex: (index: number) => void;
};

function Chatcard({ channel, activeIndex, index, setActiveIndex }: Props) {
  const user = useSelector((state: RootState) => state.user);

  const customUser = channel.users.filter(
    (customUser: any) => customUser.id !== user.id
  );

  return (
    <section
      className={`container flex items-center gap-2 px-5 py-4 shadow-lg bg-slate-100 ${
        activeIndex === channel.id ? "bg-slate-300" : ""
      }`}
      onClick={() => setActiveIndex(channel.id)}
    >
      <div>
        <img
          src="https://media.istockphoto.com/id/1305665241/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette-stock-illustration.jpg?s=612x612&w=0&k=20&c=qA6GUTalFyrBCRVUzQgp2B5zODxmOA4NXTBcw9notYY="
          className="rounded-full w-16 h-16 border-2 border-[#a49cbd]"
        ></img>
      </div>
      <div>
        <p className="text-xl">
          {customUser[0].first_name} {customUser[0].last_name}
        </p>
        <p
          className={`text-sm text-gray-400${
            activeIndex === channel.id ? "text-gray-500" : ""
          }`}
        >
          {channel.messages[channel.messages.length - 1]?.content ||
            "No messages"}
        </p>
      </div>
    </section>
  );
}

export default Chatcard;
