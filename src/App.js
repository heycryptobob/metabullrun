import './App.scss';
// import { Audit } from './components/Audit';
import { Footer } from './components/Footer';
// import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Rewards } from './components/Rewards';
import { Marketing } from './components/Marketing';
import { Buyback } from './components/Buyback';
import { Liquidity } from './components/Liquidity';
import { Audit } from './components/Audit';
import { Tokenomics } from './components/Tokenomics';
import { BuyTax } from './components/BuyTax';
import { SellTax } from './components/SellTax';
import { Roadmap } from './components/Roadmap';
// import { Tokenomics } from './components/Tokenomics';
// import { Media } from './components/Media';
// import { Twitter } from './components/Twitter';
import { Team } from './components/Team';
// import ReactGA from "react-ga4";

// ReactGA.initialize("G-8M507FWXLW");
// ReactGA.send("pageview");

function App() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Rewards />
      <Marketing />
      <Buyback />
      <Liquidity />
      <Audit />
      <Tokenomics />
      <BuyTax />
      <SellTax />
      <Team />
      <Roadmap />
      <Footer />
      {/* <Media />
      <Lottery />
      <Twitter />
      <NFTCollection />
      <Game />
      <Bridge />
      <Tokenomics />
      <Audit />
      <Roadmap />
      <Team />
      <Contact />
      <Legal />
      <Footer /> */}
    </>
  );
}

export default App;