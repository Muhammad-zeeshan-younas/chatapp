import React from "react";

type Props = {};

function Chatcard({}: Props) {
  return (
    <section className="container flex items-center gap-2 px-5 py-4 shadow-lg bg-slate-100">
      <div>
        <img
          src="./profile.jpg"
          className="rounded-full w-16 h-16 border-2 border-[#a49cbd]"
        ></img>
      </div>
      <div>
        <p className="text-xl">Muhammad Zeeshan Younas</p>
        <p className="text-base">last message</p>
      </div>
    </section>
  );
}

export default Chatcard;
