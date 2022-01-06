import './style.scss';
import { Container, Row, Col } from 'react-bootstrap';

// icons
import MFaq from '../../Molecules/m-faq';

function ONeedAnswers() {
    return (
        <Container className='o-need-answers'>
            <Row className="justify-content-center">
                <Col className='text-center'>
                    <h2>Need Answers?</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <MFaq />
                </Col>
            </Row>
        </Container>
    );
}

export default ONeedAnswers;
