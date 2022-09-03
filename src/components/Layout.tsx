import { styled } from '@/lib/stitches.config';

const LayoutContainer = styled('div', {
  display: 'flex',
  height: 'calc(100vh - 64px)',
  backgroundColor: '$mauve2',
});

export const Layout = ({ children }) => {
  return (
    <>
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};
