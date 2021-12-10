import { Row, Container, Col } from "react-bootstrap";
import { CardDefault } from "./cards/CardDefault";

export function Audit() {
  return (
    <section id="audit" className="bg">
      <Container className="py-6">
        <Row>
          <Col md={{ span: 6, offset: 0 }}>
            <CardDefault
              subheading="Professional Audit"
              heading="Contract Audit"
              description="The contract will be audited by InterFi Network prior to launch. InterFi has audited more than 500,000 solidity code-lines on Binance, Ethereum, Polygon, and Solana Smart Chains."
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
