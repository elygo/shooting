import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: sessionStorage.getItem("loggedIn") || false,
  activeMenuIndex: Number(sessionStorage.getItem("activeMenuIndex")) || 0,
};

let userSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    setLogged: function (state, action) {
      if (!action.payload) {
        state.loggedIn = false;
      } else {
        state.loggedIn = true;
      }
      sessionStorage.setItem("loggedIn", JSON.stringify(state.loggedIn));
    },
    setActiveMenuIndex: function (state, action) {
      state.activeMenuIndex = action.payload;
      sessionStorage.setItem(
        "activeMenuIndex",
        JSON.stringify(state.activeMenuIndex)
      );
      return state;
    },
  },
});

export const { setLogged, setActiveMenuIndex } = userSlice.actions;
export default userSlice.reducer;
