import Spinner from '../spinner/spinner'

export default function AuthButton({ text, onClickHandler, isValid, isLoading }) {
  return (
    <button
      onClick={onClickHandler}
      disabled={!isValid}
      className=' text-white bg-authBlue rounded w-full block text-center py-1 font-semibold text-sm mt-2 disabled:bg-lightBlue disabled:cursor-default'
    >
      {isLoading ? <Spinner /> : text}
    </button>
  )
}
