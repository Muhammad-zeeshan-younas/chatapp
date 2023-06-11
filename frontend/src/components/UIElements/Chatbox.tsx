import React, { FormEvent, useEffect, useRef, useState } from "react";
import { createConsumer, Cable } from "@rails/actioncable";
import Message from "../UIElementsComponents/Message";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import channelContext from "../../lib/api/channelContext";

type Props = {
  channels: any;
  activeIndex: number;
};

function Chatbox({ channels, activeIndex }: Props) {
  var messageRef = useRef<HTMLInputElement>(null);

  const user = useSelector((state: RootState) => state.user);
  const [messages, setMessages] = useState<any>([]);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const handleMessage = async (event: FormEvent) => {
    event.preventDefault();
    let trimmedMessage = messageRef.current?.value.trim();
    if (trimmedMessage === "") {
      return;
    }
    await channelContext
      .createMessage(filterdChannel[0].id, {
        content: trimmedMessage,
      })
      .then((res) => {
        messageRef.current!.value = "";
      });
  };

  const filterdChannel = channels.filter(
    (channel: any) => channel.id === activeIndex
  );

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    setMessages(filterdChannel[0].messages);
  }, [activeIndex]);

  useEffect(() => {
    const cable: Cable = createConsumer("ws://localhost:3001/cable");

    const chatChannel = cable.subscriptions.create("ChatChannel", {
      received: (data) => {
        const newMessage = data;

        if (data.channel.id === activeIndex) {
          setMessages((prevMessages: any) => [...prevMessages, newMessage]);
          filterdChannel[0].messages = [
            ...(filterdChannel[0]?.messages || []),
            newMessage,
          ];
        }
      },
    });

    return () => {
      chatChannel.unsubscribe();
      cable.disconnect();
    };
  }, []);

  if (messages)
    return (
      <div className="w-full h-full">
        <div className="flex flex-col flex-grow h-[95%] overflow-auto px-6 py-2 gap-4">
          {messages.map((message: any) => {
            if (message.user.id == user.id) {
              return (
                <Message
                  key={message.id}
                  name={message.user.first_name + " " + message.user.last_name}
                  message={message.content}
                  timestamp={message.created_at}
                />
              );
            } else {
              return (
                <Message
                  key={message.id}
                  name={message.user.first_name + " " + message.user.last_name}
                  message={message.content}
                  reciever
                  timestamp={message.created_at}
                />
              );
            }
          })}
          <div ref={lastMessageRef}></div>
        </div>
        <form
          onSubmit={handleMessage}
          className="flex items-center justify-center"
        >
          <div className="relative flex h-[40px] w-[96%] bg-slate-200 rounded-xl">
            <input
              className="flex h-full bg-transparent outline-none px-7 rounded-xl"
              placeholder="write your message here"
              ref={messageRef}
            ></input>
            <button
              type="submit"
              className="text-10px absolute right-0 flex h-full p-4 items-center justify-center text-[#6588DE]"
            >
              <PaperAirplaneIcon className="w-6 h-6" />
            </button>
          </div>
        </form>
      </div>
    );
  else return <div>Loading</div>;
}

export default Chatbox;
