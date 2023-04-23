import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions) => {
        console.log(actions.payload);
        state.user= {...actions.payload}
    },
    logoutUser: (state) => {
        state.user= {}
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser , logoutUser  } = userSlice.actions

export default userSlice.reducer;
