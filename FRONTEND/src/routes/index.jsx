import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import Feed from '../Pages/Feed';
import Profile from "../Pages/Profile";
import Editar from "../Pages/Editar";

import RequireAuth from "./RequiredAuth";

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Cadastro />} />
                <Route path="/feed" element={<RequireAuth><Feed /></RequireAuth>}/>
                <Route path="/profile/:id" element={<RequireAuth><Profile/></RequireAuth>}/>
                <Route path="/edit/:id" element={<RequireAuth><Editar/></RequireAuth>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;