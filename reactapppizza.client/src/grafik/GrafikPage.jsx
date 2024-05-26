import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import plLocale from '@fullcalendar/core/locales/pl';
import { Typography } from '@mui/material';
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
            <Row className="mb-1 justify-content-end">
                {workers.map((worker, index) => (
                    <Col key={index} xs={6} sm={4} md={2}>
                        <Card className={`gradient-card mb-1`} style={{ borderImageSource: `linear-gradient(to right, ${worker.color}, #808080)` }}>
                            <Card.Header style={{ backgroundColor: worker.color, color: '#ffffff' }}>{worker.name}</Card.Header>
                            <Card.Body>
                                <Card.Title>{worker.role}</Card.Title>
                                <Card.Text>
                                    Godziny pracy: 10:00 - 21:00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <div className="calendar-container-grafik">
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="timeGridWeek"
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        allDaySlot={false}
                        slotMinTime="06:00:00"
                        slotMaxTime="24:00:00"
                        slotLabelFormat={{
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false
                        }}
                        events={events}
                        height="400px"
                        locale={plLocale}  // Ustawienie języka na polski
                    />
                </div>
            </Row>
        </Container>
    );
};

export { Grafik };
