import React from 'react';
import { Card, Col } from 'react-bootstrap';

const WorkerCard = ({ worker }) => (
    <Col xs={6} sm={4} md={2}>
        <Card className={`gradient-card mb-1`} style={{ borderImageSource: `linear-gradient(to right, ${worker.color}, #808080)` }}>
            <Card.Header style={{ backgroundColor: worker.color, color: '#ffffff' }}>{worker.name}</Card.Header>
            <Card.Body>
                <Card.Title>{worker.role}</Card.Title>
                <Card.Text>
                    Godziny pracy: 10:00 - 21:00
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
);

export default WorkerCard;
