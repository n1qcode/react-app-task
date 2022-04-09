import React, {FC, useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import "./App.css";
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";

const App:FC = () => {
    const {setIsAuth, setUser} = useActions();

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')} as IUser);
            setIsAuth(true);
        }
    });

    return (
        <div>
            <Navbar />
                <AppRouter />
        </div>
    );
};

export default App;
