import { FaRegCopy } from 'react-icons/fa';
import { useState } from "react";
import ReactGA from "react-ga4";

export function Contract() {

  const contract = "0xe0118b83775000a9a4dd2579746ee4c8c7d3d73c"
  const [copied, setCopied] = useState(false)

  function handleClick() {
    navigator.clipboard.writeText(contract)
    setCopied(true)
    setTimeout(() => { setCopied(false) }, 3000)

    ReactGA.event({
      category: 'User',
      action: 'Copied Token Address'
    })
  }

  return (
    <p className="contract border border-white bg-dark bg-opacity-50 p-2 rounded-3 d-flex justify-content-between align-items-center copy" onClick={handleClick}>
      <code className="pointer pe-3">{contract}</code>
      { copied ? <span style={{ fontSize: "0.875em" }}>Copied</span> : <FaRegCopy className="pointer" /> }
    </p>
  )
}