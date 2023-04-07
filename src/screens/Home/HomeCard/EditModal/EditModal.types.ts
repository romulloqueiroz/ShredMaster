export interface EditModalProps {
  name: string
  id: string
  onDismiss: () => void
  bpm: number
  setConfirmDeleteModal: (val: boolean) => void
}

