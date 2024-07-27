/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
import { createSlice } from "@reduxjs/toolkit";
import { FetchingUser } from "./AlluserSlice";

const initialState = {
  isgetting: false,
  allthrift: null,
  gettingerror: null,
  isposting: false,
  postingsuccess: null,
  postingerror: null,
  isfetching: false,
  onethrift: null,
  fetchingerror: null,
  isposting: false,
  postingsuccess: null,
  postingerror: null,
};

export const AllthriftSlice = createSlice({
  name: "allthrifts",
  initialState,
  reducers: {
    GettingThrift: (state) => {
      state.isgetting = true;
      state.allthrift = null;
      state.gettingerror = null;
    },
    GettingSuccessful: (state, action) => {
      state.isgetting = false;
      state.allthrift = action.payload;
      state.gettingerror = null;
    },
    GettingFailed: (state, action) => {
      state.isgetting = false;
      state.allthrift = null;
      state.gettingerror = action.payload;
    },
    PostingThrift: (state) => {
      state.isposting = true;
      state.postingsuccess = null;
      state.postingerror = null;
    },
    PostingSuccessful: (state, action) => {
      state.isposting = false;
      state.postingsuccess = action.payload;
      state.postingerror = null;
    },
    PostingFailed: (state, action) => {
      state.isposting = false;
      state.postingsuccess = null;
      state.postingerror = action.payload;
    },
    FetchingThrift: (state) => {
      state.isgetting = true;
      state.onethrift = null;
      state.gettingerror = null;
    },
    FetchingthriftSuccessful: (state, action) => {
      state.isgetting = false;
      state.onethrift = action.payload;
      state.gettingerror = null;
    },
    FetchingthriftFailed: (state, action) => {
      state.isgetting = false;
      state.onethrift = null;
      state.gettingerror = action.payload;
    },
    PostingThrift: (state) => {
      state.isposting = true;
      state.postingsuccess = null;
      state.postingerror = null;
    },
  },
});

export default AllthriftSlice.reducer;
export const {
  PostingFailed,
  PostingSuccessful,
  PostingThrift,
  GettingFailed,
  GettingSuccessful,
  GettingThrift,
  FetchingThrift,
  FetchingthriftSuccessful,
  FetchingthriftFailed,
} = AllthriftSlice.actions;
