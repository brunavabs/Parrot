import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/Login/";
import Cadastro from "./Pages/Cadastro/";
import Feed from '././Pages/Feed';
import Profile from "./Pages/Profile";

import { useSelector } from "react-redux"
import { signIn } from './store/users';


const AppRoutes = () => {
    const user = useSelector(signIn)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Cadastro />} />
                {user.payload.usersSlice.isLogged ? <Route path="/feed" element={<Feed/>}/> : <Route path="/" element={<Navigate to="/"/>} />}
                {user.payload.usersSlice.isLogged ? <Route path="/profile/:id" element={<Profile/>}/> : <Route path="/" element={<Login />} />}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;