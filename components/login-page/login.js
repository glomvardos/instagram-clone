import Link from 'next/link'
import AuthContainer from '../ui/auth-container'
import AuthButton from '../ui/buttons/auth-button'
import AppButtons from '../ui/buttons/app-buttons'
import LoginFbButton from '../ui/buttons/login-fb-button'
import Logo from '../ui/logo'
import Input from '../ui/input'
import Divider from '../ui/divider'

export default function Login() {
  return (
    <AuthContainer className='bg-whiteBg min-h-full flex flex-col justify-center items-center'>
      <div>
        <div className='max-w-350 px-9 border-transparent xs:border-gray border-1 border-solid'>
          <Logo top={9} bottom={9} />
          <form>
            <Input type='text' placeholder='Phone number, username, or email' />
            <Input type='password' placeholder='Password' />
            <AuthButton text='Log in' />
          </form>
          <Divider />
          <LoginFbButton
            bgColor='transparent'
            textColor='blue'
            top={6}
            bottom={4}
            icon='16'
            iconColor='#385185'
          />
          <p className='text-center text-xs text-blueDarker mb-4'>Forgot password?</p>
        </div>
        <div className='max-w-350 px-10 border-transparent mt-3 py-5 xs:border-gray border-1 border-solid'>
          <p className='text-sm text-center'>
            Don't have an account?{' '}
            <Link href='/signup'>
              <a className='text-authBlue font-semibold cursor-pointer'>Sign up</a>
            </Link>
          </p>
        </div>
      </div>
      <p className='my-5 text-sm'>Get the app.</p>
      <AppButtons />
    </AuthContainer>
  )
}
