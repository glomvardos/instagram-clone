import { useState } from 'react'
import Backdrop from '../backdrop'

export default function ProfileIcon() {
  const [isClicked, setIsClicked] = useState(false)
  const searchInputHandler = () => setIsClicked(prevState => !prevState) // Show / hide profile options
  return (
    <div className='ml-custom22 relative'>
      {isClicked && <Backdrop onClickHandler={searchInputHandler} />}
      {isClicked && (
        <div
          onClick={searchInputHandler}
          className='absolute rounded-full h-7 w-7 left-2/4 top-2/4 transform -translate-y-2/4 -translate-x-2/4 border-textDark border-1'
        ></div>
      )}
      <img
        className='h-custom22 w-custom22 cursor-pointer'
        src='/images/profile-icon.jpg'
        alt="User's profile icon"
        onClick={searchInputHandler}
      />
      {isClicked && (
        <div className='opacity-0 animate-opacity'>
          <div className='absolute h-custom14 w-custom14  bg-white top-8 left-2/4 transform -translate-x-2/4 -translate-y-0.5 rotate-45 shadow-custom z-10' />
          <div className=' absolute w-full h-3 bg-white z-20 -bottom-7' />
          <div className='p-3 px-4 h-48 w-56 absolute bg-white top-9 -right-4 transform shadow-custom rounded-md'></div>
        </div>
      )}
    </div>
  )
}
