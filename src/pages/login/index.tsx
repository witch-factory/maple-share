import { useState } from 'react';

import CardBox from '@/components/cardBox';
import LabelledInput from '@/components/labelledInput';
import PageTemplate from '@/components/pageTemplate';
import Separator from '@/components/separator';
import GoogleLoginButton from '@/components/socialLoginButton/google';
import KakaoLoginButton from '@/components/socialLoginButton/kakao';
import { Button } from '@/components/ui/button';
import {
  Card, CardContent, CardHeader, CardTitle,
} from '@/components/ui/card';

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
                <div className='grid gap-4'>
                  <LabelledInput
                    id='party'
                    label='파티명'
                    placeholder='파티명'
                    type='text'
                    autoCapitalize='none'
                    autoComplete='organization'
                    autoCorrect='off'
                    disabled={isLoading}
                  />
                  <LabelledInput
                    id='password'
                    label='비밀번호'
                    placeholder='********'
                    type='password'
                    autoComplete='current-password'
                    disabled={isLoading}
                  />
                  <Button type='submit' disabled={isLoading}>
                    {isLoading ? '로딩 중...' : '입장'}
                  </Button>
                </div>
              </form>
              <Separator text='소셜 로그인' />

              <GoogleLoginButton />
              <KakaoLoginButton />
            </div>
          </CardContent>
        </Card>
      </CardBox>

    </PageTemplate>
  );
}

export default LoginPage;
