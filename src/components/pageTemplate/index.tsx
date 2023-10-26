function PageTemplate({ children }: {children: React.ReactNode}) {
  return (
    <main className='w-full h-screen p-10 flex justify-center bg-center bg-cover bg-zinc-900'>
      {children}
    </main>
  );
}

export default PageTemplate;
