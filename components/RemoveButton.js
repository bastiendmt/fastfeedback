import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  DeleteIcon,
  SearchIcon,
  IconButton,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import { mutate } from 'swr';
import { useAuth } from '@/lib/auth';
import { deleteFeedback } from '@/lib/db';

const RemoveButton = ({ feedbackId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const auth = useAuth();
  const onDelete = () => {
    console.log('goodbye...');
    deleteFeedback(feedbackId);
    mutate(
      ['/api/feedback', auth.user.token],
      async (data) => {
        return {
          feedback: data.feedback.filter(
            (feedback) => feedback.id !== feedbackId
          ),
        };
      },
      false
    );
    onClose();
  };

  return (
    <>
      <IconButton
        aria-label="Delete feedback"
        bgColor={'red.100'}
        icon="delete"
        variant="ghost"
        onClick={onOpen}
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Feedback
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You cant undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default RemoveButton;
