import { Row, Container, Col, Image } from "react-bootstrap";
import { CardList } from "./cards/CardList";
// import Supply from '../assets/supply.png';

export function Tokenomics() {

  const list = [
    "Name: <code>METABULLRUN</code>",
    "Symbol: <code>MBR</code>",
    "Decimals: <code>9</code>",
  ]

  const buyTax = [
    "3% Marketing",
    "1% Liquidity",
    "3% BNB Rewards",
    "2% Operations",
  ];

  const sellTax = [
    "7% Marketing",
    "2% Liquidity",
    "3% BNB Rewards",
    "2% Operations",
    "2% Buyback",
  ];

  return (
    <section id="tokenomics">
      <Container className="py-6">
        <Row>
          <Col md={6}>
            <CardList
              subheading="Token Data"
              heading="Tokenomics"
              list={list}
              contract={true}
            />
          </Col>
          <Col>
            <CardList subheading="9%" heading="Buy Tax" list={buyTax} />
          </Col>
          <Col>
            <CardList subheading="16%" heading="Sell Tax" list={sellTax} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
