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
    var rewards = 0;
    var days = 0;

    if (stats) {
        countNodes = stats[0];

        totalNodes = stats[1];
        rewards = stats[2];
        days = stats[3]
        // rewards = totalNodes * multiplier * days
        // days = (blocksStaked - (blocksStaked % 14400)) / 14400
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
                        title={'Total Created'}
                        content={`${totalNodes} Total Nodes`}
                        button={false} 
                    />
                </Col>

                <Col>
                    <MCard 
                        title={`${days} days unclaimed`}
                        content={`${rewards} CRN`}
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
