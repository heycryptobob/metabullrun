import { Row, Container, Col } from "react-bootstrap";
import { CardList } from "./cards/CardList";

export function BuyTax() {
  const list = [
    "3% Marketing",
    "1% Liquidity",
    "3% BNB Rewards",
    "2% Operations",
  ];

  return (
    <section className="tax bg">
      <Container className="py-6">
        <Row>
          <Col md={{ span: 6, offset: 0 }} className="d-flex align-items-center">
            <CardList subheading="9%" heading="Buy Tax" list={list} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
