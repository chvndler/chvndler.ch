import { styled } from 'stitches.config';
import React from 'react';

type SliderProps = {
  children?: React.ReactNode;
};

const ContentCard = styled('div', {
  zIndex: '4',
  appearance: 'none',
  border: '1px solid $chxn3',
  borderRadius: 20,
  boxSizing: 'border-box',
  outline: 'none',
  padding: 20,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignContent: 'center',
  alignItems: 'center',
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  backgroundColor: '$grayA3',
  textDecoration: 'none',
  color: 'inherit',
  flexShrink: 0,
  position: 'relative',

  minHeight: '350px',
  minWidth: '350px',

  '&:hover': {
    backgroundColor: '$grayA4'
  }
});

export const SliderCard = ({ children }: SliderProps) => {
  return (
    <>
      <ContentCard>{children}</ContentCard>
    </>
  );
};
