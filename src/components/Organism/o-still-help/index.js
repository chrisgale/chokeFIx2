import './style.scss';
import { Container, Row, Col } from 'react-bootstrap';

function OStillHelp() {

    return (
        <Container className='o-still-help'>
            <Row>
                <Col className='text-center'>
                    <h2>Still Need Answers?</h2>
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <h5>Join our discord and ask us there!</h5>
                </Col>
            </Row>
        </Container>
    );
}

export default OStillHelp;
