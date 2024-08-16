import { createSlice } from "@reduxjs/toolkit";
const initialState = () => {
  try {
    const serializedState = localStorage.getItem("user");
    if (serializedState === null) {
      return { user: JSON.parse(serializedState) };
    }
    return { user: JSON.parse(serializedState) };
  } catch (error) {
    return { user: null };
  }
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
