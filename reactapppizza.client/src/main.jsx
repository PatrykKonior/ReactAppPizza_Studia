import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css';
import "./index.css";
import { Towar } from './towar/TowarPage.jsx';
import { Layout as SystemLayout } from './layout/Layout.jsx';
import { Sprzedaz } from './sprzedaz/SprzedazPage.jsx';
import { Deklaracje } from './pracownik/DeklaracjePage.jsx';
import { Dokumenty } from './dokumenty/DokumentyPage.jsx';
import { Zestawienia } from './zestawienia/ZestawieniaPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Magazyn } from './magazyn/MagazynPage.jsx';
import { Grafik } from './grafik/GrafikPage.jsx';
import Home from './Client/components/Home/HomePage.jsx';
import Menu from './Client/components/Menu/MenuPage.jsx';
import Kontakt from './Client/components/Contact/ContactPage.jsx';
import Login from './Client/components/Login/LoginComponent.jsx';
import PizzaLayout from './Client/components/ClientLayout/ClientLayout.jsx';
import CartPage from './Client/components/ShoppingCard/CartPage.jsx';
import { CartProvider } from './Client/components/ShoppingCard/CartContext'; // Import CartProvider


// Funkcja do sprawdzania, czy u¿ytkownik powinien zobaczyæ stronê klienta
function ClientRoutes() {
    const path = window.location.pathname;

    // Warunki dla strony klienta
    if (path === '/' || path.startsWith('/menu') || path.startsWith('/kontakt') || path.startsWith('/login')) {
        return (
            <CartProvider>
            <Routes>
                <Route path="/" element={<PizzaLayout />}>
                    <Route index element={<Home />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="kontakt" element={<Kontakt />} />
                    <Route path="login" element={<Login />} />
                    <Route path="koszyk" element={<CartPage />} />
                </Route>
                </Routes>
            </CartProvider>
        );
    }

    // Domyœlnie zwraca istniej¹ce systemowe komponenty
    return (
        <Routes>
            <Route path="/system" element={<SystemLayout />}>
                <Route index element={<App />} />
            </Route>
            <Route path="/towar" element={<SystemLayout />}>
                <Route index element={<Towar />} />
            </Route>
            <Route path="/sprzedaz" element={<SystemLayout />}>
                <Route index element={<Sprzedaz />} />
            </Route>
            <Route path="/pracownik" element={<SystemLayout />}>
                <Route index element={<Deklaracje />} />
            </Route>
            <Route path="/dokumenty" element={<SystemLayout />}>
                <Route index element={<Dokumenty />} />
            </Route>
            <Route path="/zestawienia" element={<SystemLayout />}>
                <Route index element={<Zestawienia />} />
            </Route>
            <Route path="/grafik" element={<SystemLayout />}>
                <Route index element={<Grafik />} />
            </Route>
            <Route path="/magazyn" element={<SystemLayout />}>
                <Route index element={<Magazyn />} />
            </Route>
        </Routes>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ClientRoutes />
        </BrowserRouter>
    </React.StrictMode>
);