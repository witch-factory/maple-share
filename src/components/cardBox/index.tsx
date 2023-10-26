function CardBox({ children }: {children: React.ReactNode}) {
  return (
    <article className='w-full max-w-lg flex justify-center'>
      {children}
    </article>
  );
}

export default CardBox;
