import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Channel } from "../components/interfaces/Channel";

export interface UserSlice {
  first_name: string;
  last_name: string;
  email: string;
  loggedIn: boolean;
  channels?: Channel[] | null;
}

const initialState: UserSlice = {
  first_name: "",
  last_name: "",
  email: "",
  loggedIn: false,
  channels: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserSlice>) => {
      action.payload.loggedIn = true;
      return { ...state, ...action.payload };
    },

    getUser: (state) => {},

    clearUser: (state) => {
      sessionStorage.removeItem("accessToken");
      return { ...initialState };
    },
  },
});

export const { getUser, setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
