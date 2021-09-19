import { useRouter } from 'next/router'
import FbIcon from '../icons/fb-icon'

export default function LoginFbButton({ bgColor, textColor, icon, iconColor, top, bottom, width }) {
  const { pathname } = useRouter()
  const mt = pathname === '/signup' ? 'mt-custom18' : pathname === '/login' ? 'mt-6' : `mt-${top}`

  return (
    <button
      className={`bg-${bgColor} flex justify-center items-center mx-auto ${mt} mb-${bottom} w-${width} rounded-4 py-1`}
      type='button'
    >
      <span className='mr-2'>
        <FbIcon icon={icon} iconColor={iconColor} />
      </span>
      <span className={`text-${textColor} font-semibold text-sm`}>Log in with Facebook</span>
    </button>
  )
}
