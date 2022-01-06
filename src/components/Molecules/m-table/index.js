import './style.scss';
import { Container, Row, Col, Table } from 'react-bootstrap';
import {SoloClaim} from "../../soloClaim.js";

function MTable({ title, items }) {

    const nodes = items.map( item => (
                                        <tr key={item.id}>
                                            <td>{ item.title }</td>
                                            <td align="center">{ item.date }</td>
                                            <td align="center">{ item.rewards }</td>
                                            <td align="right">
                                            <SoloClaim CreationTime={item.date}/>
                                            </td>
                                        </tr>
                                    )
                                )

    return (
        <Container className='m-table'>
            <div className='title text-center'>
                <Row>
                    <Col>{ title }</Col>
                </Row>
            </div>
            <div className='content'>
                <Row>
                    <Col>
                    <Table responsive="md">
                        <thead>
                            <tr>
                                <th>Node</th>
                                <th className="text-center">Date Created</th>
                                <th className="text-center">Rewards</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {nodes}
                        </tbody>
                    </Table>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default MTable;

