import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "redux/auth/actions";
import { AppState } from "redux/store";

const useLoggedIn = (): boolean | undefined => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state: AppState) => state.auth.loggedIn);

    if (isLoggedIn === undefined) {
        dispatch(checkAuth());
    } else {
        return isLoggedIn;
    }

    return undefined;
};

export default useLoggedIn;
