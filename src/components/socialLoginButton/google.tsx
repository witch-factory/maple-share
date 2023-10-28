import { Button } from '../ui/button';

function GoogleLoginButton() {
  return (
    <Button className='w-full bg-[#4285F4] text-white' variant='outline'>
      <div className='flex items-center justify-center'>
        구글 로그인
      </div>
    </Button>
  );
}

export default GoogleLoginButton;
