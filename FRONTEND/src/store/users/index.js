import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "",
    isLogged: false,
    accessToken: "",
    permission: 'Nothing',
    apartament: "",
    id: ""
}

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        signIn(state, action){
            Object.assign(state, {
                id: action.payload.id,
                name: action.payload.name,
                apartament: action.payload.apartament,
                isLogged: true,
                accessToken: action.payload.accessToken,
                permission: action.payload.permission
            })
        },
        signOut(state){
            Object.assign(state, initialState)
        }
    }
})

export const { signIn, signOut } = usersSlice.actions

export default usersSlice.reducer;




