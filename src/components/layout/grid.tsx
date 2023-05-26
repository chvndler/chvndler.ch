export const TopLevelGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section>
        <div className="relative mx-auto w-full items-center px-5 py-12 md:px-12 lg:px-24">
          <div className="mx-auto grid w-full grid-cols-1 gap-12 lg:grid-cols-2">{children}</div>
        </div>
      </section>
    </>
  );
};
