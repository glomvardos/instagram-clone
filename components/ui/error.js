export default function Error({ error, isSignup }) {
  const isNotPassword = !error.includes('password')
  return (
    <p
      className={`text-sm text-errorAlert text-center ${isSignup && 'mt-custom18'} mb-4 ${
        isNotPassword && '-mx-1'
      }`}
    >
      {error}
    </p>
  )
}
