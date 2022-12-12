import { getUserFeedback } from '@/lib/db-admin';
import { auth } from '@/lib/firebase-admin';
import { formatObjectsKeys, logger } from '@/utils/logger';

const feedback = async (req, res) => {
  try {
    const token = req.headers.token;
    const { uid } = await auth.verifyIdToken(token);
    const { feedback } = await getUserFeedback(uid);

    res.status(200).json({ feedback });
  } catch (error) {
    logger.error(
      {
        request: {
          headers: formatObjectsKeys(req.headers),
          url: req.url,
          method: req.method,
        },
        response: {
          statusCode: res.statusCode,
        },
      },
      error.message
    );
    res.status(500).json({ error });
  }
};

export default feedback;
