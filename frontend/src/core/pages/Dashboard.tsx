import Chatsidebar from "../../components/UIElements/Chatsidebar";
import Navbar from "../../components/UIElements/Navbar";
import Chatbox from "../../components/UIElements/Chatbox";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

type Props = {};

function Dashboard({}: Props) {
  const user = useSelector((state: RootState) => state.user);
  console.log(user.channels);
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
