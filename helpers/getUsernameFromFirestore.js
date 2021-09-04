import { collection, query, where, getDocs } from 'firebase/firestore'
import { firestore } from '../lib/firebase'

export const getUsernameFromFirestore = async name => {
  const q = query(collection(firestore, 'users'), where('username', '==', name))
  const queryResult = await getDocs(q)
  const usersResult = []
  queryResult.forEach(user => {
    if (user.data() !== undefined) usersResult.push(user.data())
  })
  return usersResult
}
