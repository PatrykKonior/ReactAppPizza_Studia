import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Typography } from '@mui/material';
import WorkerList from './components/WorkerList';
import Calendar from './components/Calendar';
import '../App.css';

const Grafik = () => {
    const workers = [
        { name: "Anna", role: "Kelnerka", color: "#16232E" },
        { name: "Robert", role: "Kucharz", color: "#164C45" },
        { name: "Julia", role: "Manager", color: "#CC8D1A" },
        { name: "Marek", role: "Kelner", color: "#E3C75F" },
        { name: "Sylwia", role: "Barman", color: "#BDA523" },
    ];

    const days = ['2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28'];

    const events = workers.flatMap(worker =>
        days.map(day => ({
            title: `${worker.name} - ${worker.role}`,
            start: `${day}T10:00:00`,
            end: `${day}T21:00:00`,
            color: worker.color
        }))
    );

    return (
        <Container fluid>
            <Row className="mb-1 justify-content-start">
                <Typography id="grafik-title" className="grafik-title">Aktualny grafik</Typography>
            </Row>
            <WorkerList workers={workers} />
            <Row>
                <div className="calendar-container-grafik">
                    <Calendar events={events} />
                </div>
            </Row>
        </Container>
    );
};

export { Grafik };
