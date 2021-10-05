import Link from 'next/link'

export default function ProfileIconContainer({ children, text, path }) {
  return (
    <Link href={path}>
      <a className='flex items-center py-2 px-4 hover:bg-whiteBg focus:bg-whiteBg focus:outline-none'>
        {children}
        <p className='text-sm text-textDark ml-4'>{text}</p>
      </a>
    </Link>
  )
}
