export default function Error({ error }) {
  const isNotPassword = !error.includes('password')
  return (
    <p className={`text-sm text-errorAlert text-center mb-4 ${isNotPassword && '-mx-1'}`}>
      {error}
    </p>
  )
}
