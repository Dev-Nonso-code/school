// import { createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//     name: "counter",
//     initialState:{
//         count:0,
//         myName: "Obasi"
//     },
//     reducers:{
//         increment:(state)=>{
//             state.count += 1 
//         },
//         decrement:(state)=>{
//             state.count -= 2
//         }
//     }
// })

// export default counterSlice.reducer;
// export const {increment, decrement} = counterSlice.actions

import { createSlice } from "@reduxjs/toolkit";
// import { Nav } from "../component/Navbar component/Nav";
const counterSlice = createSlice({
    
    name: "counter",
    initialState :{
         count:0,
         myName: "nonsoglobal"
    },
    reducers:{
        increment:(state)=>{ 
            state.count += 1
        },
        decrement:(state)=>{
            state.count -= 1
        },
        changeMyName:(state)=>{
            state.myName = "Obasi"
        },
        incrementByUser:(state,actions)=>{
          state.count = state.count + actions.payload
        }
    }
})

export const {increment,decrement, changeMyName, incrementByUser} = counterSlice.actions
export default counterSlice.reducer;