import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Confetti from "react-confetti";

type Props = {
  title?: String;
  children?: React.ReactNode;
  setShow: Dispatch<SetStateAction<boolean>>;
  confetti?: boolean;
};

function Popup({ title, children, confetti, setShow }: Props) {
  const [confettiActive, setConfettiActive] = useState(confetti);

  return (
    <div className="bg-gray-900 bg-opacity-30 fixed inset-0 z-10 flex items-center justify-center">
      {confettiActive && (
        <Confetti numberOfPieces={1000} onConfettiComplete={() => {}} />
      )}
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative z-20">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>

        <button
          className="absolute top-6 right-5"
          onClick={() => {
            setShow(false);
          }}
        >
          <XMarkIcon className="w-6 h-6 hover:bg-slate-200 rounded-lg" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
