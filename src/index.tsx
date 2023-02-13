import React from 'react';
import './index.css';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import {Cart} from "./features/Cart/Cart";
import {App} from "./features/Layout/App";
import DrillsPage from "./features/DrillsPage";
import ReactDOM from 'react-dom/client';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<App/>}>
        <Route index element={<DrillsPage/>}/>
        <Route path={'/cart'} element={<Cart/>}/>

    </Route>
));
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>

    </React.StrictMode>
);


