import React, { useEffect, useState } from 'react'
import {
	View,
	TouchableWithoutFeedback,
	Keyboard,
	Modal as RNModal,
	Animated as ReactAnimated
} from 'react-native'
import Animated, {
	EasingNode,
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
	timing
} from 'react-native-reanimated'
import { screenWidth, screenHeight } from '@styles'
import styles from './PopupModal.styles'
import { PopupModalProps } from './PopupModal.types'

const PopupModal: React.FC<PopupModalProps> = ({ children, onDismiss, isVisible }) => {
	const [modalWidth, setModalWidth] = useState(0)
	const [modalHeight, setModalHeight] = useState(0)
	const [scaleAnimated] = useState(new Animated.Value(0))
	const [backdropVisible, setBackdropVisible] = useState(false)
	const scale = useSharedValue(0)

	const backdropAnimatedStyle = useAnimatedStyle(() => ({
		opacity: backdropVisible ? interpolate(scale.value, [0, 1], [0, 0.2]) : 0,
	}))
	
	const animatedStyles = ({ transform: [{ scale: scaleAnimated }] })

	const animateFocus = () => {
		ReactAnimated.parallel([
			// @ts-ignore
			timing(scaleAnimated, {
				toValue: 1,
				duration: 180,
				easing: EasingNode.linear
			})
		]).start()
	}

	useEffect(() => {
		scale.value = withTiming(isVisible ? 1 : 0)
		if (!isVisible) {
			Keyboard.dismiss()
		}
		animateFocus()
		setBackdropVisible(isVisible)
	}, [isVisible, backdropVisible])

	useEffect(() => {
    scaleAnimated.setValue(0)
	}, [isVisible])

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
						{ 
							top: (screenHeight / 2) - (modalHeight / 2), 
							left: (screenWidth / 2) - (modalWidth / 2) 
						}
					]}
					onLayout={(event) => {
						const { width, height } = event.nativeEvent.layout
						setModalWidth(width)
						setModalHeight(height)
					}}
				>
					{children}
				</Animated.View>
			</View>
		</RNModal>
	)
}

export default PopupModal
