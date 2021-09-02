import { createSlice } from '@reduxjs/toolkit'
import { app } from '../lib/firebase'

const firebaseSlice = createSlice({
  name: 'firebase',
  initialState: {
    isLoading: false,
  },
  reducers: {
    isLoadingHandler(state) {
      state.isLoading = true
    },
    isNotLoadingHandler(state) {
      state.isLoading = false
    },
  },
})

export const firebaseActions = firebaseSlice.actions

export default firebaseSlice
