import './App.scss';
import { Footer } from './components/Footer';
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
import { Team } from './components/Team';
import ReactGA from "react-ga4";

ReactGA.initialize("G-6JK33DD6SP");
ReactGA.send("pageview");

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