import { Row, Container, Col } from "react-bootstrap";
import { CardDefault } from "./cards/CardDefault";

export function Rewards() {
  return (
    <section className="rewards bg">
      <Container className="py-6">
        <Row>
          <Col md={{ span: 6, offset: 0 }}>
            <CardDefault
              subheading="Reward Token"
              heading="Hold $MBR, Earn $BNB"
              description="Rewarding our holders is a fundamental to building a loyal and engaged community. 3% of every transaction will go to rewarding our holders in $BNB. Imagine: $1M volume creates $30K in rewards. 🤑"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
