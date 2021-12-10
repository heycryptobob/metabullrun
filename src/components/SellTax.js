import { Row, Container, Col } from "react-bootstrap";
import { CardList } from "./cards/CardList";

export function SellTax() {
  
  const list = [
    "7% Marketing",
    "2% Liquidity",
    "3% BNB Rewards",
    "2% Operations",
    "2% Buyback",
  ];

  return (
    <section className="tax">
      <Container className="py-6">
        <Row>
          <Col md={{ span: 6, offset: 6 }} className="d-flex align-items-center">
            <CardList subheading="16%" heading="Sell Tax" list={list} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
