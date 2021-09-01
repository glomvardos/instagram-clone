import Link from 'next/link'
import AuthContainer from '../ui/auth-container'
import AuthButton from '../ui/buttons/auth-button'
import AppButtons from '../ui/buttons/app-buttons'
import LoginFbButton from '../ui/buttons/login-fb-button'
import Logo from '../ui/logo'
import Input from '../ui/input'
import Divider from '../ui/divider'

export default function Signup() {
  return (
    <AuthContainer className='bg-whiteBg min-h-full flex flex-col justify-center items-center'>
      <div>
        <div className='max-w-350 px-9 border-transparent xs:border-gray border-1 border-solid'>
          <Logo top={8} bottom={3} />
          <p className='font-semibold text-grayDarker text-center text-17 leading-5'>
            Sign up to see photos and videos from your friends.
          </p>
          <LoginFbButton
            bgColor='authBlue'
            width='full'
            textColor='white'
            top='custom18'
            iconColor='#ffffff'
            icon={17}
          />
          <Divider />
          <form>
            <Input
              type='text'
              placeholder='Mobile Number or Email'
              ariaLabel='Mobile Number or Email'
            />
            <Input type='text' placeholder='Full Name' ariaLabel='Full Name' />
            <Input type='text' placeholder='Username' ariaLabel='Username' />
            <Input type='password' placeholder='Password' ariaLabel='Password' />
            <AuthButton text='Next' />
          </form>
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
