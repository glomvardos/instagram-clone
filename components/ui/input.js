export default function Input({ type, placeholder, ariaLabel, value, onChange }) {
  return (
    <input
      className='bg-whiteBg py-2 px-2 border-1 border-gray text-textDark border-solid w-full rounded mb-2 text-13 focus:border-grayBorderDarker focus:outline-none placeholder-grayDarker'
      type={type}
      placeholder={placeholder}
      aria-label={ariaLabel}
      value={value}
      onChange={onChange}
    />
  )
}
