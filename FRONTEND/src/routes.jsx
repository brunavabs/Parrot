import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/";
import Cadastro from "./Pages/Cadastro/";
import Feed from '././Pages/Feed';
import Profile from "./Pages/Profile";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Cadastro />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/profile/:id" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;