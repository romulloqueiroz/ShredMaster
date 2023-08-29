export interface EditModalProps {
  name: string
  id: string
  bpm: number
  timer: number
  onDismiss: () => void
  setConfirmDeleteModal: (val: boolean) => void
}

