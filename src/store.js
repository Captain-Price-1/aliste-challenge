import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./RoomSlice";

export const store = configureStore({
  reducer: {
    rooms: roomReducer,
  },
});
