import React, {FC} from 'react';
import "../App.css";
import MedLogoLeft from "../imgs/med1.png";
import MedLogoMiddle from "../imgs/med2.png";
import MedLogoRight from "../imgs/med3.png";
import {RouteNames} from "../router";
import {useNavigate} from "react-router-dom";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Modal from "../components/Modal";

const Main : FC = () => {
    const router = useNavigate();
    const {setIsModal} = useActions();
    const { isModal } = useTypedSelector(state => state.auth);

    return (
        <div className='main'>
            {isModal ?
                <Modal />
                :
                null
            }
            <h1>Место для получения медицинской помощи</h1>
            <div className='main_buttons'>
            <button className='main_btn_login' onClick={() => setIsModal(true)}><p className='main_btn_login_name'>Войти</p></button>
            <button className='main_btn_contacts' onClick={() => router(RouteNames.CONTACTS)}><p className='main_btn_contacts_name'>Контакты</p></button>
            </div>
            <div className='main_cards'>
                <div className='main_cards_elem order_online'>
                    <div className='main_cards_elem-data'>
                    <img className="main_med_logo" src={MedLogoLeft} alt="med_left" />
                    <h3 className='main_cards_name'>Онлайн-прием</h3>
                    <hr className='main_cards_hr' />
                    <p className='main_cards_text'>Рыба текст</p>
                    </div>
                </div>
                <div className='main_cards_elem order_emergency'>
                    <div className='main_cards_elem-data'>
                    <img className="main_med_logo" src={MedLogoMiddle} alt="med_middle" />
                    <h3 className='main_cards_name'>Экстренный Случай</h3>
                    <hr className='main_cards_hr' />
                    <p className='main_cards_text'>Рыба текст</p>
                        </div>
                </div>
                <div className='main_cards_elem order_cancer'>
                    <div className='main_cards_elem-data'>
                    <img className="main_med_logo" src={MedLogoRight} alt="med_right" />
                    <h3 className='main_cards_name'>Лечение рака</h3>
                    <hr className='main_cards_hr' />
                    <p className='main_cards_text'>Рыба текст</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
