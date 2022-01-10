import './style.scss';
import { Container, Row, Col } from 'react-bootstrap';
// icons
import { FaTwitter } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

function OFooter() {

    return (
        <Container className='o-footer'>
            <Row>
                <Col className='text-center logos'>
                    <a href="/#" target={'_blank'}>
                        <img className='logo' src={'./assets/img/logo.png'} alt="Cronode logo"/>
                    </a>
                    <a href="/#" target={'_blank'}>
                        <FaTwitter size={24} />
                    </a>
                    <a href="/#" target={'_blank'}>
                        <BsDiscord size={24} />
                    </a>
                </Col>
            </Row>
            <Row>

            </Row>
            <Row>
                <Col className='text-center copy'>
                    <span>2021 Copyright CRONODES.app</span>
                </Col>
            </Row>
        </Container>
    );
}

export default OFooter;
