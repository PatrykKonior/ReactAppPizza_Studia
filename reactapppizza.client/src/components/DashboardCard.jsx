import React from 'react';
import { Card, Col } from 'react-bootstrap';

const DashboardCard = () => (
    <>
        <Col md={3}>
            <Card className="card-custom card-notify" border="dark">
                <Card.Header>Powiadomienia</Card.Header>
                <Card.Body>
                    <Card.Title>Sprawdz powiadomienia...</Card.Title>
                    <Card.Text>
                        Tutaj mozesz zobaczyc wszystkie nowe powiadomienia.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md={3}>
            <Card className="card-custom card-message" border="primary">
                <Card.Header>Wiadomosci</Card.Header>
                <Card.Body>
                    <Card.Title>Sprawdz wiadomosci...</Card.Title>
                    <Card.Text>
                        Tutaj mozesz zobaczyc wszystkie nowe wiadomosci e-mail.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md={3}>
            <Card className="card-custom card-message" border="primary">
                <Card.Header>Wiadomosci</Card.Header>
                <Card.Body>
                    <Card.Title>Sprawdz wiadomosci...</Card.Title>
                    <Card.Text>
                        Tutaj mozesz zobaczyc wszystkie nowe wiadomosci e-mail.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md={3}>
            <Card className="card-custom card-invoice" border="dark">
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
