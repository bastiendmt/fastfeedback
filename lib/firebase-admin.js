import admin from 'firebase-admin';
import 'firebase/auth';
import 'firebase/firestore';

const serviceAccount = require("../firebase_keys.json")

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export default admin.firestore();
