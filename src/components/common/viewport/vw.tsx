import { ViewportWidthBox } from 'next-real-viewport';

type VWProps = {
  children: React.ReactNode;
};

export const ViewportW = ({ children }: VWProps) => {
  return (
    <>
      <ViewportWidthBox>{children}</ViewportWidthBox>
    </>
  );
};
