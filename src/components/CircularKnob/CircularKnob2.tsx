import React, { useCallback } from 'react';
import { Svg, Circle, G } from 'react-native-svg';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface KnobProps {
  minValue: number;
  maxValue: number;
  size?: number;
  onValueChange?: (value: number) => void;
}

type GestureContext = Record<string, number>;

const CircularKnob: React.FC<KnobProps> = ({ minValue, maxValue, size = 200, onValueChange }) => {
  const angle = useSharedValue(0);
  const radius = size / 2;

  const onValueChangeInternal = useCallback(
    (value: number) => {
      onValueChange && onValueChange(value);
    },
    [onValueChange],
  );

  const value = useDerivedValue(() => {
    const newValue = (angle.value / 360) * (maxValue - minValue) + minValue;
    runOnJS(onValueChangeInternal)(newValue);
    return newValue;
  });

  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, GestureContext>({
    onStart: (_, ctx) => {
      ctx.startAngle = angle.value;
    },
    onActive: (event, ctx) => {
      const x = event.translationX;
      const y = -event.translationY;
      let newAngle = (Math.atan2(y, x) * 180) / Math.PI + 90;

      if (newAngle < 0) {
        newAngle += 360;
      }

      const newValue = (newAngle / 360) * (maxValue - minValue) + minValue;
      if (newValue >= minValue && newValue <= maxValue) {
        angle.value = newAngle;
      }

      // Access the value to trigger useDerivedValue calculation
      value.value;
    },
    onEnd: () => {
      angle.value = withSpring(angle.value);
    },
  });

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: radius },
        { translateY: radius },
        { rotate: `${angle.value}deg` },
        { translateY: -radius },
        { translateX: -radius },
      ],
    };
  });

  return (
    <Svg width={size} height={size}>
      <Circle cx={radius} cy={radius} r={radius} fill="gray" />
      <G style={indicatorStyle}>
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <AnimatedCircle
            cx={radius}
            cy={10}
            r={10}
            fill="black"
          />
        </PanGestureHandler>
      </G>
    </Svg>
  );
};

export default CircularKnob;
