import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const DashboardCard = () => {
    const navigate = useNavigate();

    // Efekt kliknięcia i nawigacji
    const handleCardClick = (route, event) => {
        const card = event.currentTarget;
        gsap.to(card, {
            scale: 0.90, // Delikatne pomniejszenie
            duration: 0.2,
            ease: 'power2.out',
            onComplete: () => {
                gsap.to(card, { scale: 1, duration: 0.1 }); // Powrót do pierwotnego rozmiaru
                navigate(route);
            },
        });
    };

    // Efekt najechania
    const handleMouseEnter = (event) => {
        const card = event.currentTarget;
        gsap.killTweensOf(card); // Zatrzymanie aktywnych animacji
        gsap.to(card, { scale: 1.02, duration: 0.2, ease: 'power1.out' }); // Delikatne powiększenie
    };

    // Efekt opuszczenia
    const handleMouseLeave = (event) => {
        const card = event.currentTarget;
        gsap.killTweensOf(card); // Zatrzymanie aktywnych animacji
        gsap.to(card, { scale: 0.97, duration: 0.2, ease: 'power1.in' }); // Powrót do pierwotnego rozmiaru
    };

    const cardStyles = {
        cursor: 'pointer',
        overflow: 'hidden',
    };

    return (
        <>
            <Col md={3}>
                <Card
                    style={cardStyles}
                    border="dark"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => handleCardClick('/sprzedaz', e)}
                >
                    <Card.Header>Zamówienia</Card.Header>
                    <Card.Body>
                        <Card.Title>Sprawdź zamówienia...</Card.Title>
                        <Card.Text>Tutaj możesz zobaczyć wszystkie nowe zamówienia.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={3}>
                <Card
                    style={cardStyles}
                    border="primary"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => handleCardClick('/magazyn', e)}
                >
                    <Card.Header>Magazyn</Card.Header>
                    <Card.Body>
                        <Card.Title>Sprawdź magazyn...</Card.Title>
                        <Card.Text>Tutaj możesz zobaczyć produkty w magazynie.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={3}>
                <Card
                    style={cardStyles}
                    border="primary"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => handleCardClick('/pracownik', e)}
                >
                    <Card.Header>Dokumenty</Card.Header>
                    <Card.Body>
                        <Card.Title>Sprawdź dokumenty...</Card.Title>
                        <Card.Text>Tutaj możesz zobaczyć wszystkie dokumenty.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={3}>
                <Card
                    style={cardStyles}
                    border="dark"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => handleCardClick('/dokumenty', e)}
                >
                    <Card.Header>Faktury</Card.Header>
                    <Card.Body>
                        <Card.Title>Sprawdź faktury...</Card.Title>
                        <Card.Text>Tutaj możesz zobaczyć wszystkie nowe faktury.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default DashboardCard;
