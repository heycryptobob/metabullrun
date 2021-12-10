import { Row, Container, Col } from "react-bootstrap";
import { CardDefault } from "./cards/CardDefault";

export function Marketing() {
  return (
    <section className="marketing">
      <Container className="py-6">
        <Row>
          <Col md={{ span: 6, offset: 6 }}>
            <CardDefault
              subheading="Attention Grabbing"
              heading="Marketing"
              description="Delivering a high impact marketing plan is key to the success of any token. This will be achieved through telegram call groups, twitter influencers, CMC, CG, and DEX trending. As a community token, the community will vote on these initiatives. The marketing tax is 3% on buys and 7% on sells."
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
