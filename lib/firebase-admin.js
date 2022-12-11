import admin from 'firebase-admin';
import 'firebase/auth';
import 'firebase/firestore';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_KEYS)),
  });
}

const auth = admin.auth();
const db = admin.firestore();

export { auth, db };
