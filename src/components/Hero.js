import { Row, Container, Col } from "react-bootstrap";
import { Header } from "./Header";
import { Card1 } from "./cards/Card1";

export function Hero() {
  return (
    <section className="hero">
      <Header />
      <Container className="pt-6 pb-6">
        <Row>
          <Col md={{ span: 6, offset: 6 }}>
            <Card1
              subheading="Join The Movement"
              heading="METABULLRUN"
              description="A community driven token that is built to create a bull run to the moon."
              socials={true}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
