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
import { Swap } from './components/Swap';
import { Press } from './components/Press';
import ReactGA from "react-ga4";
import { BrowserRouter } from 'react-router-dom';

ReactGA.initialize("G-6JK33DD6SP");
ReactGA.send("pageview");

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Press />
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
      <Swap />
      <Footer />
    </BrowserRouter>
  );
}

export default App;