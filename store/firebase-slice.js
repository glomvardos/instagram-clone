import { createSlice } from '@reduxjs/toolkit'
import { firestore, FieldValue } from '../lib/firebase'

const firebaseSlice = createSlice({
  name: 'firebase',
  initialState: {
    firestore: firestore,
    FieldValue: FieldValue,
  },
})

export default firebaseSlice
