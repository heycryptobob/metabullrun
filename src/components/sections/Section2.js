import { Row, Container, Col } from "react-bootstrap";
import { Buyback } from "../Buyback";
import { Liquidity } from "../Liquidity";

export function Section2() {
  return (
    <section className="section2 pt-6">
      <Container className="pt-6">
        <Row>
          <Col md={6} className="pb-6 px-6">
            <Buyback />
          </Col>
          <Col md={6} className="pb-6 px-6">
            <Liquidity />
          </Col>
        </Row>
      </Container>
    </section>
  )
}