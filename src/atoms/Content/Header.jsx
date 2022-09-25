import { PopularIcon } from '../../icons/icon';

function Header() {
  return (
    <header className='sticky top-0 z-10 flex justify-between items-center border-b p-4 border-gray-extralight bg-white'>
        <span className='font-bold text-xl text-gray-900'>Home</span>
        <PopularIcon className={'w-6 h-6 text-primary-base'} />
      </header>
  )
}

export default Header
