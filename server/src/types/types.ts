export interface IPrice {
  price: number
  time?: number
}

export interface ITX {
  stamp?: number     // timestamp
  action?: string  // BUY/SELL
  in?: number
  out?: number
  take?: number
  points?: number
  total?: number
  msg?: string
  history?: string
  result?: string
  reason?: string
  priceHistory?: number[]
  snap?: ISnap
}

export interface ISnap {
  count?: number
  time: number,
  timeDiff: number,
  price: number,
  lastDiff?: number,
  dir?: number,
  dirArrow?: string,
  swing?: number,
  swingArrow?: string
  msg?: string
  action?: string
  reason?: string
  result?: string  // of action
  run?: string
  pat?: string // pattern = BUY/SELL
  // tx?: ITX
  prices?: number[]
  diffs?: number[]
  diffPoints?: number[]
  take?: number
  secs?: number
  delta?: number
}



export interface IBotState {
  holding: boolean,
  inPrice: number,
  outPrice: number,
  snap: ISnap,
  total: number, // cumulative
  tradeCount: number
}


