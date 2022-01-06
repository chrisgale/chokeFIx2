import './style.scss';
import { Container, Row, Col } from 'react-bootstrap';
// icons
import { FaSearchDollar, FaChartLine, FaStar, FaRedhat } from "react-icons/fa";

function MUsefulData({ title, crnPrice, hourHigh, hourLow, totalSupply, marketCap }) {

    return (
        <Container className='m-useful-data text-center'>
            <div className='title'>
                <Row>
                    <Col>{ title }</Col>
                </Row>
            </div>
            <div className='content'>
                <Row>
                    <Col>
                        <p className='label'><FaSearchDollar />CRN Price</p>
                        <p className='value'>{ `$${crnPrice} USD` }</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p className='label'><FaChartLine /> 24 Hour High</p>
                    <p className='value'>
                        { `$${hourHigh} USD` }
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p className='label'>
                        <FaChartLine /> 24 Hour Low
                    </p>
                    <p className='value'>
                        { `$${hourLow} USD` }
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='label'>
                            <FaStar /> Total Supply
                        </p>
                        <p className='value'>
                            { totalSupply }
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p className='label'>
                        <FaRedhat /> Market Cap
                    </p>
                    <p className='value'>
                        { `$${marketCap} USD` }
                    </p>
                    </Col>
                </Row>
            </div>
        </Container>
    ); 
}

export default MUsefulData;
