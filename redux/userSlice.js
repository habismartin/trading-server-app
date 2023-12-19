import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import axios from "axios";
import baseURL from '../utilities/baseURL';

//actions for refreshing
export const resetUserUpdated = createAction("/adminusers/update")

//signup action
export const signupAction = createAsyncThunk("/signup", async (payload, { rejectWithValue, getState, dispatch })=>{
    const config = {
        headers:{
            'Content-Type': 'application/json',
        },
    };
    try {
        //http call
        const { data } = await axios.post(`${baseURL}/signup`, payload, config);
        return data;
        
    } catch (error) {
        if(!error?.response){
            throw error;
        }
        return rejectWithValue(error?.response?.data)
    }
});


//login action
export const loginAction = createAsyncThunk("/login", async (payload, { rejectWithValue, getState, dispatch })=>{
    const config = {
        headers:{
            'Content-Type': 'application/json',
        },
    };
    try {
        //http call
        const { data } = await axios.post(`${baseURL}/login`, payload, config);
        //save browser into local storage
        localStorage.setItem('userInfo', JSON.stringify(data));
        return data;
        
    } catch (error) {
        if(!error?.response){
            throw error;
        }
        return rejectWithValue(error?.response?.data)
    }
});

//update localstorage
export const updateStorage = createAsyncThunk()

//logout
export const logout = createAsyncThunk('/logout', async(payload,{rejectWithValue, getState, dispatch }) =>{
    try {
        localStorage.removeItem('userInfo');
    } catch (error) {
        if(!error?.response){
            throw error;
        }
        return rejectWithValue(error?.response?.data)
    }
})


//fetch all action
export const fetchAllUserAction = createAsyncThunk("/adminusers/fetch", async (payload, { rejectWithValue, getState, dispatch })=>{
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
        const { data } = await axios.get(`${baseURL}/adminusers?page=${payload}`,config);
        return data;
        
    } catch (error) {
        if(!error?.response){
            throw error;
        }
        return rejectWithValue(error?.response?.data)
    }
});


  //update user action
export const updateUserAction = createAsyncThunk("/adminusers/update", async (payload, { rejectWithValue, getState, dispatch })=>{
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
        const { data } = await axios.put(`${baseURL}/adminusers/${payload?.id}`, payload, config);
        return data;
        
    } catch (error) {
        if(!error?.response){
            throw error;
        }
        return rejectWithValue(error?.response?.data)
    }
});


////profile action
export const userProfileAction = createAsyncThunk("/profile", async (payload, { rejectWithValue, getState, dispatch })=>{
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
        const { data } = await axios.get(`${baseURL}/profile`, config);
        return data;
        
    } catch (error) {
        if(!error?.response){
            throw error;
        }
        return rejectWithValue(error?.response?.data)
    }
});
//// update profile action
export const updateProfileAction = createAsyncThunk("/account", async (payload, { rejectWithValue, getState, dispatch })=>{
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
        const { data } = await axios.put(`${baseURL}/account`,{
            image: payload?. image,
            firstName: payload?. firstName,
            lastName: payload?. lastName,
            email: payload?. email,
            address: payload?. address,
            dob: payload?. dob,
            country: payload?.country ,
            currency: payload?. currency,
        }, config);
        return data;
        
    } catch (error) {
        if(!error?.response){
            throw error;
        }
        return rejectWithValue(error?.response?.data)
    }
});


//get user from local storage and place in store
const userLoginFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): undefined;

//slices
const userSlice = createSlice({
    name: 'users',
    initialState: {
        userAuth: userLoginFromStorage,
        userLoading: false,
        userAppErr: undefined,
        userServerErr: undefined,
    },
    extraReducers: (builder) =>{
        //login action
        //handle pending state
        builder.addCase(loginAction.pending,(state, action)=>{
            state.userLoading = true;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
        });
        //handle success state
        builder.addCase(loginAction.fulfilled, (state, action)=>{
            state.userAuth = action?.payload;
            state.userLoading = false;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
        })
        //handle rejected state
        builder.addCase(loginAction.rejected, (state, action)=>{
            state.userLoading = false;
            state.userAppErr = action?.payload?.msg;
            state.userServerErr = action?.error?.msg;

        })

        //signup action
        //handle pending state
        builder.addCase(signupAction.pending,(state,action)=>{
            state.userLoading = true;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
        });
        //handle success state
        builder.addCase(signupAction.fulfilled, (state, action)=>{
            state.isRegistered = action?.payload;
            state.userLoading = false;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
        })
        //handle rejected state
        builder.addCase(signupAction.rejected, (state, action)=>{
            state.userLoading = false;
            state.userAppErr = action?.payload?.msg;
            state.userServerErr = action?.error?.msg;
        })

        //logout
        builder.addCase(logout.fulfilled,(state,action)=>{
            state.userAuth = undefined;
            state.userLoading = false;
        })

        //fetch action
        //handle pending state
        builder.addCase(fetchAllUserAction.pending,(state,action)=>{
            state.userLoading = true;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
        });
        //handle success state
        builder.addCase(fetchAllUserAction.fulfilled, (state, action)=>{
            state.userLoading = false;
            state.userList = action?.payload;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
        })
        //handle rejected state
        builder.addCase(fetchAllUserAction.rejected, (state, action)=>{
            state.userLoading = false;
            state.userAppErr = action?.payload?.msg;
            state.userServerErr = action?.error?.msg;

        })

        //profile action
        //handle pending state
        builder.addCase(userProfileAction.pending,(state,action)=>{
            state.userLoading = true;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
        });
        //handle success state
        builder.addCase(userProfileAction.fulfilled, (state, action)=>{
            state.profile = action?.payload;
            state.userLoading = false;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
        })
        //handle rejected state
        builder.addCase(userProfileAction.rejected, (state, action)=>{
            state.userLoading = false;
            state.userAppErr = action?.payload?.msg;
            state.userServerErr = action?.error?.msg;
        })

        // update profile action
        //handle pending state
        builder.addCase(updateProfileAction.pending,(state,action)=>{
            state.userLoading = true;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
        });
        //handle success state
        builder.addCase(updateProfileAction.fulfilled, (state, action)=>{
            state.userUpdate = action?.payload;
            state.userLoading = false;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
                          // Update localStorage
        localStorage.setItem('userInfo', JSON.stringify({
            ...JSON.parse(localStorage.getItem('userInfo')),
            email: action?.payload?.email,
            firstName: action?.payload?.firstName,
            lastName: action?.payload?.lastName,
            image: action?.payload?.image,
            phone: action?.payload?.phone,
            country: action?.payload?.country,
            address: action?.payload?.address,
            dob: action?.payload?.dob,
            currency: action?.payload?.currency,
        }));
        })
        //handle rejected state
        builder.addCase(updateProfileAction.rejected, (state, action)=>{
            state.userLoading = false;
            state.userAppErr = action?.payload?.msg;
            state.userServerErr = action?.error?.msg;
        })


        // update user action
        //handle user state
        builder.addCase(updateUserAction.pending,(state,action)=>{
            state.userLoading = true;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
        });
        //handle success state
        builder.addCase(updateUserAction.fulfilled, (state, action)=>{
            state.userUpdated = action?.payload;
            state.userLoading = false;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
            localStorage.setItem('userInfo', JSON.stringify({
                ...JSON.parse(localStorage.getItem('userInfo')),
                balance:action?.payload?.balance,
                email: action?.payload?.email,
                firstName: action?.payload?.firstName,
                lastName: action?.payload?.lastName,
                image: action?.payload?.image,
                phone: action?.payload?.phone,
                country: action?.payload?.country,
                address: action?.payload?.address,
                dob: action?.payload?.dob,
                currency: action?.payload?.currency,
            }));
        })
        //handle rejected state
        builder.addCase(updateUserAction.rejected, (state, action)=>{
            state.userLoading = false;
            state.userAppErr = action?.payload?.msg;
            state.userServerErr = action?.error?.msg;
        })
    }
    

})

export default userSlice.reducer;