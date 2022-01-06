import "./style.scss";
import { Container, Row, Col } from "react-bootstrap";
// components
import MCard from "../../Molecules/m-card";
// icons
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import MUsefulData from "../../Molecules/m-useful-data";
import MTable from "../../Molecules/m-table";

function ONodes({ NewItems }) {

  const titleData = "Useful Data";
  const crnPrice = "245.93";
  const hourHigh = "240.73";
  const hourLow = "250.78";
  const totalSupply = "10,200,102";
  const marketCap = "1,834,544.34";
  console.log(NewItems);

  const titleTable = "My Nodes";

  return (
    <Container className="o-nodes">

          <MTable title={titleTable} items={NewItems} />

    </Container>
  );
}

export default ONodes;
