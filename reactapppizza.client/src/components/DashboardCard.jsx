import React from 'react';
import { Card, Col } from 'react-bootstrap';

const DashboardCard = () => (
    <>
        <Col md={3}>
            <Card className="card-custom card-notify" border="dark">
                <Card.Header>Powiadomienia</Card.Header>
                <Card.Body>
                    <Card.Title>Sprawdź powiadomienia...</Card.Title>
                    <Card.Text>
                        Tutaj możesz zobaczyć wszystkie nowe powiadomienia.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md={3}>
            <Card className="card-custom card-message" border="primary">
                <Card.Header>Wiadomosci</Card.Header>
                <Card.Body>
                    <Card.Title>Sprawdź wiadomości...</Card.Title>
                    <Card.Text>
                        Tutaj możesz zobaczyć wszystkie nowe wiadomości e-mail.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md={3}>
            <Card className="card-custom card-message" border="primary">
                <Card.Header>Wydarzenia</Card.Header>
                <Card.Body>
                    <Card.Title>Sprawdź wydarzenia...</Card.Title>
                    <Card.Text>
                        Tutaj możesz zobaczyć wszystkie zbliżające się wydarzenia.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col md={3}>
            <Card className="card-custom card-invoice" border="dark">
                <Card.Header>Faktury</Card.Header>
                <Card.Body>
                    <Card.Title>Sprawdź faktury...</Card.Title>
                    <Card.Text>
                        Tutaj możesz zobaczyć wszystkie nowe faktury.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </>
);

export default DashboardCard;
