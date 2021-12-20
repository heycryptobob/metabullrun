import { Row, Container, Col, Image } from "react-bootstrap";
// import { CardDefault } from "./cards/CardDefault";
import AuditImage from "../assets/audit.png";
import KYCImage from "../assets/kyc.png";

export function Audit() {
  return (
    <section id="audit" className="pt-6">
      <Container className="pt-6">
        <Row>
          <Col md={6} className="pb-6 px-6">
            <div className="subheading">Professional Audit</div>
            <h1>Contract Audit</h1>
            <p className="description">
              The contract will be audited by InterFi Network prior to launch.
              InterFi has audited more than 500,000 solidity code-lines on
              Binance, Ethereum, Polygon, and Solana Smart Chains.
            </p>
            <div className="d-block d-md-none mt-4">
              <div className="text-center">
                <Image src={AuditImage} className="w-50 rounded shadow-lg" />
                <div className="mt-3">
                  <a
                    href="https://github.com/interfinetwork/smart-contract-audits/blob/main/MetaBullRun_AuditReport_InterFi.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Smart Contract Audit
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className="pb-6 px-6">
            <div className="subheading">Team</div>
            <h1>KYC Team</h1>
            <p className="description">
              The team has launched several projects in the past. They have
              completed the KYC process with InterFi Network, the contract
              auditor.
            </p>
            <div className="d-block d-md-none mt-4">
              <div className="text-center">
                <Image src={KYCImage} className="w-50 rounded shadow-lg" />
                <div className="mt-3">
                  <a
                    href="https://github.com/interfinetwork/kyc-verification-certificates/blob/main/MetaBullRun_KYCCertificate_InterFi.png"
                    target="_blank"
                    rel="noreferrer"
                  >
                    InterFi Network KYC
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col md={6} className="pb-6 px-6 d-none d-md-block">
            <div className="text-center">
              <Image src={AuditImage} className="w-50 rounded shadow-lg" />
              <div className="mt-3">
                <a
                  href="https://github.com/interfinetwork/smart-contract-audits/blob/main/MetaBullRun_AuditReport_InterFi.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Smart Contract Audit
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} className="pb-6 px-6 d-none d-md-block">
            <div className="text-center">
              <Image src={KYCImage} className="w-50 rounded shadow-lg" />
              <div className="mt-3">
                <a
                  href="https://github.com/interfinetwork/kyc-verification-certificates/blob/main/MetaBullRun_KYCCertificate_InterFi.png"
                  target="_blank"
                  rel="noreferrer"
                >
                  InterFi Network KYC
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
