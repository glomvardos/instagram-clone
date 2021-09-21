import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'
import AuthContainer from '../ui/auth-container'
import AuthButton from '../ui/buttons/auth-button'
import AppButtons from '../ui/buttons/app-buttons'
import LoginFbButton from '../ui/buttons/login-fb-button'
import Logo from '../ui/logo'
import Input from '../ui/input'
import Divider from '../ui/divider'
import ErrorMessage from '../ui/error-message'

import { firebaseActions } from '../../store/firebase-slice'

export default function Login() {
  const [userInput, setUserInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [error, setError] = useState(null)

  const router = useRouter()
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.firebase.isLoading)

  const onSubmitHandler = async event => {
    event.preventDefault()
    dispatch(firebaseActions.isLoadingHandler())

    // Check for valid email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/
    if (!userInput.match(emailRegex)) {
      dispatch(firebaseActions.isNotLoadingHandler())
      setError('Please enter a valid email.')
      return
    }

    const auth = getAuth()
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        userInput,
        passwordInput
      )
      const jwt = await auth.currentUser.getIdToken()
      const storeToken = await fetch('/api/store-cookie', {
        method: 'POST',
        body: JSON.stringify({ jwt }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const cookieResponse = await storeToken.json()
      if (cookieResponse.ok) {
        router.replace('/')
        setError(null)
        dispatch(firebaseActions.isNotLoadingHandler())
      } else {
        throw new Error('Something went wrong')
      }
    } catch (err) {
      console.log(err.message)
      dispatch(firebaseActions.isNotLoadingHandler())
      if (err.message.includes('auth/user-not-found')) {
        setError(
          "The username you entered doesn't belong to an account. Please check your username and try again."
        )
      } else if (err.message.includes('auth/wrong-password')) {
        setError(
          'Sorry, your password was incorrect. Please double-check your password.'
        )
      } else {
        setError(err.message)
      }
    }
  }

  // Check for valid inputs
  const isNotValidInput =
    userInput.trim() !== '' &&
    passwordInput.trim() !== '' &&
    passwordInput.length >= 6

  return (
    <AuthContainer className='bg-whiteBg min-h-full flex flex-col justify-center items-center'>
      <div>
        <div className='max-w-350 px-9 border-transparent xs:border-gray border-1 border-solid'>
          <Logo />
          <form onSubmit={onSubmitHandler}>
            <Input
              type='text'
              placeholder='Phone number, username, or email'
              ariaLabel='Phone number, username, or email'
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
            />
            <Input
              type='password'
              placeholder='Password'
              ariaLabel='Password'
              value={passwordInput}
              onChange={e => setPasswordInput(e.target.value)}
            />
            <AuthButton
              text='Log in'
              isValid={isNotValidInput}
              isLoading={isLoading}
            />
          </form>
          <Divider />
          <LoginFbButton
            bgColor='transparent'
            bottom='4'
            icon='16'
            iconColor='#385185'
          />
          {error && <ErrorMessage error={error} />}
          <p className='text-center text-xs text-blueDarker mb-4'>
            Forgot password?
          </p>
        </div>
        <div className='max-w-350 px-10 border-transparent mt-3 py-5 xs:border-gray border-1 border-solid'>
          <p className='text-sm text-center'>
            Don't have an account?{' '}
            <Link href='/signup'>
              <a className='text-authBlue font-semibold cursor-pointer'>
                Sign up
              </a>
            </Link>
          </p>
        </div>
      </div>
      <p className='my-5 text-sm'>Get the app.</p>
      <AppButtons />
    </AuthContainer>
  )
}
