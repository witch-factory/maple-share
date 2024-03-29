import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import CardBox from '@/components/cardBox';
import GoogleLoginButton from '@/components/googleLoginButton';
import KakaoLoginButton from '@/components/kakaoLoginButton';
import LabelledInput from '@/components/labelledInput';
import PageTemplate from '@/components/pageTemplate';
import Separator from '@/components/separator';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { LoginInfo } from '@/types';

function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formInfo, setFormInfo] = useState<LoginInfo>({
    userName: '',
    password: '',
  });
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    await fetch(
      `api/login?userName=${formInfo.userName}&password=${formInfo.password}`,
    )
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json() as Promise<LoginInfo>;
      })
      .then(res => {
        setIsLoading(false);
        if (res.userName === formInfo.userName) {
          localStorage.setItem('userName', res.userName);
          navigate('/');
        }
      });
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
            <CardDescription>
              사용자명과 비밀번호를 입력해 주세요.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-4 w-full'>
              <form onSubmit={onSubmit}>
                <div className='space-y-4'>
                  <LabelledInput
                    id='userName'
                    label='사용자명'
                    placeholder='라라'
                    type='text'
                    autoCapitalize='none'
                    autoComplete='organization'
                    autoCorrect='off'
                    disabled={isLoading}
                    value={formInfo.userName}
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
                    {isLoading ? '로딩 중...' : '입장'}
                  </Button>
                </div>
              </form>
              <Button className='w-full bg-zinc-500 text-white' type='button'>
                <Link
                  className='inline-block text-sm no-underline'
                  to='/register'
                >
                  파티 만들기
                </Link>
              </Button>
              <Separator text='소셜 로그인' />
              <GoogleLoginButton />
              <KakaoLoginButton />

              <Separator text='사용자명/비밀번호 찾기' />
              <div className='w-full flex flex-row space-x-4'>
                <Button className='w-full text-white p-0' type='button'>
                  <Link
                    className='flex w-full h-full text-sm no-underline justify-center items-center'
                    to='/id-inquiry'
                  >
                    사용자명 찾기
                  </Link>
                </Button>
                <Button className='w-full text-white p-0' type='button'>
                  <Link
                    className='flex w-full h-full text-sm no-underline justify-center items-center'
                    to='/pw-inquiry'
                  >
                    비밀번호 찾기
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardBox>
    </PageTemplate>
  );
}

export default LoginPage;
