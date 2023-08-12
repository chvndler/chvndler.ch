'use client';

import React from 'react';

interface ColourBoxProps {
  children?: React.ReactNode;
  colour?: string;
  className?: string;
}

export const ColorBox = ({
  children,
  colour,
  className,
  ...rest
}: ColourBoxProps) => {
  return (
    <div
      style={{
        width: '40px',
        height: '40px',
        border: '1px solid gray',
        backgroundColor: colour,
      }}
      className={className}
      {...rest}>
      {children}
    </div>
  );
};
