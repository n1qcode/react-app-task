import React, {FC} from 'react';
import {RouteNames} from "../router";
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Contacts: FC = () => {
    const router = useNavigate();
    const { isAuth } = useTypedSelector(state => state.auth)

    return (
        <div className='main_contacts'>
            <h1>Контакты</h1>
            <div className='main_buttons'>
                <button className='main_btn_contacts_on' onClick={isAuth ? () => router(RouteNames.LOGIN) : () => router(RouteNames.MAIN)}><p className='main_btn_contacts_name'>Вернуться на главную</p></button>
            </div>
        </div>
    );
};

export default Contacts;
