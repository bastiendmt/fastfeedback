import { useAuth } from '@/lib/auth';
import { updateFeedback } from '@/lib/db';
import { Box, Code, Switch } from '@chakra-ui/react';
import { useState } from 'react';
import { mutate } from 'swr';
import RemoveButton from './RemoveButton';
import { Td } from './Table';

const FeedbackRow = ({ id, author, text, route, status }) => {
  const auth = useAuth();
  const [checked, setChecked] = useState(status === 'active');

  const toggleFeedback = async () => {
    // setChecked(!checked);
    await updateFeedback(id, { status: checked ? 'pending' : 'active' });
    mutate(
      ['/api/feedback', auth.user.token]
      // async (data) => {
      //   const updatedFeedback = data.feedback.find(
      //     (feedback) => feedback.id === id
      //   );
      //   const allFeedback = data.feedback.filter(
      //     (feedback) => feedback.id !== id
      //   );
      //   updatedFeedback.status = !checked;
      //   return {
      //     feedback: [updatedFeedback, ...allFeedback],
      //   };
      // },
      // true
    );
  };

  return (
    <Box as="tr" key={id}>
      <Td fontWeight="medium">{author}</Td>
      <Td>{text}</Td>
      <Td>
        <Code>{'/'}</Code>
      </Td>
      <Td>
        <Switch
          colorScheme="green"
          isChecked={status === 'active'}
          onChange={toggleFeedback}
        />
      </Td>
      <Td>
        <RemoveButton feedbackId={id} />
      </Td>
    </Box>
  );
};

export default FeedbackRow;
