import React from "react";
import Chatcard from "./Chatcard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Channel } from "../interfaces/Channel";

type Props = {
  channels: Channel[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

function Chatsidebar({ channels, activeIndex, setActiveIndex }: Props) {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div className="w-1/4 h-full border-r border-r-[#393053] divide-y-2 divide-[#393053] overflow-scroll scrollbar-thin scrollbar-thumb-[#393053] scrollbar-rounded-md">
      {channels.map((channel: any, index: number) => (
        <Chatcard
          key={channel.id}
          channel={channel}
          activeIndex={activeIndex}
          index={index}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
}

export default Chatsidebar;
