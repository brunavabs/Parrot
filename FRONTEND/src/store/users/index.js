import { createSlice } from "@reduxjs/toolkit"

// export enum Permission {
//     "Nothing",
//     "User",
//     "Admin"
// }

// interface UserState {
//     isLogged: boolean,
//     accessToken: string,
//     permission: Permission
// }

const initialState = {
    isLogged: false,
    accessToken: "",
    permission: 'Nothing',
}

const usersSlice = createSlice({
    name: "@user",
    initialState,
    reducers:{
        //SignIn
        signIn(state, action){
            Object.assign(state, {
                isLogged: true,
                accessToken: action.payload.accessToken,
                permission: action.payload.permission
            })
        },
        //SignOut
        signOut(state){
            Object.assign(state, initialState)
        }
    }
})

export const { signIn, signOut } = usersSlice.actions

export default usersSlice.reducer;




