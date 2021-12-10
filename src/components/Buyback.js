import { Row, Container, Col } from "react-bootstrap";
import { CardDefault } from "./cards/CardDefault";

export function Buyback() {
  return (
    <section className="buyback bg">
      <Container className="py-6">
        <Row>
          <Col md={{ span: 6, offset: 0 }}>
            <CardDefault
              subheading="Manual Buyback"
              heading="Rising Price Floor"
              description="Everytime someone sells, 2% of their transaction will go to the buyback wallet. When the buyback functionality is used, the project buys tokens, thereby raising the price floor. Those tokens can then be used for burning or for other promotional activities, community decides!"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
