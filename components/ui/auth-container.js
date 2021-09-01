export default function AuthContainer({ children }) {
  return (
    <main className='bg-whiteBg min-h-full flex flex-col justify-center items-center py-8'>
      {children}
    </main>
  )
}
