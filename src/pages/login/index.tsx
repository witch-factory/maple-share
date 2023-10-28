import { useState } from 'react';

import CardBox from '@/components/cardBox';
import PageTemplate from '@/components/pageTemplate';
import { Button } from '@/components/ui/button';
import {
  Card, CardContent, CardHeader, CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log('submit');
    }, 3000);
  };

  return (
    <PageTemplate>
      <CardBox>
        <Card className='w-[90%]'>
          <CardHeader>
            <CardTitle>로그인</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4 w-full'>
              <form onSubmit={onSubmit}>
                <div className='grid gap-2'>
                  <div className='grid gap-1'>
                    <Label htmlFor='party'>
                      파티명
                    </Label>
                    <Input
                      id='party'
                      placeholder='파티명'
                      type='text'
                      autoCapitalize='none'
                      autoComplete='organization'
                      autoCorrect='off'
                      disabled={isLoading}
                    />
                  </div>
                  <div className='grid gap-1'>
                    <Label htmlFor='password'>
                      비밀번호
                    </Label>
                    <Input
                      id='password'
                      placeholder='********'
                      type='password'
                      autoComplete='current-password'
                      disabled={isLoading}
                    />
                  </div>
                  <Button type='submit' disabled={isLoading}>
                    {isLoading ? '로딩 중...' : '입장'}
                  </Button>
                </div>
              </form>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <span className='w-full border-t' />
                </div>
                <div className='relative flex justify-center text-xs uppercase'>
                  <span className='bg-background px-2 text-muted-foreground'>
                    소셜 로그인
                  </span>
                </div>
              </div>
              <Button className='w-full bg-[#4285F4] text-white' variant='outline'>
                <div className='flex items-center justify-center'>
                  <svg
                    className=' w-5 h-5 mr-2'
                    fill='none'
                    height='24'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    width='24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='12' cy='12' r='10' />
                    <circle cx='12' cy='12' r='4' />
                    <line x1='21.17' x2='12' y1='8' y2='8' />
                    <line x1='3.95' x2='8.54' y1='6.06' y2='14' />
                    <line x1='10.88' x2='15.46' y1='21.94' y2='14' />
                  </svg>
                  구글 로그인
                </div>
              </Button>
              <Button className='w-full bg-black text-white space-y-4' variant='outline'>
                <div className='flex items-center justify-center'>
                  <svg
                    className=' w-5 h-5 mr-2'
                    fill='none'
                    height='24'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    width='24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z' />
                    <path d='M10 2c1 .5 2 2 2 5' />
                  </svg>
                  애플 로그인
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </CardBox>

    </PageTemplate>
  );
}

export default LoginPage;
