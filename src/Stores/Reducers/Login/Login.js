import { createSlice } from '@reduxjs/toolkit'

export const LoginSlice = createSlice({
    name: 'Login',
    initialState: {
        UserName: "",
        Password: "",
        CheckMeOut: false,
        ForgotPassword: false,
        IsLoading:false
    },
    reducers: {
        UserNameChanged: (state, action) => {
            state.UserName = action.payload;
        },
        PasswordChanged: (state, action) => {
            state.Password = action.payload;
        },
        CheckMeOutChanged: state => {
            state.CheckMeOut = !state.CheckMeOut;
        },
        ForgotPasswordChanged: state => {
            state.ForgotPassword = !state.ForgotPassword;
        },
        LoadingPage: state => {
            state.IsLoading = !state.IsLoading;
        }
    }
})

// Action creators are generated for each case reducer function
export const { UserNameChanged, PasswordChanged, CheckMeOutChanged,ForgotPasswordChanged } = LoginSlice.actions

export default LoginSlice.reducer