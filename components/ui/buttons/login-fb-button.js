import FbIcon from '../icons/fb-icon'

export default function LoginFbButton({ bgColor, textColor, icon, iconColor, top, bottom, width }) {
  return (
    <button
      className={`bg-${bgColor} flex justify-center items-center mx-auto mt-${top} mb-${bottom} w-${width} rounded-4 py-1`}
      type='button'
    >
      <span className='mr-2'>
        <FbIcon icon={icon} iconColor={iconColor} />
      </span>
      <span className={`text-${textColor} font-semibold text-sm`}>Log in with Facebook</span>
    </button>
  )
}
