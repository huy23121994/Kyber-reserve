const PATH = {
  GET_PRICE_BASE_QUOTE: "",
  GET_PRICE_ALL_BASE_QUOTE: "",
  GET_BALANCE_ALL_TOKEN_ON_BLOCKCHAIN: "",
  GET_BALANCE_ALL_TOKEN_ON_SUPPORTED_CHANGES: "",
  DEPOSIT: "",
  WITHDRAW: "",
  SET_RATE: "",
  TRADE: "",
  GET_OPEN_ORDER: "",
  CANCEL_ORDER: ""
}

const SUPPORTED_TOKENS = {
  ETH: {
    name: "Ethereum",
    symbol: "ETH",
    icon: "eth.svg"
  },
  KNC: {
    name: "KyberNetwork",
    symbol: "KNC",
    icon: "knc.svg"
  },
  OMG: {
    name: "OmiseGO",
    symbol: "OMG",
    icon: "omg.svg"
  },
  DGD: {
    name: "Digix",
    symbol: "DGD",
    icon: "dgd.svg"
  },
  CVC: {
    name: "Civic",
    symbol: "CVC",
    icon: "cvc.svg"
  },
  FUN: {
    name: "FunFair",
    symbol: "FUN",
    icon: "fun.svg"
  },
  MCO: {
    name: "Monaco",
    symbol: "MCO",
    icon: "mco.svg"
  },
  GNT: {
    name: "Golem",
    symbol: "GNT",
    icon: "gnt.svg"
  },
  ADX: {
    name: "Adex",
    symbol: "ADX",
    icon: "adx.svg"
  },
  PAY: {
    name: "TenX",
    symbol: "PAY",
    icon: "pay.svg"
  },
  BAT: {
    name: "BasicAttention",
    symbol: "BAT",
    icon: "bat.svg"
  },
  EOS: {
    name: "Eos",
    symbol: "EOS",
    icon: "eos.svg"
  },
  LINK: {
    name: "ChainLink",
    symbol: "LINK",
    icon: "link.svg"
  }
}

const SUPPORTED_EXCHANGE = {
  BITTREX: {
    name: "bittrex"
  },
  POLONIEX: {
    name: "poloniex"
  },
  BINANCE: {
    name: "binance"
  },
  BITTFINEX: {
    name: "bittfinex"
  },
  LIQUI: {
    name: "liqui"
  }
}

const INNIT_TOKEN_RATES = []

const INNIT_TOKEN_EXCHANGE_BALANCE = {
}

const INNIT_TOKEN_RESERVE_BALANCE = 0


module.exports = {
  SUPPORTED_TOKENS, PATH, SUPPORTED_EXCHANGE, 
  INNIT_TOKEN_RATES, INNIT_TOKEN_EXCHANGE_BALANCE, 
  INNIT_TOKEN_RESERVE_BALANCE
}