import React from "react";
import Chatsidebar from "../../components/UIElements/Chatsidebar";
import Navbar from "../../components/UIElements/Navbar";
import Chatbox from "../../components/UIElements/Chatbox";

type Props = {};

function Dashboard({}: Props) {
  return (
    <>
      <Navbar />
      <section className="flex w-full dashboard">
        <Chatsidebar />
        <Chatbox />
      </section>
    </>
  );
}

export default Dashboard;
