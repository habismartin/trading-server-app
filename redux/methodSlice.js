import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    methodList : []
}

export const methodSlice = createSlice({
    name : "method",
    initialState,
    reducers : {
        setDataMethod : (state,action)=>{
            state.methodList = [...action.payload]
        }
    }
})

export const {setDataMethod} = methodSlice.actions

export default methodSlice.reducer