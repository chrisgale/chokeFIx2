import './style.scss';
import { Card} from 'react-bootstrap';

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
 