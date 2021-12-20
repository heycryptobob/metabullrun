import { Container, Row, Col } from "react-bootstrap";
import coinmarketcap from '../assets/coinmarketcap.png';
import coingecko from '../assets/coingecko.png';
import feixiaohao from '../assets/feixiaohao.png';
import lunarcrush from '../assets/lunarcrush.png';
import crypto from '../assets/crypto.png';

const press = [
  { src: coinmarketcap, href: "https://coinmarketcap.com/currencies/metabullrun/", alt: "coinmarketcap.com" },
  { src: coingecko, href: "https://www.coingecko.com/en/coins/metabullrun", alt: "coingecko.com" },
  { src: feixiaohao, href: "https://www.feixiaohao.co/currencies/metabullrun/", alt: "feixiaohao.com" },
  { src: lunarcrush, href: "https://lunarcrush.com/influencers/metabullrun", alt: "lunarcrush.com" },
  { src: crypto, href: "https://crypto.com/price/metabullrun", alt: "crypto.com" },
]

function PressItem({ media }) {
  return (
    <Col className="text-center">
      <a href={media.href} target="_blank" rel="noreferrer">
        <img src={media.src} alt={media.alt} className="grayscale" width="128" height="64" />
      </a>
    </Col>
  );
}

export function Press() {
  return (
    <section className="bg-white">
      <Container className="pt-3 pb-3">
        <Row className="justify-content-center">
          {press.map((item, key) => (
            <PressItem media={item} key={key} />
          ))}
        </Row>
      </Container>
    </section>
  );
}