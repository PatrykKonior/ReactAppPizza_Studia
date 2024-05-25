import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faFilePdf, faDownload, faFileExcel } from '@fortawesome/free-solid-svg-icons';

const HeadLine = () => {
    const titleStyle = {
        fontSize: '35px',
        fontFamily: 'Montserrat, sans-serif',
        margin: '20px 0',
        color: '#000'
    };

    return (
        <div className="headline-container mb-3">
            <Row className="align-items-center">
                <Col xs="auto">
                    <div style={titleStyle}>Dodaj towar</div>
                </Col>
                <Col className="text-center">
                    <Button variant="dark" className="me-2">Zapisz</Button>
                    <Button variant="dark" className="me-2">Wyzeruj</Button>
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
        </div>
    );
};

export default HeadLine;
