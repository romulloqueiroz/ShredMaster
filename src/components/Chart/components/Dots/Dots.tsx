import { Dot } from './Dot/Dot'
import { DotsProps } from './Dots.types'

export const Dots: React.FC<DotsProps> = ({ chartWidth, color, graphs }) => (
  <>
    {graphs.xValues.map((x: number, idx: number) => (
      <Dot
        key={idx}
        x={x}
        y={graphs.yValues[idx]}
        width={chartWidth}
        gradientColor={color} />
    ))}
  </>
)
