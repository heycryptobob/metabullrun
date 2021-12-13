import { Container, Row, Col } from 'react-bootstrap'

export function Swap() {
  return (
    <section id="swap">
      <Container className="py-6">
        <Row>
          <Col className="d-flex align-items-center pb-4">
            <div>
              <h2>Swap</h2>
              <p>Swap your BNB directly on our website using our poocoin.app integration!</p>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center align-items-center">
              <iframe
                title="Swap $MBR"
                src="https://poocoin.app/embed-swap?outputCurrency=0xe0118b83775000a9a4dd2579746ee4c8c7d3d73c"
                width="420"
                height="480"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
