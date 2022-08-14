import * as React from 'react';
import { styled } from '@/lib/stitches.config';

const StyledFlex = styled('div', {
  boxSizing: 'border-box',
  position: 'relative',
  display: 'inline-flex',
  flexDirection: 'row',
  width: 'auto',

  padding: 0,
  margin: 0,

  alignItems: 'left',
  justifyContent: 'left',
  textAlign: 'left',
});

const BlogFlex = ({ ...props }) => {
  return (
    <>
      <StyledFlex>{props.children}</StyledFlex>
    </>
  );
};

export default BlogFlex;
