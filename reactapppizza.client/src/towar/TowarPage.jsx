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
            <Container fluid>
                <HeadLine />
                <Row>
                    <Col>
                        <AddTable />
                    </Col>
                    <Col>
                        <AddedTowar />
                    </Col>
                </Row>
                <ItemList />
            </Container>
        </div>
    );
}

export { Towar };
