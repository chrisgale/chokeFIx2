import "./style.scss";
import { Container} from "react-bootstrap";

import MTable from "../../Molecules/m-table";

function ONodes({ NewItems }) {



  const titleTable = "My Nodes";

  return (
    <Container className="o-nodes">

          <MTable title={titleTable} items={NewItems} />

    </Container>
  );
}

export default ONodes;
