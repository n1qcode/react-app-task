import React, {FC} from 'react';
import {Card} from "antd";
import LoginForm from "./LoginForm";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Modal: FC = () => {
    const { isModal } = useTypedSelector(state => state.auth);
    return (
        isModal ?
            <div className='modal_form_login'>
                <div className='modal_form_login-body'>
                    <Card>
                        <LoginForm />
                    </Card>
                </div>
            </div>
                :
                null
    );
};

export default Modal;
