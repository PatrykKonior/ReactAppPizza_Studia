import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Grafik = () => {
    const workers = [
        { name: "Anna", role: "Kelnerka", color: "#16232E" },
        { name: "Robert", role: "Kucharz", color: "#164C45" },
        { name: "Julia", role: "Manager", color: "#CC8D1A" },
        { name: "Marek", role: "Kelner", color: "#E3C75F" },
        { name: "Sylwia", role: "Barman", color: "#BDA523" },
    ];

    const events = workers.flatMap(worker => [
        { title: `${worker.name} - ${worker.role}`, start: '2023-05-08T10:00:00', end: '2023-05-08T21:00:00', color: worker.color },
        { title: `${worker.name} - ${worker.role}`, start: '2023-05-09T10:00:00', end: '2023-05-09T21:00:00', color: worker.color },
        { title: `${worker.name} - ${worker.role}`, start: '2023-05-10T10:00:00', end: '2023-05-10T21:00:00', color: worker.color },
        { title: `${worker.name} - ${worker.role}`, start: '2023-05-11T10:00:00', end: '2023-05-11T21:00:00', color: worker.color },
        { title: `${worker.name} - ${worker.role}`, start: '2023-05-12T10:00:00', end: '2023-05-12T21:00:00', color: worker.color },
    ]);

    return (
        <Container fluid>
            <Row className="mb-1 justify-content-end">
                {workers.map((worker, index) => (
                    <Col key={index} xs={6} sm={4} md={2}>
                        <Card className="mb-1" border="dark" style={{ borderColor: worker.color, maxWidth: "180px" }}>
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
                <div className="calendar-container" style={{ width: "100%" }}>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="timeGridWeek"
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        allDaySlot={false}
                        slotMinTime="01:00:00"
                        slotMaxTime="24:00:00"
                        slotLabelFormat={{
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false
                        }}
                        events={events}
                        height="550px"  // Ustaw wysokoœæ kalendarza
                    />
                </div>
            </Row>
        </Container>
    );
};


export{ Grafik};
