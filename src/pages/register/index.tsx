import { useState } from 'react';

import CardBox from '@/components/cardBox';
import LabelledInput from '@/components/labelledInput';
import PageTemplate from '@/components/pageTemplate';
import { Button } from '@/components/ui/button';
import {
  Card, CardContent, CardHeader, CardTitle,
} from '@/components/ui/card';

type FormInfo={
  partyName: string;
  password: string;
  passwordConfirm: string;
};

function RegisterPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formInfo, setFormInfo] = useState<FormInfo>({
    partyName: '',
    password: '',
    passwordConfirm: '',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log(formInfo);
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
            <CardTitle>회원가입</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4 w-full'>
              <form onSubmit={onSubmit}>
                <div className='grid gap-4'>
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
                  />
                  <LabelledInput
                    id='passwordConfirm'
                    label='비밀번호 확인'
                    placeholder='********'
                    type='password'
                    autoComplete='current-password'
                    disabled={isLoading}
                    value={formInfo.passwordConfirm}
                    onChange={handleChange}
                  />
                  <Button type='submit' disabled={isLoading}>
                    {isLoading ? '로딩 중...' : '회원가입'}
                  </Button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </CardBox>
    </PageTemplate>
  );
}

export default RegisterPage;
