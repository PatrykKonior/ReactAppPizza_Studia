import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch, faBell, faUserCircle, faCog,
    faChartLine, faBox, faUsers, faClipboardList,
    faClipboardCheck, faFileInvoice, faBoxOpen, faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

export function Layout() {
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case '/towar':
                return 'Dodaj towar';
            case '/sprzedaz':
                return 'Zarejestruj sprzeda¿';
            case '/magazyn':
                return 'Aktualny stan magazynu';
            case '/grafik':
                return 'Aktualny grafik';
            case '/dokumenty':
                return 'Aktualne dokumenty';
            case '/pracownik':
                return 'Wybierz deklaracje';
            case '/zestawienia':
                return 'Aktualne zestawienia';
            default:
                return 'Dzien dobry!';
        }
    };

    const titleStyle = {
        fontSize: '35px',
        fontFamily: 'Montserrat, sans-serif',
        margin: '20px 0'
    };

    return (
        <div>
            <Container fluid>
                <Navbar className="navbar-custom" expand="lg" sticky="top">
                    <Container fluid>
                        {location.pathname === '/' && (
                            <Navbar.Brand className="me-auto" style={titleStyle}>
                                Dzien dobry!
                            </Navbar.Brand>
                        )}
                        <Nav className="ms-auto nav-icons">
                            <Nav.Link href="#notifications">
                                <FontAwesomeIcon icon={faBell} className="icon" />
                            </Nav.Link>
                            <Nav.Link href="#profile">
                                <FontAwesomeIcon icon={faUserCircle} className="icon" />
                            </Nav.Link>
                            <Nav.Link href="#settings">
                                <FontAwesomeIcon icon={faCog} className="icon" />
                            </Nav.Link>
                            <div className="search-box">
                                <input type="search" placeholder="Szukaj..." aria-label="Szukaj" />
                                <button type="submit">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </Nav>
                    </Container>
                </Navbar>
                <div className="d-flex">
                    <div className="sidebar">
                        <Navbar.Brand href="#home" className="logo">
                            <header className="header">
                                <h1>Pizza 365</h1>
                            </header>
                        </Navbar.Brand>
                        <div className="menu-header">MENU</div>
                        <Nav defaultActiveKey="/" className="flex-column">
                            <Nav.Link as={Link} to="/" className="sidebar-item">
                                <FontAwesomeIcon icon={faChartLine} className="sidebar-icon" /> STRONA GLOWNA
                            </Nav.Link>
                            <Nav.Link as={Link} to="/towar" className="sidebar-item">
                                <FontAwesomeIcon icon={faBoxOpen} className="sidebar-icon" /> TOWARY
                            </Nav.Link>
                            <Nav.Link as={Link} to="/sprzedaz" className="sidebar-item">
                                <FontAwesomeIcon icon={faShoppingCart} className="sidebar-icon" /> SPRZEDAZ
                            </Nav.Link>
                            <Nav.Link as={Link} to="/magazyn" className="sidebar-item">
                                <FontAwesomeIcon icon={faClipboardCheck} className="sidebar-icon" /> MAGAZYN
                            </Nav.Link>
                            <Nav.Link as={Link} to="/grafik" className="sidebar-item">
                                <FontAwesomeIcon icon={faUsers} className="sidebar-icon" /> GRAFIK
                            </Nav.Link>
                            <Nav.Link as={Link} to="/dokumenty" className="sidebar-item sidebar-item-declarations">
                                <FontAwesomeIcon icon={faBox} className="sidebar-icon" /> DOKUMENTY
                            </Nav.Link>
                            <Nav.Link as={Link} to="/pracownik" className="sidebar-item">
                                <FontAwesomeIcon icon={faFileInvoice} className="sidebar-icon" /> DEKLARACJE
                            </Nav.Link>
                            <Nav.Link as={Link} to="/zestawienia" className="sidebar-item">
                                <FontAwesomeIcon icon={faClipboardList} className="sidebar-icon" /> ZESTAWIENIA
                            </Nav.Link>
                            <div className="sidebar-footer">
                                <div className="user-badge">
                                    Aktualna godzina: <strong>21:37</strong>
                                </div>
                                <div className="user-badge">
                                    Zalogowano jako: <strong>Patryk Konior</strong>
                                </div>
                            </div>
                        </Nav>
                    </div>
                    <main className="ms-sm-auto px-md-4">
                        {location.pathname !== '/' && (
                            <Navbar.Brand className="me-auto" style={titleStyle}>
                                {getTitle()}
                            </Navbar.Brand>
                        )}
                        <Outlet />
                    </main>
                </div>
            </Container>
        </div>
    );
}
