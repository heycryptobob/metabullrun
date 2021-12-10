import { Row, Container, Col } from "react-bootstrap";
import { CardDefault } from "./cards/CardDefault";

export function Team() {
  return (
    <section id="team" className="bg">
      <Container className="py-6">
        <Row>
          <Col md={{ span: 6, offset: 0 }}>
            <CardDefault
              subheading="Team"
              heading="KYC Team"
              description="The team has launched several projects in the past. They have completed the KYC process with InterFi Network, the contract auditor."
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
