import { Row, Container, Col } from "react-bootstrap";
import { CardDefault } from "./cards/CardDefault";

export function Liquidity() {
  return (
    <section className="liquidity">
      <Container className="py-6">
        <Row>
          <Col md={{ span: 6, offset: 6 }} >
            <CardDefault
              subheading="Minimising Downtrend"
              heading="Healthy Liquidity"
              description="Having a health liquidity minimises the impact of selling transactions. On buys, 1% of the transaction will go to the liquidity. On sells, 2%."
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
