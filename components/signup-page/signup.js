import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import AuthContainer from '../ui/auth-container'
import AuthButton from '../ui/buttons/auth-button'
import AppButtons from '../ui/buttons/app-buttons'
import LoginFbButton from '../ui/buttons/login-fb-button'
import Logo from '../ui/logo'
import Input from '../ui/input'
import Divider from '../ui/divider'
import ErrorMessage from '../ui/error-message'
import { firestore } from '../../lib/firebase'
import { firebaseActions } from '../../store/firebase-slice'
import { capitalizeName } from '../../helpers/capitalizeName'
import { getUsernameFromFirestore } from '../../helpers/getUsernameFromFirestore'

export default function Signup() {
  const [emailInput, setEmailInput] = useState('')
  const [usernameInput, setUsernameInput] = useState('')
  const [fullnameInput, setFullnameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [error, setError] = useState(null)

  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.firebase.isLoading)

  const onSubmitHandler = async event => {
    event.preventDefault()
    dispatch(firebaseActions.isLoadingHandler())

    // Check for valid email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/
    if (!emailInput.match(emailRegex)) {
      dispatch(firebaseActions.isNotLoadingHandler())
      setError('Please enter a valid email.')
      return
    }
    // Check if username already exists
    const result = await getUsernameFromFirestore(usernameInput)
    if (result.length > 0) {
      dispatch(firebaseActions.isNotLoadingHandler())
      setError('Username already exists')
      return
    }

    const auth = getAuth()
    try {
      const createdUser = await createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      createdUser.user.displayName = usernameInput

      // Add user properties to firestore
      const addUserProps = await addDoc(collection(firestore, 'users'), {
        userId: createdUser.user.uid,
        username: usernameInput.toLowerCase(),
        fullName: capitalizeName(fullnameInput),
        emailAddress: emailInput.toLowerCase(),
        following: [],
        followers: [],
        dateCreated: Date.now(),
      })

      // Reset form
      setEmailInput('')
      setUsernameInput('')
      setFullnameInput('')
      setPasswordInput('')

      setError(null)
      dispatch(firebaseActions.isNotLoadingHandler())
    } catch (err) {
      dispatch(firebaseActions.isNotLoadingHandler())
      if (err.message.includes('email-already-in-use')) {
        setError(`Another account is using ${emailInput}`)
      }
    }
  }

  // Check for valid inputs
  const isNotValidInput =
    emailInput.trim() !== '' &&
    usernameInput.trim() !== '' &&
    fullnameInput.trim() !== '' &&
    passwordInput.trim() !== '' &&
    passwordInput.length >= 6

  return (
    <AuthContainer className='bg-whiteBg min-h-full flex flex-col justify-center items-center'>
      <div>
        <div className='max-w-350 px-9 border-transparent xs:border-gray border-1 border-solid'>
          <Logo />
          <p className='font-semibold text-grayDarker text-center text-17 leading-5'>
            Sign up to see photos and videos from your friends.
          </p>
          <LoginFbButton bgColor='authBlue' width='full' iconColor='#ffffff' icon={17} />
          <Divider />
          <form onSubmit={onSubmitHandler}>
            <Input
              type='text'
              placeholder='Mobile Number or Email'
              ariaLabel='Mobile Number or Email'
              value={emailInput}
              onChange={e => setEmailInput(e.target.value.toLowerCase())}
            />
            <Input
              type='text'
              placeholder='Full Name'
              ariaLabel='Full Name'
              value={fullnameInput}
              onChange={e => setFullnameInput(e.target.value)}
            />
            <Input
              type='text'
              placeholder='Username'
              ariaLabel='Username'
              value={usernameInput}
              onChange={e => setUsernameInput(e.target.value.toLowerCase())}
            />

            <Input
              type='password'
              placeholder='Password'
              ariaLabel='Password'
              value={passwordInput}
              onChange={e => setPasswordInput(e.target.value)}
            />

            <AuthButton text='Sign up' isValid={isNotValidInput} isLoading={isLoading} />
          </form>
          {error && <ErrorMessage error={error} isSignup={true} />}
          <p className='text-grayDarker text-center text-xs mt-custom18 mb-10'>
            By signing up, you agree to our <strong>Terms</strong> . Learn how we collect, use and
            share your data in our <strong>Data Policy</strong> and how we use cookies and similar
            technology in our <strong>Cookies Policy</strong> .
          </p>
        </div>
        <div className='max-w-350 px-10 border-transparent mt-3 py-5 xs:border-gray border-1 border-solid'>
          <p className='text-sm text-center'>
            Have an account?{' '}
            <Link href='/login'>
              <a className='text-authBlue font-semibold cursor-pointer'>Log in</a>
            </Link>
          </p>
        </div>
      </div>
      <p className='my-5 text-sm'>Get the app.</p>
      <AppButtons />
    </AuthContainer>
  )
}
