import Header from '@/components/header';

function PageTemplate({ children }: {children: React.ReactNode}) {
  return (
    <main className='w-full h-screen flex flex-col items-center bg-center bg-cover bg-zinc-800'>
      <Header />
      <div className='w-full h-full flex flex-col items-center justify-center'>
        {children}
      </div>
    </main>
  );
}

export default PageTemplate;
