import { useState } from 'react';
import { Link } from 'react-router-dom';

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

type FormInfo={
  partyName: string;
  password: string;
};

function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formInfo, setFormInfo] = useState<FormInfo>({
    partyName: '',
    password: '',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInfo(prev => ({
      ...prev,
      [name]: value,
    }));
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
                    id='partyName'
                    label='파티명'
                    placeholder='파티명'
                    type='text'
                    autoCapitalize='none'
                    autoComplete='organization'
                    autoCorrect='off'
                    disabled={isLoading}
                    value={formInfo.partyName}
                    onChange={handleChange}
                    required
                  />
                  <LabelledInput
                    id='password'
                    label='비밀번호'
                    placeholder='********'
                    type='password'
                    autoComplete='current-password'
                    disabled={isLoading}
                    value={formInfo.password}
                    onChange={handleChange}
                    required
                  />
                  <Button type='submit' disabled={isLoading} className='w-full'>
                    {isLoading ? '로딩 중...' : '로그인'}
                  </Button>
                </div>
              </form>
              <Button className='w-full bg-green-500 text-white' type='button'>
                <Link className='inline-block text-sm no-underline' to='/register'>
                  회원가입
                </Link>
              </Button>
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
