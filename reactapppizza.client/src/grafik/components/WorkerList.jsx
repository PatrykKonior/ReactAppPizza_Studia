import React from 'react';
import { Row } from 'react-bootstrap';
import WorkerCard from './WorkerCard';

const WorkerList = ({ workers }) => (
    <Row className="mb-1 justify-content-end">
        {workers.map((worker, index) => (
            <WorkerCard key={index} worker={worker} />
        ))}
    </Row>
);

export default WorkerList;
