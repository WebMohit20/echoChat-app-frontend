import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails:null
};

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        auth:(state,action)=>{
            state.userDetails = action.payload.userDetails;
        },
    }
})

export const { auth } = authSlice.actions;
export default authSlice.reducer; 