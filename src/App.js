import './App.scss';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Press } from './components/Press';
import { Audit } from './components/Audit';
import { Tokenomics } from './components/Tokenomics';
import { Roadmap } from './components/Roadmap';
import { Swap } from './components/Swap';
import ReactGA from "react-ga4";
import { BrowserRouter } from 'react-router-dom';
import { Section1 } from './components/sections/Section1';
import { Section2 } from './components/sections/Section2';

ReactGA.initialize("G-6JK33DD6SP");
ReactGA.send("pageview");

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Press />
      <Section1 />
      <Section2 />
      <Audit />
      <Tokenomics />
      <Roadmap />
      <Swap />
      <Footer />
    </BrowserRouter>
  );
}

export default App;