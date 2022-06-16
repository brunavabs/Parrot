import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    name: "",
    isLogged: false,
    accessToken: "",
    permission: 'Nothing',
}

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        signIn(state, action){
            Object.assign(state, {
                name: action.payload.name,
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
// export const selectUser = (state) => state.isLogged
// console.log(selectUser)

export default usersSlice.reducer;




