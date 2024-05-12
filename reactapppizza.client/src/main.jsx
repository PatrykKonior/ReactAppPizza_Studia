import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css';
//import {
//    createBrowserRouter,
//    RouterProvider,
//} from "react-router-dom";
import "./index.css";
import { Towar } from './towar/TowarPage.jsx';
import { Layout } from './layout/Layout.jsx';
import { Sprzedaz } from './sprzedaz/SprzedazPage.jsx';
import { Deklaracje } from './pracownik/DeklaracjePage.jsx';
import { Dokumenty } from './dokumenty/DokumentyPage.jsx';
import { Zestawienia } from './zestawienia/ZestawieniaPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Magazyn } from './magazyn/MagazynPage.jsx';
import { Grafik } from './grafik/GrafikPage.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                <Route path='/towar' element={<Layout />}>
                    <Route index element={<Towar />} />
                </Route>
                <Route path='/sprzedaz' element={<Layout />}>
                    <Route index element={<Sprzedaz />} />
                </Route>
                <Route path='/pracownik' element={<Layout />}>
                    <Route index element={<Deklaracje />} />
                </Route>
                <Route path='/dokumenty' element={<Layout />}>
                    <Route index element={<Dokumenty />} />
                </Route>
                <Route path='/zestawienia' element={<Layout />}>
                    <Route index element={<Zestawienia />} />
                </Route>
                <Route path='/grafik' element={<Layout />}>
                    <Route index element={<Grafik />} />
                </Route>
                <Route path='/magazyn' element={<Layout />}>
                    <Route index element={<Magazyn />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
