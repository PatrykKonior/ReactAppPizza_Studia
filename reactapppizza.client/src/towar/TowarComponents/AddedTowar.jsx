import React from 'react';
import { Form, Row, Col, Tab, Tabs, Card } from 'react-bootstrap';

const AddedTowar = () => {
    return (
        <Card className="added-towar-card mb-3">
            <Card.Body>
                <Form>
                    <Row>
                        <Tabs defaultActiveKey="danePodstawowe" id="daneTowaru" className="mb-3">
                            <Tab eventKey="danePodstawowe" title="Dane podstawowe">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nazwa produktu</Form.Label>
                                            <Form.Control type="text" placeholder="Wpisz nazwe produktu..." />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Kategoria</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Wybierz:</option>
                                                <option value="1">Skladniki</option>
                                                <option value="2">Napoje</option>
                                                <option value="3">Akcesoria</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Ilosc</Form.Label>
                                            <Form.Control type="number" placeholder="Wpisz ilosc..." />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Jednostka</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Wybierz:</option>
                                                <option value="kg">Kilogram</option>
                                                <option value="l">Litr</option>
                                                <option value="szt">Sztuka</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="dodatkoweInformacje" title="Dodatkowe informacje">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Data waznosci</Form.Label>
                                            <Form.Control type="date" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Uwagi</Form.Label>
                                            <Form.Control as="textarea" placeholder="Wpisz uwagi..." />
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

export default AddedTowar;
