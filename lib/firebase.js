import fb from 'firebase/app'
import { getFirestore, FieldValue } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
}

// Initialize Firebase
export const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()
// Initialize Firestore
const firestore = getFirestore()

export { firestore, FieldValue }
