import Image from 'next/image'
import Logo from '../ui/logo'
import Input from '../ui/input'
import Divider from '../ui/divider'
import FbIcon from '../ui/icons/fb-icon'

export default function Auth() {
  return (
    <main className='bg-whiteBg min-h-full flex flex-col justify-center items-center'>
      <div>
        <div className='max-w-350 px-10 border-transparent xs:border-gray border-1 border-solid'>
          <Logo />
          <form>
            <Input type='text' placeholder='Phone number, username, or email' />
            <Input type='password' placeholder='Password' />
            <button
              disabled='true'
              className=' text-white rounded w-full block text-center py-1 font-semibold text-sm mt-2 disabled:bg-lightBlue disabled:cursor-default'
            >
              Log in
            </button>
          </form>
          <Divider />
          <button className='flex items-center mx-auto mt-6 mb-4' type='button'>
            <span className='mr-2'>
              <FbIcon />
            </span>
            <span className='text-blue font-semibold text-sm'>Log in with Facebook</span>
          </button>
          <p className='text-center text-xs text-blueDarker mb-4'>Forgot password?</p>
        </div>
        <div className='max-w-350 px-10 border-transparent mt-3 py-5 xs:border-gray border-1 border-solid'>
          <p className='text-sm text-center'>
            Don't have an account?{' '}
            <button className='text-authBlue font-semibold cursor-pointer'>Sign up</button>
          </p>
        </div>
      </div>
      <p className='my-5 text-sm'>Get the app.</p>
      <div className='flex'>
        <a
          className='mr-2'
          href='https://apps.apple.com/app/instagram/id389801252?vt=lo'
          target='_blank'
        >
          <img src='/images/app-store.png' alt='Available on the App Store' width='140' />
        </a>
        <a
          href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DB2D5EA2F-B787-41A3-845B-E352A4FB71DB%26utm_content%3Dlo%26utm_medium%3Dbadge'
          target='_blank'
        >
          <img src='/images/google-play.png' alt='Available on Google Play' width='140' />
        </a>
      </div>
    </main>
  )
}
