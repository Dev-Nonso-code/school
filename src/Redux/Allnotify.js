import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    gettingnotify: false,
    allnotify: [],
    gettingnotifyerror: null,
}

export const Allnotification = createSlice ({
    name: "allnotifys",
    initialState,
    reducers: {
        Gettingnotify: (state) =>{
           state.gettingnotify = true
           state.allnotify = []
           state.gettingnotifyerror = null
        },
        Gettingnotifysuccessful:(state, action) =>{
            state.Gettingnotify = false
            state.allnotify = action.payload
            state.gettingnotifyerror = null
        },
        GettingnotifyFailed:(state, action)=>{
            state.Gettingnotify = false
            state.allnotify = []
            state.gettingnotifyerror = action.payload
        },
        Markallasread:(state, action) =>{
            state.allnotify = action.payload.map((item) => ({...item, isread: true}))
        }
    }

})

export default Allnotification.reducer

export const {
    Gettingnotify,
    Gettingnotifysuccessful,
    GettingnotifyFailed,
    Markallasread
} = Allnotification.actions