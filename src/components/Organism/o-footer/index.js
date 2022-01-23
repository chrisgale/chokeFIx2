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
                    <a href="https://www.cronodes.xyz/">
                        <img className='logo' src={'./assets/img/logo.png'} alt="Cronode logo"/>
                        <a href="https://discord.gg/cronodesofficial">
                        <BsDiscord size={16} />
                    </a>
                    </a>
                    <a href="https://twitter.com/CronodesFinance">
                        <FaTwitter size={16} />
                    </a>
                    
                </Col>
            </Row>
            <Row>

            </Row>
            <Row>
                <Col className='text-center copy'>
                    <span>© Copyright 2022 Cronodes. All rights reserved.</span>
                </Col>
            </Row>
        </Container>
    );
}

export default OFooter;
