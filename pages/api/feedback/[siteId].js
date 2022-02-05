import { getAllFeedback } from '@/lib/db-admin';

const sites = async (req, res) => {
  const siteId = req.query.siteId;
  const feedback = await getAllFeedback(siteId);

  res.status(200).json({ feedback });
};

export default sites;
