export default function Backdrop({ onClickHandler }) {
  return (
    <div
      onClick={onClickHandler}
      className='fixed top-0 left-0 bg-transparent w-full h-full hidden sm:block'
    />
  )
}
