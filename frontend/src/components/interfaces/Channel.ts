import { Message } from "./Message";

export type Channel = {
  id: number;
  messages: Message[];
  users: any;
};
