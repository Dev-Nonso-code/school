import { createSlice } from '@reduxjs/toolkit'

 const initialState = {
   isfetching: false,
   alluser: [],
   fetchingerror: null,
   isposting: false,
   postingsuccess: null,
   postingerror: null,
 }

export const AlluserSlice = createSlice({
    name: "alluser",
    initialState,
    reducers: {
        FetchingUser: (state) =>{
          state.isfetching = true
          state.alluser = []
          state.fetchingerror = null
        },
        FetchingSuccessful: (state, action) =>{
            state.isfetching = false
            state.alluser = action.payload
            state.fetchingerror = null
        },
        FetchingFailed: (state, action) =>{
            state.isfetching = false
            state.alluser = []
            state.fetchingerror = action.payload
        },
        postingUser: (state) =>{
           state.isposting= true
           state.postingsuccess= null
           state.postingerror= null
        },
        postingSuccessful: (state, action) =>{
            state.isposting= false
            state.postingsuccess= action.payload
            state.postingerror= null
        },
        postingFailed: (state, action) =>{
            state.isposting= false
            state.postingsuccess= null
            state.postingerror= action.payload
        },

    },
  })
    

  export default AlluserSlice.reducer
  export const {
    FetchingUser,
    FetchingSuccessful,
    FetchingFailed,
    postingUser,
    postingSuccessful,
    postingFailed,
  } = AlluserSlice.actions