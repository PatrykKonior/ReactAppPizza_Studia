import React, { useState } from 'react';
import { Form, Row, Col, Tab, Tabs, Card, Button } from 'react-bootstrap';

const AddedTowar = () => {
    const [formData, setFormData] = useState({
        productName: '',
        category: '',
        quantity: '',
        unit: '',
        expirationDate: '',
        remarks: ''
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

        if (!formData.productName) newErrors.productName = 'Nazwa produktu jest wymagana';
        if (!formData.category) newErrors.category = 'Kategoria jest wymagana';
        if (!formData.quantity) {
            newErrors.quantity = 'Ilość jest wymagana';
        } else if (isNaN(formData.quantity) || Number(formData.quantity) <= 0) {
            newErrors.quantity = 'Ilość musi być liczbą dodatnią';
        }
        if (!formData.unit) newErrors.unit = 'Jednostka jest wymagana';
        if (!formData.expirationDate) {
            newErrors.expirationDate = 'Data ważności jest wymagana';
        } else {
            const date = new Date(formData.expirationDate);
            const minDate = new Date('2023-01-01');
            const today = new Date();
            if (date < minDate) {
                newErrors.expirationDate = 'Data ważności nie może być wcześniejsza niż 1 stycznia 2023 roku';
            } else if (date < today) {
                newErrors.expirationDate = 'Data ważności musi być przyszła';
            }
        }

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
        <Card className="added-towar-card mb-3">
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Tabs defaultActiveKey="danePodstawowe" id="daneTowaru" className="mb-3">
                            <Tab eventKey="danePodstawowe" title="Dane podstawowe">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nazwa produktu</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Wpisz nazwę produktu..."
                                                name="productName"
                                                value={formData.productName}
                                                onChange={handleInputChange}
                                                isInvalid={!!errors.productName}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.productName}
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
                                                <option value="Skladniki">Składniki</option>
                                                <option value="Napoje">Napoje</option>
                                                <option value="Akcesoria">Akcesoria</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.category}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Ilość</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Wpisz ilość..."
                                                name="quantity"
                                                value={formData.quantity}
                                                onChange={handleInputChange}
                                                isInvalid={!!errors.quantity}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.quantity}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Jednostka</Form.Label>
                                            <Form.Select
                                                aria-label="Default select example"
                                                name="unit"
                                                value={formData.unit}
                                                onChange={handleInputChange}
                                                isInvalid={!!errors.unit}
                                            >
                                                <option>Wybierz:</option>
                                                <option value="kg">Kilogram</option>
                                                <option value="l">Litr</option>
                                                <option value="szt">Sztuka</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.unit}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="dodatkoweInformacje" title="Dodatkowe informacje">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Data ważności</Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="expirationDate"
                                                value={formData.expirationDate}
                                                onChange={handleInputChange}
                                                isInvalid={!!errors.expirationDate}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.expirationDate}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Uwagi</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Wpisz uwagi..."
                                                name="remarks"
                                                value={formData.remarks}
                                                onChange={handleInputChange}
                                            />
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

export default AddedTowar;
