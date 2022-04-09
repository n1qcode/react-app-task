import {AuthActionsEnum, SetAuthAction, SetUserAction, SetIsLoadingAction, SetErrorAction, SetIsModal} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";


export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: auth}),
    setIsModal: (payload: boolean): SetIsModal => ({type: AuthActionsEnum.SET_IS_MODAL, payload}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout(async () => {
                const response = await axios.get<IUser[]>('./users.json');
                const mockUser = response.data.find(user => user.username === username && user.password === password);
                if (mockUser) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUser.username);
                    dispatch(AuthActionCreators.setIsAuth(true));
                    dispatch(AuthActionCreators.setUser(mockUser));
                } else {
                    dispatch(AuthActionCreators.setError('Неверный логин или пароль'));
                }
                if (password.length < 8) {
                    dispatch(AuthActionCreators.setError('Пароль должен быть не меньше 8 символов'));
                }
                dispatch(AuthActionCreators.setIsLoading(false));
                dispatch(AuthActionCreators.setIsModal(false));
            }, 1000);
        } catch (e) {
            dispatch(AuthActionCreators.setError('Ошибка при входе'));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
            localStorage.removeItem('auth');
            localStorage.removeItem('username');
            dispatch(AuthActionCreators.setUser({} as IUser));
            dispatch(AuthActionCreators.setIsAuth(false));
    }
}
