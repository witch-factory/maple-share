import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function UserAuthForm() {
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
    <div className='grid gap-6'>
      <form onSubmit={onSubmit}>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Label htmlFor='party'>
              파티명
            </Label>
            <Input
              id='party'
              placeholder='단퐁회'
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
      <Button variant='outline' type='button' disabled={isLoading}>
        Google 로그인
      </Button>
    </div>
  );
}

export default UserAuthForm;
