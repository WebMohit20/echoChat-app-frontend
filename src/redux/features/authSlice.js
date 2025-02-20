import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { login,register } from "../../API/authApi/authapi";
const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
};

export const loginUser = createAsyncThunk(
    "auth/login",
    async ({userDetails,navigate}) => {
        try {
            console.log(userDetails);
            const user = await login(userDetails);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/dashboard");
            console.log(user);
            return user;
        } catch (error) {
            console.log(error);
        }
    }
)

export const registerUser = createAsyncThunk(
    "auth/register",
    async ({userDetails,navigate}) => {
        try {
            const user = await register(userDetails);
            navigate("/login");
            return user;
        } catch (error) {
            console.log(error);
        }
        
    }
)

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout:(state) => {
            localStorage.removeItem("user");
            state.user = null;
          },
    },
    extraReducers:(builder) =>{
        builder
            .addCase(loginUser.pending,(state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                })
                .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                })
                .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                });
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer; 