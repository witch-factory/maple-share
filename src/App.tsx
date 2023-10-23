import AuthForm from './components/userAuthForm';

function App() {
  return (
    <main className='p-10 flex justify-center'>
      {/* <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        분배금 계산기
  </h1> */}
      <AuthForm />
      <section>
        <h2>다른 페이지 링크</h2>
        <ul>
          <li>
            <a href='/party-admin'>파티 관리자 페이지</a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default App;
