import { useState } from 'react'
import { useRouter } from 'next/router'
import { getAuth, signOut } from 'firebase/auth'
import Backdrop from '../backdrop'
import ProfileIconContainer from '../profile-icon-container'
import HumanIcon from '../icons/human-icon'
import SavedIcon from '../icons/saved-icon'
import SettingsIcon from '../icons/settings-icon'
import SwitchAccountsIcon from '../icons/switch-accounts-icon'

export default function ProfileIcon() {
  const [isClicked, setIsClicked] = useState(false)
  const router = useRouter()

  const profileHandler = () => setIsClicked(prevState => !prevState) // Show / hide profile options

  const logoutHandler = () => {
    const auth = getAuth()
    signOut(auth).then(async () => {
      const logoutResponse = await fetch('/api/destroy-cookie', {
        method: 'POST',
      })
      if (logoutResponse.ok) {
        router.replace('/login')
      }
    })
  }

  return (
    <div className='ml-custom22 relative'>
      {isClicked && <Backdrop onClickHandler={profileHandler} />}
      {isClicked && (
        <div
          onClick={profileHandler}
          className='absolute rounded-full h-7 w-7 left-2/4 top-2/4 transform -translate-y-2/4 -translate-x-2/4 border-textDark border-1'
        />
      )}
      <img
        className='h-custom22 w-custom22 cursor-pointer'
        src='/images/profile-icon.jpg'
        alt="User's profile icon"
        onClick={profileHandler}
      />
      {isClicked && (
        <div className='opacity-0 animate-opacity'>
          <div className='absolute h-custom14 w-custom14  bg-white top-8 left-2/4 transform -translate-x-2/4 -translate-y-0.5 rotate-45 shadow-custom z-10' />
          <div className=' absolute w-full h-3 bg-white z-20 -bottom-7' />
          <div className=' w-56 absolute bg-white top-9 -right-4 transform shadow-custom rounded-md'>
            <ProfileIconContainer text='Profile' path='/'>
              <HumanIcon />
            </ProfileIconContainer>
            <ProfileIconContainer text='Saved' path='/'>
              <SavedIcon />
            </ProfileIconContainer>
            <ProfileIconContainer text='Settings' path='/'>
              <SettingsIcon />
            </ProfileIconContainer>
            <ProfileIconContainer text='Switch Accounts' path='/'>
              <SwitchAccountsIcon />
            </ProfileIconContainer>
            <hr className='text-gray' />
            <button
              className='block w-full py-3 px-4 text-sm text-textDark bg-transparent border-0 text-left hover:bg-whiteBg focus:bg-whiteBg focus:outline-none'
              onClick={logoutHandler}
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
