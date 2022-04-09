import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {RouteNames} from "../router";
import {useNavigate} from "react-router-dom";

const Login: FC = () => {
    const { user } = useTypedSelector(state => state.auth);
    const {logout, setIsModal} = useActions();
    const router = useNavigate();

    return (
        <div className='main_on'>
            <h1>Привет, {user.username}</h1>
            <div className='main_buttons'>
                <button className='main_btn_login_on' onClick={() => {logout(); setIsModal(false);}}><p className='main_btn_login_name'>Выйти из аккаунта</p></button>
                <button className='main_btn_contacts_on' onClick={() => router(RouteNames.CONTACTS)}><p className='main_btn_contacts_name'>Перейти в контакты</p></button>
            </div>
        </div>
    );
};

export default Login;
