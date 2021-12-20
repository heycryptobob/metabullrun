import { Row, Container, Col } from "react-bootstrap";
import { Rewards } from "../Rewards";
import { Marketing } from "../Marketing";

export function Section1() {
  return (
    <section className="section1 pt-6">
      <Container className="pt-6">
        <Row>
          <Col md={6} className="pb-6 px-6">
            <Rewards />
          </Col>
          <Col md={6} className="pb-6 px-6">
            <Marketing />
          </Col>
        </Row>
      </Container>
    </section>
  )
}