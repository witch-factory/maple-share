import { Link } from 'react-router-dom';

import { Card } from '@/components/ui/card';

function PageTemplate({ children }: {children: React.ReactNode}) {
  return (
    <main className='w-full h-screen flex flex-col justify-center items-center bg-center bg-cover bg-zinc-900'>
      {children}
      <Card className='w-40 flex flex-col'>
        <Link to='/'>메인</Link>
        <Link to='/login'>로그인</Link>
        <Link to='/register'>회원가입</Link>
      </Card>
    </main>
  );
}

export default PageTemplate;
