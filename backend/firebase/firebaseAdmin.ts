import admin from 'firebase-admin';

// Initialize Firebase Admin SDK
const serviceAccount = require('../path/to/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;