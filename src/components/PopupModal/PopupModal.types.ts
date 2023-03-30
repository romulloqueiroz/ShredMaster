import React from 'react'

export interface PopupModalProps {
	isVisible: boolean
	onDismiss: () => void
	children: React.ReactNode
}
