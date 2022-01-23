import './style.scss';
import { Container, Row, Col } from 'react-bootstrap';
// components
import MCard from '../../Molecules/m-card';
// icons
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import {Buy} from "../../buy.js";
import {ClaimAll} from "../../claim.js";


function ONumbers({stats}) {


    var countNodes = 0;
    var totalNodes = 0;
    var totalCro = 0;

    if (stats) {
        countNodes = stats[0];

        totalNodes = stats[1];
        totalCro = stats[2];
    }
    const maxNodes = 100;


    return (
        <Container className='o-numbers'>
            <Row>
                <Col>

                    <MCard 
                        title={'20 CRN / Node'}
                        content={`${countNodes}/${maxNodes} max nodes`}
                        button = <Buy/>
                    />
                </Col>
                <Col>
                    <MCard 
                        title={'Total Nodes'} 
                        content={`${totalNodes} Total Nodes`}
                        button={false} 
                    />
                </Col>

                <Col>
                    <MCard 
                        title={'Rewards Per Day'}
                        content={`${totalCro} CRN`} 
                        button=<ClaimAll/>
                    />
                </Col>
            </Row>
            <Row className='disclaimer'>
                <Col className='d-flex justify-content-center'>
                    <BsFillExclamationTriangleFill />
                    <p>Verify you are at https://cronodes.app</p>
                    <BsFillExclamationTriangleFill />
                </Col>
            </Row>
        </Container>
    );
}

export default ONumbers;
