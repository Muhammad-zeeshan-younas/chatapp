import { Message } from "./Message";

export type Channel = {
  id: number;
  name: string;
  messages: Message[];
};
