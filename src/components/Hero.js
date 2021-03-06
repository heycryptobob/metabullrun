import { Row, Container, Col } from "react-bootstrap";
import { Header } from "./Header";
import { CardDefault } from "./cards/CardDefault";
// import { CountdownTimer } from "./CountdownTimer";

export function Hero() {
  return (
    <section id="features">
      <Header />
      <Container className="py-6">
        <Row>
          <Col md={{ span: 6, offset: 6 }}>
            <CardDefault
              subheading="Join The Movement"
              heading="METABULLRUN"
              description="A community driven token that is built to create a bull run to the moon."
              socials={true}
              contract={true}
              buyLinks={true}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
