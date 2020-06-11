import Testnet from "../assets/images/bitmex-logo-testnet.png"
import Livenet from "../assets/images/bitmex-logo.png"
import Alpaca from "../assets/images/alpaca-markets.png"


const MARKETS = {
  bitmex_testnet: {
    displayName: "BitMEX Testnet",
    logo: Testnet
  },
  bitmex_live: {
    displayName: "BitMEX Live",
    logo: Livenet
  },
  alpaca: {
    displayName: "Alpaca Markets",
    logo: Alpaca
  }
}

export default MARKETS;