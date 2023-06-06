export const TopLevelGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section>
        <div className='relative items-center w-full py-12 mx-auto'>
          <div className='grid w-full grid-cols-1 gap-2 mx-auto lg:grid-cols-2'>{children}</div>
        </div>
      </section>
    </>
  );
};
