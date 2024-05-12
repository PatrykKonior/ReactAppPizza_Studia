import React from 'react';
import { Card, Col } from 'react-bootstrap';


const DashboardCard = () => (
    <>
        <Col md={3} style={{ marginTop: '-25px', marginLeft: '-20px' }}>
            <Card border="dark" style={{ transform: 'scale(0.8)', transformOrigin: 'center', width: '300px' }} >
                <Card.Header>Powiadomienia</Card.Header>
                <Card.Body>
                    <Card.Title>Sprawdz powiadomienia...</Card.Title>
                    <Card.Text>
                        Tutaj mozesz zobaczyc wszystkie nowe powiadomienia.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md={3} style={{ marginTop: '-25px' }}>
            <Card border="primary" style={{ transform: 'scale(0.8)', transformOrigin: 'center', width: '300px' }}>
                <Card.Header>Widomosci</Card.Header>
                <Card.Body>
                    <Card.Title>Sprawdz wiadomosci...</Card.Title>
                    <Card.Text>
                        Tutaj mozesz zobaczyc wszystkie nowe wiadomosci e-mail.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md={3} style={{ marginTop: '-25px' }}>
            <Card border="primary" style={{ transform: 'scale(0.8)', transformOrigin: 'center', width: '300px' }}>
                <Card.Header>Widomosci</Card.Header>
                <Card.Body>
                    <Card.Title>Sprawdz wiadomosci...</Card.Title>
                    <Card.Text>
                        Tutaj mozesz zobaczyc wszystkie nowe wiadomosci e-mail.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md={3} style={{ marginTop: '-25px' }}>
            <Card border="dark" style={{ transform: 'scale(0.8)', transformOrigin: 'center', width: '300px' }}>
                <Card.Header>Faktury</Card.Header>
                <Card.Body>
                    <Card.Title>Sprawdz faktury...</Card.Title>
                    <Card.Text>
                        Tutaj mozesz zobaczyc wszystkie nowe faktury.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </>
);

export default DashboardCard;