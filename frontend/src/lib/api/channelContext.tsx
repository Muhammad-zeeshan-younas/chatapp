import axiosClient from "../apiClients";

const getAllChannels = () => {
  return axiosClient.get("/channels");
};

const createMessage = (channel_id: number, data: any) => {
  return axiosClient.post(`/channels/${channel_id}/messages`, data);
};
export default {
  getAllChannels,
  createMessage,
};
