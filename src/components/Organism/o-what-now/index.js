import './style.scss';
import { Container, Row, Col } from 'react-bootstrap';
// components
import MCard from '../../Molecules/m-card';
// icons
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import MUsefulData from '../../Molecules/m-useful-data';
import MTable from '../../Molecules/m-table';

function OWhatNow() {

    return (
        <Container className='o-what-now'>
            <Row className="justify-content-center">
                <Col className='text-center title'>
                    <h2>What now?</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={10} sm={8}>
                    <p>While it may be a blast to sit here and watch your rewards shuffle in, consider getting involved in our community. <br />Here are some ways you can get involved to make our community a better place!</p>
                    
                    <p>Discord</p>
                    <p>Join hundreds of members on our discord server. It is the main way we share information, announcements, and more. You will also be able to play a part in decisions that we make for the betterment of the platform!</p>
                    
                    <p>Twitter</p>
                    <p>Follow us on twitter, share the rewards you make with your friends and family! Even recruit some people to join our
                    server yourself! Everyone plays a role here, and you can be a reason that we grow!</p>

                    <p>Report Issues/Bugs</p>
                    <p>We want to ensure that our investors have a safe and bug free platform that they can have faith in. After all, we are
                    the investment vehicle you can trust your money in. Period.</p>
                    
                    <p>Suggestions & Ideas</p>
                    <p>Get in contact with us in the discord server if you have suggestions or ideas to make our community better. We love
                    reading the community feedback and their ideas.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default OWhatNow;
