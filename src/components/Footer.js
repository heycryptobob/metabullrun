import { Row, Container, Col } from "react-bootstrap";
import { CardFooter } from "./cards/CardFooter";
import { CardLinks } from "./cards/CardLinks";
import { list } from '../menu'

export function Footer() {

  return (
    <section className="footer">
      <Container className="py-6">
        <Row>
          <Col md={{ span: 6, offset: 0 }}>
            <CardFooter
              heading="Legal Disclaimer"
              description="None of the information on this website should be construed as providing legal or financial advice. Please note there are always risks associated with smart contracts. Please use at your own risk. The team is not a registered broker, analyst or investment advisor. If you have purchased the token, you agree that you are not purchasing a security or investment. The team can not be held liable for any losses or taxes you may incur. Do conduct your own due diligence and consult your financial advisor before making any investment decision."
            />
          </Col>
          <Col>
            <CardLinks heading="Menu" list={list} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
