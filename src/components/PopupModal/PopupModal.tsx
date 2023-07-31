import React, { useEffect, useState } from 'react'
import {
	View,
	TouchableWithoutFeedback,
	Keyboard,
	Modal as RNModal,
} from 'react-native'
import Animated, {
	Easing,
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated'
import styles from './PopupModal.styles'
import { PopupModalProps } from './PopupModal.types'

const PopupModal: React.FC<PopupModalProps> = ({ children, onDismiss, isVisible }) => {
	const scaleAnimated = useSharedValue(0)
	const [backdropVisible, setBackdropVisible] = useState(false)
	const scale = useSharedValue(0)

	const backdropAnimatedStyle = useAnimatedStyle(() => ({
		opacity: backdropVisible ? interpolate(scale.value, [0, 1], [0, 0.6]) : 0,
	}))

	const animatedStyles = useAnimatedStyle(() => {
		return { transform: [{ scale: scaleAnimated.value }] }
	})

	const animateFocus = () => {
		scaleAnimated.value = withTiming(1, { duration: 180, easing: Easing.linear })
	}

	useEffect(() => {
		scale.value = withTiming(isVisible ? 1 : 0)
		if (!isVisible) {
			Keyboard.dismiss()
		}
		animateFocus()
		setBackdropVisible(isVisible)
	}, [isVisible, backdropVisible])

	if (!isVisible) return <View />

	return (
		<RNModal transparent visible={isVisible}>
			<View style={styles.fullScreen}>
				<TouchableWithoutFeedback onPress={onDismiss}>
					<Animated.View style={[ styles.backdrop, backdropAnimatedStyle]} />
				</TouchableWithoutFeedback>
				<Animated.View
					style={[
						styles.container, 
						animatedStyles,
					]}
				>
					{children}
				</Animated.View>
			</View>
		</RNModal>
	)
}

export default PopupModal
