import { Row, Container, Col, Image } from "react-bootstrap";
import { CardDefault } from "./cards/CardDefault";
import KYCImage from '../assets/kyc.png';

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
          <Col className="d-flex align-items-center">
            <div className="text-center">
              <Image src={KYCImage} className="w-75 rounded shadow-lg"/>
              <div className="mt-3">
                <a href="https://github.com/interfinetwork/kyc-verification-certificates/blob/main/MetaBullRun_KYCCertificate_InterFi.png" target="_blank" rel="noreferrer">InterFi Network KYC</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
