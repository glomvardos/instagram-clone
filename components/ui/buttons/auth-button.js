export default function AuthButton({ text, onClickHandler }) {
  return (
    <button
      onClick={onClickHandler}
      disabled
      className=' text-white rounded w-full block text-center py-1 font-semibold text-sm mt-2 disabled:bg-lightBlue disabled:cursor-default'
    >
      {text}
    </button>
  )
}
