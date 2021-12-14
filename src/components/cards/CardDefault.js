import { Socials } from "../Socials";
import { Contract } from "../Contract";
import { Button } from "react-bootstrap";

function BuyLinks() {
  return (
    <div>
      <div className="mt-3">
        {/* <Button variant="success" href="https://www.pinksale.finance/#/launchpad/0x2565Afd33BF2Da1bb27c6F7720366C2B5e2AE0Bd?chain=BSC" target="_blank" rel="noreferrer" className="me-2">Presale</Button> */}
        <Button
          variant="outline-light"
          href="https://poocoin.app/tokens/0xe0118b83775000a9a4dd2579746ee4c8c7d3d73c"
          target="_blank"
          rel="noreferrer"
          className="me-2"
        >
          Poocoin
        </Button>
        <Button
          variant="outline-light"
          href="https://pancakeswap.finance/swap?outputCurrency=0xe0118b83775000a9a4dd2579746ee4c8c7d3d73c"
          target="_blank"
          rel="noreferrer"
          className="me-2"
        >
          PancakeSwap
        </Button>
        <Button
          variant="outline-light"
          href="https://bscscan.com/token/0xe0118b83775000a9a4dd2579746ee4c8c7d3d73c"
          target="_blank"
          rel="noreferrer"
          className="me-2"
        >
          BSCScan
        </Button>
      </div>
      <div className="mt-3">
        <a
          href="https://bit.ly/3EWMeGO"
          target="_blank"
          rel="noreferrer"
        >
          Liquidity Lock
        </a>{ ' | ' }
        <a
          href="https://bit.ly/3ysx6P6"
          target="_blank"
          rel="noreferrer"
        >
          Audit
        </a>{ ' | ' }
        <a
          href="https://bit.ly/33uaa6y"
          target="_blank"
          rel="noreferrer"
        >
          KYC
        </a>
      </div>
    </div>
  );
}

export function CardDefault({
  subheading,
  heading,
  description,
  socials,
  development,
  contract,
  buyLinks,
}) {
  return (
    <div className="custom-card d-flex align-items-center">
      <div>
        <div className="subheading">{subheading}</div>
        <h1>{heading}</h1>
        <p className="description">{description}</p>
        {socials ? <Socials /> : <></>}
        {development ? <p>Website under development.</p> : <></>}
        {contract ? <Contract /> : <></>}
        {buyLinks ? <BuyLinks /> : <></>}
      </div>
    </div>
  );
}
