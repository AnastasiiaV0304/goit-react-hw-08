import { createSlice } from "@reduxjs/toolkit";
import { initialContact } from "../redux/contactsSlice";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: initialContact.filters.name,
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload.inputValue;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const selectNameFilter = (state) => state.filters.name;

export const filtersReducer = filtersSlice.reducer;
