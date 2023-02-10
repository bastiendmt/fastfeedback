import { getUserSites } from '@/lib/db-admin';
import { auth } from '@/lib/firebase-admin';
import { formatObjectsKeys, logger } from '@/utils/logger';

const sites = async (req, res) => {
  try {
    if (req.headers.token) {
      console.log('TOKEN', req.headers.token);
      const { uid } = await auth.verifyIdToken(req.headers.token);
      console.log('UID', uid);
      const { sites } = await getUserSites(uid);

      res.status(200).json({ sites });
    } else {
      throw new Error('No token provided');
    }
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

export default sites;
