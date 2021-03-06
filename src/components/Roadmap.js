import { Row, Container, Col } from "react-bootstrap";
import { CardRoadmap } from "./cards/CardRoadmap";

export function Roadmap() {
  const roadmap = [
    {
      subheading: "Roadmap",
      heading: "Phase 1 & 2",
      list: [
        { item: "Website", completed: true },
        { item: "Twitter Socials", completed: true },
        { item: "Telegram Socials", completed: true },
        { item: "KYC with InterFi", completed: true },
        { item: "Telegram Callgroup Marketing", completed: true },
        { item: "150 BNB Presale", completed: true },
        { item: "Twitter Influencer Marketing", completed: true },
        { item: "Telegram Callgroup Marketing", completed: true },
        { item: "CoinMarketCap Application", completed: true },
        { item: "CoinGecko Application", completed: true },
      ],
    },
    {
      subheading: "Roadmap",
      heading: "Phase 3",
      list: [
        { item: "CoinMarketCap Listing", completed: true },
        { item: "CoinGecko Listing", completed: true },
        { item: "Ongoing Trending Services", completed: true },
        { item: "Development of Bull Game", completed: true },
        { item: "BMW Beamer Raffle Contest", completed: true },
        { item: "Certik Application", completed: true },
        { item: "LunarCrush Application", completed: true },
        { item: "Feixiaohao Application", completed: true },
        { item: "Development of NFT Collection", completed: false },
        { item: "Poocoin KYC Marketing", completed: false },
        { item: "YouTube Marketing", completed: false },
        { item: "Flooz Application", completed: false },
        { item: "Catex.io Application", completed: false },
      ],
    },
    {
      subheading: "Roadmap",
      heading: "Phase 4",
      list: [
        { item: "LunarCrush Listing", completed: true },
        { item: "Feixiaohao Listing", completed: true },
        { item: "Travladd AMA", completed: false },
        { item: "Certik Audit", completed: false },
        { item: "Certik AMA", completed: false },
        { item: "Release Bull Game v1.0", completed: false },
        { item: "Release NFT Collection", completed: false },
        { item: "Ship BMW Beamer", completed: false },
        { item: "Catex.io Listing", completed: false },
        { item: "MEXC Application", completed: false },
        { item: "Hotbit Application", completed: false },
        { item: "BKEX Application", completed: false },
        { item: "Indoex Application", completed: false },
        { item: "Whitebit Application", completed: false },
        { item: "Cointiger Application", completed: false },
        { item: "LAToken Application", completed: false },
      ],
    },
  ];

  return (
    <section id="roadmap">
      <Container className="pt-6">
        <Row>
          <Col className="pb-6 px-6">
            <h1>Roadmap</h1>
          </Col>
        </Row>
        <Row>
          {roadmap.map((item, key) => (
            <Col key={key} md={4} className="pb-6 px-6">
              <CardRoadmap
                key={key}
                subheading={item.subheading}
                heading={item.heading}
                list={item.list}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
