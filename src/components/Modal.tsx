import React, {FC} from 'react';
import {Card} from "antd";
import LoginForm from "./LoginForm";

const Modal: FC = () => {
    return (
        <div className='modal_form_login'>
            <div className='modal_form_login-body'>
                <Card>
                    <LoginForm />
                </Card>
            </div>
        </div>
    );
};

export default Modal;
