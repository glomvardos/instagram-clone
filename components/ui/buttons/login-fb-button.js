import { useRouter } from 'next/router'
import FbIcon from '../icons/fb-icon'

export default function LoginFbButton({ bgColor, icon, iconColor, top, bottom, width }) {
  const { pathname } = useRouter()
  const mt = pathname === '/signup' ? 'mt-custom18' : pathname === '/login' ? 'mt-6' : `mt-${top}`
  const textColor =
    pathname === '/signup' ? 'text-white' : pathname === '/login' ? 'text-blue' : null

  return (
    <button
      className={`bg-${bgColor} flex justify-center items-center mx-auto ${mt} mb-${bottom} w-${width} rounded-4 py-1`}
      type='button'
    >
      <span className='mr-2'>
        <FbIcon icon={icon} iconColor={iconColor} />
      </span>
      <span className={`${textColor} font-semibold text-sm`}>Log in with Facebook</span>
    </button>
  )
}
