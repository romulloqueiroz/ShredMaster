import { StyleSheet } from 'react-native'

export default StyleSheet.create({
		fullScreen: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: 'transparent'
		},
		backdrop: {
			position: 'absolute',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			backgroundColor: '#000'
		},
		container: {
			position: 'absolute',
			borderRadius: 16,
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.25,
			shadowRadius: 3.84,
			elevation: 5,
			alignItems: 'center',
			justifyContent: 'center'
		}
})
