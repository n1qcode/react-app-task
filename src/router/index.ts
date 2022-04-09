import React from "react";
import Login from "../pages/Login";
import Contacts from "../pages/Contacts";
import Main from "../pages/Main";


export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    CONTACTS = '/contacts',
    LOGIN = '/login',
    MAIN = '/'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.MAIN, element: Main}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: Login}
]

export const contactsRoutes: IRoute[] = [
    {path: RouteNames.CONTACTS, element: Contacts}
]
