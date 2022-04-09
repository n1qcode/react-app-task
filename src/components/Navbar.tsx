import React, {FC} from 'react';
import "../App.css";
import Logo from "../imgs/logo.png"
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
    const router = useNavigate();
    const { isAuth } = useTypedSelector(state => state.auth);
    const {logout, setIsModal} = useActions();


    return (
        <div className='header'>
            <img className="logo_header" src={Logo} alt="logo" />
            <div className='header_buttons'>
                <button className='header_buttons_contacts' onClick={() => router(RouteNames.CONTACTS)}><p className='header_btn_contacts_name'>Контакты</p></button>
                {isAuth
                ?
                    <button className='header_buttons_login'
                            onClick={() => {logout(); setIsModal(false);}}
                            key={1}
                    >
                        <p className='header_btn_login_name'>Выйти</p></button>
                :
                    <button className='header_buttons_login'
                            onClick={() => setIsModal(true)}
                            key={1}
                    >
                        <p className='header_btn_login_name'>Войти</p></button>
                }
            </div>
        </div>
    );
};

export default Navbar;
