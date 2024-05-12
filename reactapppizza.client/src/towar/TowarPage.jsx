import react from 'react';
import Container from 'react-bootstrap/Container';
import HeadLine from './TowarComponents/HeadLine';
import AddTable from './TowarComponents/AddTable';
import AddedTowar from './TowarComponents/AddedTowar';
import '../App.css'

function Towar() {
    return (
        <div className="main-content">
            <Container fluid>
                <HeadLine />
                <AddTable />
                <AddedTowar />
            </Container>
        </div>
    )
}

export { Towar };