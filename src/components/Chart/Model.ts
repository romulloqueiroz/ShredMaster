import type { SkPath } from '@shopify/react-native-skia'
import { Skia } from '@shopify/react-native-skia'
import { colors } from '@styles'

import { curveLines } from './Math'

export const PADDING = 16

export const COLORS = [colors.aqua, colors.green].map(Skia.Color)

type PriceList = [string, number][]

const POINTS = 20

export const buildGraph = (
  datapoints: PriceList,
  WIDTH: number,
  HEIGHT: number
) => {
  const AJUSTED_SIZE = HEIGHT - PADDING * 2
  const priceList = datapoints.slice(0, POINTS)
  const formattedValues = priceList
    .map((price) => [parseFloat(price[0]), price[1]] as [number, number])
    .reverse()
  const prices = formattedValues.map((value) => value[0])
  const dates = formattedValues.map((value) => value[1])
  const minDate = Math.min(...dates)
  const maxDate = Math.max(...dates)
  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)
  const points = formattedValues.map(([price, date]) => {
    const x = ((date - minDate) / (maxDate - minDate)) * WIDTH
    const y = ((price - minPrice) / (maxPrice - minPrice)) * AJUSTED_SIZE
    return { x, y }
  })
  points.push({ x: WIDTH + 10, y: points[points.length - 1].y })
  const path = curveLines(points, 0.1, 'complex')

  return { minPrice, maxPrice, path }
}
