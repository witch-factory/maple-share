import { Link } from 'react-router-dom';

import icon from '@/assets/icons/icon.png';

function Header() {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container flex max-w-5xl h-12 items-center space-x-4 sm:justify-between sm:space-x-0'>
        <Link to='/' className='flex flex-row items-center gap-2 sm:gap-3'>
          <div className='w-8 h-8'>
            <img src={icon} alt='메소 아이콘' />
          </div>
          <h1 className='text-xl sm:text-2xl font-bold sm:inline-block'>
            보스 분배금 계산기
          </h1>
        </Link>
        <nav>
          <ul className='flex flex-row'>
            <li>
              <Link to='/' className='flex items-center justify-center w-16 h-12'>홈</Link>
            </li>
            <li>
              <Link to='/login' className='flex items-center justify-center w-16 h-12'>로그인</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
