import React from 'react';
import { styled } from 'stitches.config';

import { Box } from '@/components/ds';

type SliderProps = {
  children?: React.ReactNode;
};

const StyledSvgBox = styled(Box, {
  transition: 'color 0.4s ease',
  color: 'inherit',

  '& svg': {
    '&:hover': {
      color: '$tartOrange'
    }
  },

  variants: {
    color: {
      tartOrange: {
        color: '$chxn4',
        '&:hover': {
          color: '$tartOrange'
        }
      },
      maxBlue: {
        color: '$chxn4',
        '&:hover': {
          color: '$maxBlue'
        }
      }
    }
  }
});

const ContentCard = styled('div', {
  zIndex: '4',
  appearance: 'none',
  // border: '1px solid $chxn3',
  borderRadius: 20,
  boxSizing: 'border-box',
  outline: 'none',
  padding: 20,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'flex-start',
  textAlign: 'left',
  alignContent: 'center',
  alignItems: 'center',
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  backgroundColor: 'transparent',
  textDecoration: 'none',
  color: 'inherit',
  flexShrink: 0,
  position: 'relative',

  minHeight: '300px',
  minWidth: '350px'
  /*
  '&:hover': {
    backgroundColor: '$grayA4'
  }
  */
});

export const SvgBox = StyledSvgBox;

export const SliderCard = ({ children }: SliderProps) => {
  return (
    <>
      <ContentCard>{children}</ContentCard>
    </>
  );
};
