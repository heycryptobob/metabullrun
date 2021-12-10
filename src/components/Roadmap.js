import { Row, Container, Col } from "react-bootstrap";
import { CardRoadmap } from "./cards/CardRoadmap";

export function Roadmap() {
  const roadmap = [
    {
      subheading: "Roadmap",
      heading: "Phase 1",
      list: [
        { item: "Website", completed: true },
        { item: "Twitter Socials", completed: true },
        { item: "Telegram Socials", completed: true },
        { item: "KYC with InterFi", completed: false },
        { item: "Telegram Callgroup Marketing", completed: false },
        { item: "150 BNB Presale", completed: false },
      ],
    },
    {
      subheading: "Roadmap",
      heading: "Phase 2",
      list: [
        { item: "Twitter Influencer Marketing", completed: false },
        { item: "Telegram Callgroup Marketing", completed: false },
        { item: "Press Release Submission", completed: false },
        { item: "CoinMarketCap Application", completed: false },
        { item: "CoinGecko Application", completed: true },
        { item: "Poocoin Marketing", completed: false },
        { item: "YouTube Marketing", completed: false },
        { item: "Reddit Trending", completed: false },
        { item: "DEX Trending", completed: false },
      ],
    },
    {
      subheading: "Roadmap",
      heading: "Phase 3",
      list: [
        { item: "CoinMarketCap Listing", completed: false },
        { item: "CoinGecko Listing", completed: false },
        { item: "Poocoin Marketing", completed: false },
        { item: "YouTube Marketing", completed: false },
        { item: "Reddit Trending", completed: false },
        { item: "DEX Trending", completed: false },
        { item: "CoinMarketCap Trending", completed: false },
        { item: "CoinGecko Trending", completed: false },
        { item: "Stage 1 Exchange Application", completed: false },
      ],
    },
    {
      subheading: "Roadmap",
      heading: "Phase 4",
      list: [
        { item: "Moon", completed: false },
      ],
    },
  ];

  return (
    <section id="roadmap">
      {roadmap.map((item, key) => (
        <Container key={key} className="py-6">
          <Row>
            <Col
              md={{ span: 6, offset: key % 2 !== 0 ? 0 : 6 }}
              className="d-flex align-items-center"
            >
              <CardRoadmap
                key={key}
                subheading={item.subheading}
                heading={item.heading}
                list={item.list}
              />
            </Col>
          </Row>
        </Container>
      ))}
    </section>
  );
}
