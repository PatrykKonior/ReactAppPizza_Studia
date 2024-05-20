import React, { useState } from 'react';
import { Form, Row, Col, Tab, Tabs, Card, Button, Collapse } from 'react-bootstrap';

const AddedTowar = () => {
    const [open, setOpen] = useState(true);

    return (
        <Card className="added-towar-card mb-3">
            <Card.Header>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    variant="dark"
                >
                    {open ? 'Ukryj' : 'Pokaz'} Dodanie produktu
                </Button>
            </Card.Header>
            <Collapse in={open}>
                <Card.Body id="example-collapse-text">
                    <Form>
                        <Row>
                            <Tabs defaultActiveKey="danePodstawowe" id="daneTowaru" className="mb-3">
                                <Tab eventKey="danePodstawowe" title="Dane podstawowe">
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Nazwa produktu</Form.Label>
                                                <Form.Control type="text" placeholder="Wpisz nazwê produktu..." />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Kategoria</Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option>Wybierz:</option>
                                                    <option value="1">Sk³adniki</option>
                                                    <option value="2">Napoje</option>
                                                    <option value="3">Akcesoria</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Iloœæ</Form.Label>
                                                <Form.Control type="number" placeholder="Wpisz iloœæ..." />
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
                                                <Form.Label>Data wa¿noœci</Form.Label>
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
            </Collapse>
        </Card>
    );
};

export default AddedTowar;
