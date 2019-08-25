import {
  ISnap,
  IPrice
} from "../types/types"

const swingDown: number[] = [
  120,
  140,
  140,
  120,
  90
]

const swingUp: number[] = [
  150,
  150,
  140,
  100,
  120,
  160
] // FDDUU

const oneDown: number[] = [
  200,
  100,
  50
]

const seeSaw: number[] = [
  100,
  105,
  99,
  120,
  121,
  122,
  80,
  85,
  70,
  100,
  95
]

const runDown: number[] = [
  100,
  101,
  99,
  120,
  118,
  115,
  112,
  110
]

export const priceData = {
  swingUp,
  swingDown,
  oneDown,
  seeSaw,
  runDown
}

