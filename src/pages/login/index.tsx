import { useState } from 'react';

import CardBox from '@/components/cardBox';
import LabelledInput from '@/components/labelledInput';
import PageTemplate from '@/components/pageTemplate';
import Separator from '@/components/separator';
import GoogleLoginButton from '@/components/socialLoginButton/google';
import KakaoLoginButton from '@/components/socialLoginButton/kakao';
import { Button } from '@/components/ui/button';
import {
  Card, CardContent, CardHeader, CardTitle, CardDescription,
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
        <Card className='w-[90%] mx-auto'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl font-bold'>로그인</CardTitle>
            <CardDescription>파티명과 비밀번호를 입력해 주세요.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-4 w-full'>
              <form onSubmit={onSubmit}>
                <div className='space-y-4'>
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
                  <Button type='submit' disabled={isLoading} className='w-full'>
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
