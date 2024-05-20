import React from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faFilePdf, faDownload, faFileExcel } from '@fortawesome/free-solid-svg-icons';

const HeadLine = () => {
    return (
        <Card className="headline-card mb-3">
            <Card.Body>
                <Row>
                    <Col xs="auto">
                        <Button variant="dark">Zapisz</Button>{' '}
                        <Button variant="dark">Wyzeruj</Button>{' '}
                    </Col>
                    <Col className="text-end">
                        <Button variant="outline-dark" className="me-2">
                            <FontAwesomeIcon icon={faPrint} /> Drukuj
                        </Button>
                        <Button variant="outline-dark" className="me-2">
                            <FontAwesomeIcon icon={faFilePdf} /> PDF
                        </Button>
                        <Button variant="outline-dark" className="me-2">
                            <FontAwesomeIcon icon={faDownload} /> Pobierz
                        </Button>
                        <Button variant="outline-dark">
                            <FontAwesomeIcon icon={faFileExcel} /> Excel
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default HeadLine;
