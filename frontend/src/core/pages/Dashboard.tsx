import React from "react";
import Chatsidebar from "../../components/UIElements/Chatsidebar";
import Navbar from "../../components/UIElements/Navbar";

type Props = {};

function Dashboard({}: Props) {
  return (
    <>
      <Navbar />
      <section className="w-full bg-slate-100 dashboard">
        <Chatsidebar />
      </section>
    </>
  );
}

export default Dashboard;
