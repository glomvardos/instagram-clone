import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='px-5'>
      <h1 className='text-center font-bold text-2xl mt-20 mb-5'>
        Sorry, this page isn't available.
      </h1>
      <p className='text-center'>
        The link you followed may be broken, or the page may have been removed.{' '}
        <Link href='/'>
          <a className='text-NotFoundColor'>Go back to Instagram.</a>
        </Link>
      </p>
    </section>
  )
}
