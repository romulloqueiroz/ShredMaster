import React, { useEffect } from 'react'
import {
	View,
	TouchableWithoutFeedback,
	Keyboard,
	Modal,
} from 'react-native'
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated'
import styles from './PopupModal.styles'
import { PopupModalProps } from './PopupModal.types'

const PopupModal: React.FC<PopupModalProps> = ({ children, onDismiss, isVisible }) => {
	const opacity = useSharedValue(0)

	const backdropAnimatedStyle = useAnimatedStyle(() => ({
		opacity: opacity.value * 0.6,
	}))

	useEffect(() => {
		opacity.value = withTiming(isVisible ? 1 : 0)
		if (!isVisible) Keyboard.dismiss()
	}, [isVisible])

	if (!isVisible) return null

	return (
		<Modal transparent visible={isVisible}>
			<View style={styles.fullScreen}>
				<TouchableWithoutFeedback onPress={onDismiss}>
					<Animated.View style={[ styles.backdrop, backdropAnimatedStyle]} />
				</TouchableWithoutFeedback>
				{children}
			</View>
		</Modal>
	)
}

export default PopupModal
