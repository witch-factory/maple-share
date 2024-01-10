function LoginChecker({ children }: {children: React.ReactNode}) {
  const loginStatus = localStorage.getItem('userName');
  return (
    <div>
      {loginStatus ? children : <h1>로그인이 필요합니다.</h1>}
    </div>
  );
}

export default LoginChecker;
