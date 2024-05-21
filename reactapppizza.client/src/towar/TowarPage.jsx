import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeadLine from './TowarComponents/HeadLine';
import AddTable from './TowarComponents/AddTable';
import AddedTowar from './TowarComponents/AddedTowar';
import ItemList from './TowarComponents/ItemList';
import '../App.css';

function Towar() {
    return (
        <div className="main-content">
            <Container fluid className="d-flex flex-column">
                <HeadLine />
                <Row className="row-container flex-grow-1">
                    <Col className="col-container">
                        <AddTable />
                    </Col>
                    <Col className="col-container">
                        <AddedTowar />
                    </Col>
                </Row>
                <div className="item-list-container">
                    <ItemList />
                </div>
            </Container>
        </div>
    );
}

export { Towar };