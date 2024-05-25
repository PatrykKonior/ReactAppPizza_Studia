import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'chart.js/auto';
import DashboardCard from './components/DashboardCard';
import EventCalendar from './components/EventCalendar';
import RevenueChart from './components/RevenueChart';
import { momentLocalizer } from 'react-big-calendar';
const localizer = momentLocalizer(moment);

// Wydarzenia do dodania (kalendarz)
const events = [
    {
        title: 'Spotkanie zespolu', // tytuł zadania
        start: moment().toDate(), //kiedy sie zaczyna
        end: moment().add(1, 'hours').toDate(), // kiedy sie konczy
    },
];

function App() {
    // Dane do wykresu 
    const chartData = {
        labels: ['Styczen', 'Luty', 'Marzec', 'Kwiecien', 'Maj', 'Czerwiec'],
        datasets: [
            {
                label: 'Przychod w zl',
                data: [24000, 40000, 70000, 120000, 200000, 305000],
                fill: false,
                backgroundColor: '#c7a42f',
                borderColor: '#c7a42f',
            },
        ],
    };

    // Opcje dla wykresu
    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#2c3e50'
                }
            },
            x: {
                ticks: {
                    color: '#2c3e50'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#BFB78F'
                }
            },
            title: {
                display: true,
                text: 'Filia Katowice - Przychod 2024r.',
                color: '#BFB78F',  // Kolor tekstu tytułu
                align: 'start',  // Wyrównanie do lewej strony
                font: {
                    size: 16,  // Rozmiar czcionki
                    weight: 'bold'  // Pogrubienie czcionki
                },
                padding: {
                    top: 10,
                    bottom: 30  // Odstępy
                }
            }
        }
    };

    return (
        <div className="main-content">
            <Container fluid>
                <Row className="mb-3">
                    <DashboardCard />
                </Row>
                <Row>
                    <Col md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div className="card" style={{ height: '25vh', marginBottom: '5px' }}>
                            <RevenueChart data={chartData} options={chartOptions} />
                        </div>
                        <div className="card" style={{ height: '25vh' }}>
                            <RevenueChart data={chartData} options={chartOptions} />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="card" style={{ height: '55vh' }}>
                            <EventCalendar localizer={localizer} events={events} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default App;