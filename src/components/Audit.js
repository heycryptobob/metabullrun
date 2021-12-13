import { Row, Container, Col, Image } from "react-bootstrap";
import { CardDefault } from "./cards/CardDefault";
import AuditImage from '../assets/audit.png';

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
          <Col className="d-flex align-items-center">
            <div className="text-center">
              <Image src={AuditImage} className="w-75 rounded shadow-lg"/>
              <div className="mt-3">
                <a href="https://github.com/interfinetwork/smart-contract-audits/blob/main/MetaBullRun_AuditReport_InterFi.pdf" target="_blank" rel="noreferrer">Smart Contract Audit</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
