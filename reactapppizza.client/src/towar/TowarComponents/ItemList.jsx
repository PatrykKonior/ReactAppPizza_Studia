import React, { useState } from 'react';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';

const ItemList = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Cegla', category: 'Cegly', price: 10 },
        { id: 2, name: 'Wylewka', category: 'Wylewki', price: 20 },
        { id: 3, name: 'Farba', category: 'Farby', price: 30 },
        // Dodaj wiêcej elementów tutaj
    ]);
    const [filter, setFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSort = (key) => {
        const sortedItems = [...items].sort((a, b) => {
            if (a[key] < b[key]) return sortOrder === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
        setItems(sortedItems);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.category.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="item-list">
            <Row className="mb-3">
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Filtruj..."
                        value={filter}
                        onChange={handleFilterChange}
                    />
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('name')}>Nazwa</th>
                        <th onClick={() => handleSort('category')}>Kategoria</th>
                        <th onClick={() => handleSort('price')}>Cena</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ItemList;
