
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthIsSignedIn } from 'redux/auth.selectors';

const RestrictedRoute = ({ children, redirectTo = '/contacts' }) => {
    const isSignedIn = useSelector(selectAuthIsSignedIn);
    return isSignedIn ? <Navigate to={redirectTo} replace/>  : children ;
}

export default RestrictedRoute;
