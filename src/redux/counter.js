import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState:{
        count:0,
        myName: "Obasi"
    },
    reducers:{
        increment:(state)=>{
            state.count += 1 
        },
        decrement:(state)=>{
            state.count -= 2
        }
    }
})

export default counterSlice.reducer;
export const {increment, decrement} = counterSlice.actions