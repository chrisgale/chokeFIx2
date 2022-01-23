import './style.scss';
import { Container, Row, Col, Table } from 'react-bootstrap';

function MTable({ title, items }) {

    const nodes = items.map( item => (
                                        <tr key={item.id}>
                                            <td>{ item.title }</td>
                                            <td align="center">{ item.formattedDate }</td>
                                            <td align="center">{ 1 }</td>
                                            <td align="right">

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
                                <th className="text-center">Rewards Per Day</th>
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

