import {User, UsersConstants} from "./types";


const fetchLoggedInUser = () => ({type: UsersConstants.FETCH_LOGGED_IN_USER});

const loadUser = (user: User) => ({type: UsersConstants.LOAD_USER, payload: { user }});

const setIsUsedLoggedIn = (loggedIn: boolean) => ({type: UsersConstants.SET_IS_USER_LOGGED_IN, payload: { loggedIn }});

const UsersActions = {
    loadUser,
    setIsUsedLoggedIn,
    fetchLoggedInUser
}

export default UsersActions;
