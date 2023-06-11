import Chatsidebar from "../../components/UIElements/Chatsidebar";
import Navbar from "../../components/UIElements/Navbar";
import Chatbox from "../../components/UIElements/Chatbox";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import channelContext from "../../lib/api/channelContext";
import { Channel } from "../../components/interfaces/Channel";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {};

function Dashboard({}: Props) {
  const user = useSelector((state: RootState) => state.user);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const setParmsAndActiveIndex = (index: number) => {
    queryParams.set("channelId", index.toString());
    const newUrl = `${location.pathname}?${queryParams.toString()}`;
    navigate(newUrl);
    setActiveIndex(index);
  };

  useEffect(() => {
    async function getAllChannelsForLoggedInUser() {
      const result = await channelContext.getAllChannels();

      setChannels(result.data.channels);
      let channelId: string | null = queryParams.get("channelId");

      if (!channelId) {
        channelId = result.data.channels[0].id;
        queryParams.set("channelId", channelId || "");
        const newUrl = `${location.pathname}?${queryParams.toString()}`;
        navigate(newUrl);

        if (channelId) {
          setActiveIndex(parseInt(channelId));
        }
      }
    }
    getAllChannelsForLoggedInUser();
  }, []);

  return (
    <>
      {channels.length > 0 ? (
        <>
          <Navbar />
          <section className="flex w-full dashboard">
            <Chatsidebar
              activeIndex={activeIndex}
              setActiveIndex={setParmsAndActiveIndex}
              channels={channels}
            />
            <Chatbox activeIndex={activeIndex} channels={channels} />
          </section>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}

export default Dashboard;
