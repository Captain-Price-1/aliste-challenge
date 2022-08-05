import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Rooms: [],
};

const RoomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    addRooms: (state, action) => {
      for (let i = 1; i <= action.payload; i++) {
        state.Rooms.push({
          id: i,
          RoomNumber: `Room No. ${i}`,
          RoomImage:
            "https://cdn.decoist.com/wp-content/uploads/2013/07/Simple-and-stylish-space-in-purple.jpg",
          switchBoards: [],
        });
      }
    },
    addSwitchBoards: (state, action) => {
      state.Rooms.map((item) => {
        if (item.id === action.payload.id) {
          for (let i = 1; i <= action.payload.switches; i++) {
            item.switchBoards.push({
              switchboardNumber: i,
              appliances: {
                fans: 0,
                lightLoad: 0,
                heavyLoad: 0,
              },
            });
          }
        }
      });
    },

    addAppliances: (state, action) => {
      if (action.payload.fans) {
        state.Rooms[action.payload.id - 1].switchBoards[
          action.payload.ID - 1
        ].appliances.fans = parseInt(action.payload.fans);
      } else if (action.payload.heavyLoad) {
        state.Rooms[action.payload.id - 1].switchBoards[
          action.payload.ID - 1
        ].appliances.heavyLoad = parseInt(action.payload.heavyLoad);
      } else if (action.payload.lightLoad) {
        state.Rooms[action.payload.id - 1].switchBoards[
          action.payload.ID - 1
        ].appliances.lightLoad = parseInt(action.payload.lightLoad);
      }
    },
    reset: (state, action) => {
      state.Rooms = [];
    },
    resetSwitches: (state, action) => {
      state.Rooms[action.payload.id - 1].switchBoards = [];
    },
  },
});

export const {
  addRooms,
  addSwitchBoards,
  addAppliances,
  reset,
  resetSwitches,
} = RoomSlice.actions;

export default RoomSlice.reducer;
