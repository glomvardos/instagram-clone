import Link from 'next/link'
import Logo from '../ui/logo'
import Search from '../ui/search'

export default function Header({ children }) {
  return (
    <>
      <header className='bg-white flex justify-center items-center w-full h-custom54 sticky top-0 border-1 divide-solid border-gray px-5'>
        <nav className='flex justify-between items-center max-w-975 w-full'>
          <Link href='/'>
            <a>
              <Logo width='107' top='2' />
            </a>
          </Link>
          <Search />
        </nav>
      </header>
      <main className='max-w-975 mx-auto'>{children}</main>
    </>
  )
}
