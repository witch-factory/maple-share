import { useState } from 'react';

import CardBox from '@/components/cardBox';
import LabelledInput from '@/components/labelledInput';
import PageTemplate from '@/components/pageTemplate';
import { Button } from '@/components/ui/button';
import {
  Card, CardContent, CardHeader, CardTitle,
} from '@/components/ui/card';

function RegisterPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log('submit');
    }, 3000);
    console.log('submit');
  };

  return (
    <PageTemplate>
      <CardBox>
        <Card className='w-[90%]'>
          <CardHeader>
            <CardTitle>회원가입</CardTitle>
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
                  <LabelledInput
                    id='passwordConfirm'
                    label='비밀번호 확인'
                    placeholder='********'
                    type='password'
                    autoComplete='current-password'
                    disabled={isLoading}
                  />
                  <Button type='submit' disabled={isLoading}>
                    {isLoading ? '로딩 중...' : '가입'}
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
