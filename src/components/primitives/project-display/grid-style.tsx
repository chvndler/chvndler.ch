import { Grid } from '@/components/ds';

type GridStyleProps = {
  children: React.ReactNode;
};
export const GridStyle = ({ children }: GridStyleProps) => {
  return (
    <>
      <Grid
        align="stretch"
        flow="row"
        columns="4"
        gap="2"
        css={{
          '@md': {
            gridTemplateColumns: 'repeat(2, 1fr)'
          },
          '@sm': {
            gridTemplateColumns: 'repeat(1, 1fr)'
          }
        }}
      >
        {children}
      </Grid>
    </>
  );
};