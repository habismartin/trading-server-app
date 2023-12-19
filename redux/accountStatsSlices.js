import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import axios from "axios";
import baseURL from '../utilities/baseURL';

//fetch all action
export const fetchAllStatsAction = createAsyncThunk("/admin/fetch", async (payload, { rejectWithValue, getState, dispatch })=>{
    //get user token from store
    const userToken = getState()?.user?.userAuth?.token;
    const config = {
        headers:{
            'Content-Type': 'application/json',
            Authorization : `Bearer ${userToken}`
        },
    };
    try {
        //http call
        const { data } = await axios.get(`${baseURL}/admin`,config);
        return data;
        
    } catch (error) {
        if(!error?.response){
            throw error;
        }
        return rejectWithValue(error?.response?.data)
    }
});

const statsSlice = createSlice({
    name: 'statistics',
    initialState: {},
    extraReducers:(builder)=>{
        //fetch stats
        builder.addCase(fetchAllStatsAction.pending,(state, action)=>{
            state.loading = true;
        })
        builder.addCase(fetchAllStatsAction.fulfilled,(state, action)=>{
            state.loading = false;
            state.stats = action?.payload;
            state.appErr = undefined;
            state.serverErr = undefined; 
        })
        builder.addCase(fetchAllStatsAction.rejected,(state, action)=>{
            state.loading = false;
            state.appErr = action?.payload?.msg;
            state.serverErr = action?.error?.msg; 
        })
    }
});

export default statsSlice.reducer