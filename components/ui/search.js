import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { IoMdCloseCircle } from 'react-icons/io'

export default function Search() {
  const [isClicked, setIsClicked] = useState(false)

  const searchInputHandler = () => setIsClicked(prevState => !prevState)
  return (
    <>
      {isClicked && (
        <div
          onClick={searchInputHandler}
          className='fixed top-0 left-0 bg-transparent w-full h-full hidden sm:block'
        />
      )}
      <div className='hidden sm:block bg-whiteBg relative w-52 cursor-text '>
        <div
          className={`h-7 p-2 flex items-center border-gray border-solid border-1 rounded-sm ${
            !isClicked && 'justify-center'
          }`}
        >
          {!isClicked && (
            <div onClick={searchInputHandler} className='flex justify-center items-center w-full'>
              <span>
                <BiSearch className='text-grayDarker font-normal text-xs mr-1' />
              </span>
              <span className='font-normal text-sm text-grayDarker'>Search</span>
            </div>
          )}
          {isClicked && (
            <div className='flex justify-between items-center '>
              <input
                className='text-sm font-normal w-full focus:outline-none bg-transparent'
                placeholder='Search'
              />
              <IoMdCloseCircle
                onClick={searchInputHandler}
                className='text-grayDarker cursor-default'
              />
            </div>
          )}
        </div>
        {isClicked && (
          <>
            <div className='absolute h-custom14 w-custom14  bg-white top-8 left-2/4 transform -translate-x-2/4 rotate-45 shadow-custom z-10' />
            <div className=' absolute w-full h-3 bg-white z-20 -bottom-6' />
          </>
        )}
        {isClicked && (
          <div className='p-3 px-4 h-96 w-96 absolute bg-white top-10 left-2/4 transform -translate-x-2/4 shadow-custom rounded-md'>
            <p className='text-textDark font-semibold text-base'>Recent</p>
            <div className='flex justify-center items-center h-full font-semibold text-sm text-grayDarker'>
              No recent searches.
            </div>
          </div>
        )}
      </div>
    </>
  )
}
