import { getAllSites } from '@/lib/db-admin';
import db from '@/lib/firebase-admin';

const sites = async (_, res) => {
  const sites = await getAllSites();

  res.status(200).json({ sites });
};

export default sites;
