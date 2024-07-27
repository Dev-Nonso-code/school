import { configureStore } from "@reduxjs/toolkit";
import AlluserSlice from "./AlluserSlice";
import AlladminSlice from "./AlladminSlice";
import AllthriftSlice from "./Allmeus";
import Allnotification from "./Allnotify";
import message from "./Allmessage";
import joinslice from "./Checkall";
export const store = configureStore({
  reducer: {
    AlladminSlice,
    AlluserSlice,
    AllthriftSlice,
    Allnotification,
    message,
    joinslice,
  },
});
