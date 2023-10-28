import { Button } from '../ui/button';

function KakaoLoginButton() {
  return (
    <Button className='w-full bg-black text-white space-y-4' variant='outline'>
      <div className='flex items-center justify-center'>
        카카오 로그인
      </div>
    </Button>
  );
}

export default KakaoLoginButton;
