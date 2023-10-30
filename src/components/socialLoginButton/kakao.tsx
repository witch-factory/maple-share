import { Button } from '../ui/button';

function KakaoLoginButton() {
  return (
    <Button className='w-full bg-yellow-400 text-yellow-900 space-y-4' variant='outline'>
      <div className='flex items-center justify-center'>
        카카오 로그인
      </div>
    </Button>
  );
}

export default KakaoLoginButton;
