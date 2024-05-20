import React from 'react';
import { Form, Row, Col, Tab, Tabs, Card } from 'react-bootstrap';

const AddTable = () => {
    return (
        <Card className="add-table-card mb-3">
            <Card.Body>
                <Form>
                    <Row>
                        <Tabs defaultActiveKey="danePodstawowe" id="daneTowaru" className="mb-3">
                            <Tab eventKey="danePodstawowe" title="Dane podstawowe">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Kod</Form.Label>
                                            <Form.Control type="text" placeholder="Wpisz kod..." />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nr Katalogowy</Form.Label>
                                            <Form.Control type="text" placeholder="Wpisz numer katalogowy..." />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nazwa</Form.Label>
                                            <Form.Control type="text" placeholder="Wpisz nazwe..." />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Kategoria</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Wybierz:</option>
                                                <option value="1">Cegly</option>
                                                <option value="2">Wylewki</option>
                                                <option value="3">Farby</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="Cena" title="Dane dodatkowe">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>PKWIU</Form.Label>
                                            <Form.Control type="text" placeholder="PKWIU..." />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>VAT zakupu</Form.Label>
                                            <Form.Control type="text" placeholder="VAT zakupu..." />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>VAT sprzedazy</Form.Label>
                                            <Form.Control type="text" placeholder="VAT sprzedazy..." />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Cena domyslna</Form.Label>
                                            <Form.Control type="text" placeholder="Cena domyslna..." />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="uwagi" title="Uwagi">
                                <Row>
                                    <Col xs={8}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Dodatkowe informacje</Form.Label>
                                            <Form.Control type="textarea" placeholder="Dodatkowe informacje..." />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Uwagi</Form.Label>
                                            <Form.Control as="textarea" placeholder="Uwagi..." />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Tab>
                        </Tabs>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddTable;
