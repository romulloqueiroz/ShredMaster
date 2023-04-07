import {
  View,
  Text,
  ModalCard, Button
} from '@components';
import { useExercises } from '@hooks';

interface ConfirmDeleteModalProps {
  onDismiss: () => void;
  id: string;
}
export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ onDismiss, id }) => {
  const { removeExercise } = useExercises();
  return (
    <ModalCard noCloseButton>
      <View mb={12} cross='center'>
        <Text size={20} mb={8}>Delete Exercise</Text>
        <Text center color='subtitle' mb={8}>
          Are you sure you want to delete this exercise?
        </Text>
        <Text center color='subtitle' mb={8}>
          All your progress will be lost.
        </Text>
      </View>
      <View row>
        <Button title='Cancel' onPress={onDismiss} w={134} />
        <View mh={4} />
        <Button
          title='Delete'
          w={134}
          color='red1'
          onPress={() => {
            onDismiss();
            removeExercise(id);
          }} />
      </View>
    </ModalCard>
  );
};
