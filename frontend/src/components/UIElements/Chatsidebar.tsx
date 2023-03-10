import React from "react";
import Chatcard from "./Chatcard";

type Props = {};

function Chatsidebar({}: Props) {
  return (
    <div className="w-1/4 h-full border-r border-r-[#393053] divide-y-2 divide-[#393053] overflow-scroll scrollbar-thin scrollbar-thumb-[#393053] scrollbar-rounded-md">
      <Chatcard />
      <Chatcard />
      <Chatcard />
      <Chatcard />
      <Chatcard />
      <Chatcard />
      <Chatcard />
      <Chatcard />
      <Chatcard />
      <Chatcard />
      <Chatcard />
    </div>
  );
}

export default Chatsidebar;
