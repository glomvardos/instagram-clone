import { configureStore } from '@reduxjs/toolkit'
import firebaseSlice from './firebase-slice'

const store = configureStore({
  reducer: {
    firebase: firebaseSlice.reducer,
  },
})

export default store
