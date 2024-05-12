import react from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HeadLine = () => {
    return (
        <div>
            <Row>
                <Col xs="auto" className="pb-3">
                    <Button variant="dark">Zapisz</Button>{' '}
                    <Button variant="dark">Anuluj</Button>{' '}
                </Col>
            </Row>
        </div>
    );
};

export default HeadLine;