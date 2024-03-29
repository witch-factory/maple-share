import { Button } from '@/components/ui/button';

function GoogleLoginButton() {
  return (
    <Button className='w-full bg-red-600 text-white' variant='outline'>
      <div className='flex items-center justify-center'>
        구글 로그인
      </div>
    </Button>
  );
}

export default GoogleLoginButton;
