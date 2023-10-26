function PageTemplate({ children }: {children: React.ReactNode}) {
  return (
    <main className='w-full h-screen flex flex-col justify-center items-center bg-center bg-cover bg-zinc-900'>
      {children}
    </main>
  );
}

export default PageTemplate;
