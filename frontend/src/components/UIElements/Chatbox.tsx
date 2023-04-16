import React, { FormEvent, useRef } from "react";
import Message from "../UIElementsComponents/Message";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
type Props = {};

function Chatbox({}: Props) {
  const message = useRef("");
  const handleMessage = (event: FormEvent) => {
    event.preventDefault();
    console.log(message);
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col flex-grow h-[95%]"></div>
      <form
        onSubmit={handleMessage}
        className="flex items-center justify-center "
      >
        <div className="relative flex h-[40px] w-full bg-slate-200">
          <input
            className="flex w-full h-full bg-transparent outline-none px-7 rounded-xl"
            placeholder="write your message here"
          ></input>
          <button
            type="submit"
            className="text-10px absolute right-0 flex h-full p-4 items-center justify-center rounded-full bg-[#6588DE] text-white"
          >
            <PaperAirplaneIcon className="w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chatbox;
