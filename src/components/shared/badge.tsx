const BadgeDefault = ({ children }: { children: React.ReactNode }) => (
  <span className='items-center whitespace-nowrap rounded-full bg-blackA4 px-2.5 py-0.5 font-fraktion text-[11px] font-[580] leading-4 text-grayscale-700 dark:bg-whiteA4 dark:text-grayscale-800'>
    {children}
  </span>
);

export {
  //
  BadgeDefault,
};
