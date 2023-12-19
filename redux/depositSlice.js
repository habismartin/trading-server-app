import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import axios from "axios";
import baseURL from '../utilities/baseURL';

//actions for refreshing
export const resetDepositCreated = createAction("depositmenu/reset")
export const resetDepositUpdated = createAction("admindeposit/update")

//deposit action
export const depositAction = createAsyncThunk("/depositmenu", async (payload, { rejectWithValue, getState, dispatch })=>{
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
        const { data } = await axios.post(`${baseURL}/depositmenu`, payload, config);
        dispatch(resetDepositCreated())
        return data;
        
    } catch (error) {
        if(!error?.response){
            throw error;
        }
        return rejectWithValue(error?.response?.data)
    }
});

//fetch all action
export const fetchAllDepositAction = createAsyncThunk("/depositmenu/fetch", async (payload, { rejectWithValue, getState, dispatch })=>{
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
        const { data } = await axios.get(`${baseURL}/depositmenu?page=${payload}`,config);
        return data;
        
    } catch (error) {
        if(!error?.response){
            throw error;
        }
        return rejectWithValue(error?.response?.data)
    }
});

//update deposit action
export const updateDepositAction = createAsyncThunk("/admindeposit/update", async (payload, { rejectWithValue, getState, dispatch })=>{
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
        const { data } = await axios.put(`${baseURL}/admindeposit/${payload?.id}`, payload, config);
        dispatch(resetDepositUpdated())
        return data;
        
    } catch (error) {
        if(!error?.response){
            throw error;
        }
        return rejectWithValue(error?.response?.data)
    }
});

const depositSlice = createSlice({
    name: 'deposit',
    initialState: {},
    extraReducers:(builder)=>{
        //create deposit
        builder.addCase(depositAction.pending,(state, action)=>{
            state.loading = true;
        })
        //reset action
        builder.addCase(resetDepositCreated, (state, action)=>{
            state.isDepositCreated = true
        })
        builder.addCase(depositAction.fulfilled,(state, action)=>{
            state.loading = false;
            state.depositCreated = action?.payload;
            state.appErr = undefined;
            state.serverErr = undefined; 
            state.isDepositCreated = false
        })
        builder.addCase(depositAction.rejected,(state, action)=>{
            state.loading = false;
            state.appErr = action?.payload?.msg;
            state.serverErr = action?.error?.msg; 
        })

        //fetch deposit
        builder.addCase(fetchAllDepositAction.pending,(state, action)=>{
            state.loading = true;
        })
        builder.addCase(fetchAllDepositAction.fulfilled,(state, action)=>{
            state.loading = false;
            state.depositList = action?.payload;
            state.appErr = undefined;
            state.serverErr = undefined; 
        })
        builder.addCase(fetchAllDepositAction.rejected,(state, action)=>{
            state.loading = false;
            state.appErr = action?.payload?.msg;
            state.serverErr = action?.error?.msg; 
        })

        //update deposit
        builder.addCase(updateDepositAction.pending,(state, action)=>{
            state.loading = true;
        })
        //reset action
        builder.addCase(resetDepositUpdated, (state, action)=>{
            state.isDepositUpdated = true
         })
        builder.addCase(updateDepositAction.fulfilled,(state, action)=>{
            state.loading = false;
            state.depositUpdated = action?.payload;
            state.appErr = undefined;
            state.serverErr = undefined; 
            state.isDepositUpdated = false;
        })
        builder.addCase(updateDepositAction.rejected,(state, action)=>{
            state.loading = false;
            state.appErr = action?.payload?.msg;
            state.serverErr = action?.error?.msg; 
        })
    }
});

export default depositSlice.reducer