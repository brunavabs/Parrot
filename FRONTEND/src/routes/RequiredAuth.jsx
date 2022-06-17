import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import usersSlice from '../store/users'

function RequireAuth({ children }) {
    let location = useLocation();
    const isLogged = useSelector((state) => state.usersSlice.isLogged)

    if (!isLogged) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
}

export default RequireAuth;