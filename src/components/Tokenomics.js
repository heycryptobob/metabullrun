import { Row, Container, Col, Image } from "react-bootstrap";
import { CardList } from "./cards/CardList";
import Supply from '../assets/supply.png';

export function Tokenomics() {

  const list = [
    "Name: METABULLRUN",
    "Symbol: $MBR",
    "Decimals: 18",
    "Address: 0x0000000000000000000000000",
  ]

  return (
    <section id="tokenomics">
      <Container className="py-6">
        <Row>
          <Col md={6} className="mt-5 mt-md-0 pe-md-6 order-2 order-md-1">
            <Image src={Supply} alt="Supply Allocation" fluid />
          </Col>
          <Col md={6} className="d-flex align-items-center order-1 order-md-2">
            <CardList
              subheading="Token Data"
              heading="Tokenomics"
              list={list}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
