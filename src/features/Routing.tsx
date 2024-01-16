import {RouteObject, useRoutes} from "react-router-dom";
import {Layout} from "../components/Layout";
import {TodoForm} from "./todo/TodoForm";
import {ErrorPage} from "./error/ErrorPage";
import {TodoList} from "./todo/TodoList";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/todo",
                element: <TodoList/>
            },
            {
                path: "/todo/new",
                element: <TodoForm/>
            },
            {
                path: "/todo/:id",
                element: <TodoForm/>
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    }
]
export const Routing = () => {
    return useRoutes(routes); //hook dostarczajacy implementacje logiki do podmiany komponentu ze wzgledu na adres gdzie znajduje sie user
}