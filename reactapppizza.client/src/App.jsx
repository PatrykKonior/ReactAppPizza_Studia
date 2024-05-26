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
    // Dane do wykresu dla Katowic
    const katowiceChartData = {
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

    // Dane do wykresu dla Gliwic
    const gliwiceChartData = {
        labels: ['Styczen', 'Luty', 'Marzec', 'Kwiecien', 'Maj', 'Czerwiec'],
        datasets: [
            {
                label: 'Przychod w zl',
                data: [20000, 35000, 65000, 110000, 180000, 280000],
                fill: false,
                backgroundColor: '#e0b500', // Inny odcień żółtego
                borderColor: '#e0b500',
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
                text: '',
                color: '#BFB78F',  // Kolor tekstu tytułu
                align: 'start',  // Wyrównanie do lewej strony
                font: {
                    size: 16,
                    weight: 'bold'
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
                    <Col md={6} className="d-flex flex-column justify-content-between">
                        <div className="card w-100 mb-2" style={{ flex: '1 0 auto', height: '29vh' }}>
                            <RevenueChart data={katowiceChartData} options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { ...chartOptions.plugins.title, text: 'Filia Katowice - Przychod 2024r.' } } }} />
                        </div>
                        <div className="card w-100" style={{ flex: '1 0 auto', height: '29vh' }}>
                            <RevenueChart data={gliwiceChartData} options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { ...chartOptions.plugins.title, text: 'Filia Gliwice - Przychod 2024r.' } } }} />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="card w-100" style={{ height: '60vh' }}>
                            <EventCalendar localizer={localizer} events={events} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default App;
