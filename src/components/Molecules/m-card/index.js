import './style.scss';
import { Card, Button } from 'react-bootstrap';
import {Buy} from "../../buy.js";

function MCard({ title, content, button}) {

  return (
    <Card className="text-center m-card">
        <Card.Title>{ title }</Card.Title>
        <Card.Body>
          <Card.Text>
          { content }
          </Card.Text>
          {button}

        </Card.Body>
    </Card>
  );
}

export default MCard;
 