import React, { useState } from 'react';
import { Form, Row, Col, Tab, Tabs, Card, Button } from 'react-bootstrap';

const AddTable = () => {
    const [formData, setFormData] = useState({
        code: '',
        catalogNumber: '',
        name: '',
        category: '',
        pkwiu: '',
        vatPurchase: '',
        vatSale: '',
        defaultPrice: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.code) {
            newErrors.code = 'Kod jest wymagany';
        } else if (!/^\d+$/.test(formData.code)) {
            newErrors.code = 'Kod musi być cyframi';
        }

        if (!formData.catalogNumber) {
            newErrors.catalogNumber = 'Nr Katalogowy jest wymagany';
        } else if (!/^\d+$/.test(formData.catalogNumber)) {
            newErrors.catalogNumber = 'Nr Katalogowy musi być cyframi';
        }

        if (!formData.name) newErrors.name = 'Nazwa jest wymagana';
        if (!formData.category) newErrors.category = 'Kategoria jest wymagana';
        if (!formData.pkwiu) newErrors.pkwiu = 'PKWIU jest wymagany';
        if (!formData.vatPurchase) newErrors.vatPurchase = 'VAT zakupu jest wymagany';
        if (!formData.vatSale) newErrors.vatSale = 'VAT sprzedaży jest wymagany';
        if (!formData.defaultPrice) newErrors.defaultPrice = 'Cena domyślna jest wymagana';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Logika zapisu danych
            console.log('Formularz jest poprawny, dane:', formData);
        }
    };

    return (
        <Card className="add-table-card mb-3">
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Tabs defaultActiveKey="danePodstawowe" id="daneTowaru" className="mb-3">
                            <Tab eventKey="danePodstawowe" title="Dane podstawowe">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Kod</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Wpisz kod..."
                                                name="code"
                                                value={formData.code}
                                                onChange={handleInputChange}
                                                isInvalid={!!errors.code}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.code}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nr Katalogowy</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Wpisz numer katalogowy..."
                                                name="catalogNumber"
                                                value={formData.catalogNumber}
                                                onChange={handleInputChange}
                                                isInvalid={!!errors.catalogNumber}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.catalogNumber}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nazwa</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Wpisz nazwę..."
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                isInvalid={!!errors.name}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.name}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Kategoria</Form.Label>
                                            <Form.Select
                                                aria-label="Default select example"
                                                name="category"
                                                value={formData.category}
                                                onChange={handleInputChange}
                                                isInvalid={!!errors.category}
                                            >
                                                <option>Wybierz:</option>
                                                <option value="Pizza">Pizza</option>
                                                <option value="Napoje">Napoje</option>
                                                <option value="Desery">Desery</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.category}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="Cena" title="Dane dodatkowe">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>PKWIU</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="PKWIU..."
                                                name="pkwiu"
                                                value={formData.pkwiu}
                                                onChange={handleInputChange}
                                                isInvalid={!!errors.pkwiu}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.pkwiu}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>VAT zakupu</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="VAT zakupu..."
                                                name="vatPurchase"
                                                value={formData.vatPurchase}
                                                onChange={handleInputChange}
                                                isInvalid={!!errors.vatPurchase}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.vatPurchase}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>VAT sprzedaży</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="VAT sprzedaży..."
                                                name="vatSale"
                                                value={formData.vatSale}
                                                onChange={handleInputChange}
                                                isInvalid={!!errors.vatSale}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.vatSale}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Cena domyślna</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Cena domyślna..."
                                                name="defaultPrice"
                                                value={formData.defaultPrice}
                                                onChange={handleInputChange}
                                                isInvalid={!!errors.defaultPrice}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.defaultPrice}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Tab>
                        </Tabs>
                    </Row>
                    <Button variant="primary" type="submit">Zapisz</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddTable;
