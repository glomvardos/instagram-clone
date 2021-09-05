import Link from 'next/link'
import Logo from '../ui/logo'
import Search from '../ui/search'

export default function Header() {
  return (
    <header className='bg-white flex justify-center items-center w-full h-custom54 fixed top-0 border-1 divide-solid border-gray'>
      <nav className='flex justify-between items-center max-w-975 w-full px-5'>
        <Link href='/'>
          <a>
            <Logo width={107} top={2} />
          </a>
        </Link>
        <Search />
      </nav>
    </header>
  )
}
