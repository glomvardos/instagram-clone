import Logo from '../ui/logo'
import Input from '../ui/input'

export default function Auth() {
  return (
    <main className='bg-whiteBg min-h-full flex flex-col justify-center items-center'>
      <Logo />
      <form className='max-w-350 px-9'>
        <Input type='text' placeholder='Phone number, username, or email' />
        <Input type='password' placeholder='Password' />
        <button className='bg-lightBlue text-white rounded w-full block text-center py-1 font-semibold text-sm mt-2'>
          Log in
        </button>
      </form>
      <p>or</p>
      <button type='button'>
        <span>Log in with Facebook</span>
      </button>
      <p>Forgot password?</p>
      <div>
        <p>
          Don't have an account? <span>Sign up</span>
        </p>
      </div>
      <p>Get the app.</p>
    </main>
  )
}
