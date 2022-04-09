import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {contactsRoutes, privateRoutes, publicRoutes} from "../router";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const { isAuth } = useTypedSelector(state => state.auth);
    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path}
                           element={<route.element/>}
                           key={route.path}
                    />
                )}
                {contactsRoutes.map(route =>
                    <Route path={route.path}
                           element={<route.element/>}
                           key={route.path}
                    />
                )}
                <Route path={'*'} element={<Navigate replace to={RouteNames.LOGIN} />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path}
                           element={<route.element/>}
                           key={route.path}
                    />
                )}
                {contactsRoutes.map(route =>
                    <Route path={route.path}
                           element={<route.element/>}
                           key={route.path}
                    />
                )}
                <Route path={'*'} element={<Navigate replace to={RouteNames.MAIN} />} />
            </Routes>
    );
};

export default AppRouter;
