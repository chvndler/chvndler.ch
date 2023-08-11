import React, { FC, HTMLAttributes } from 'react';

interface FadeProps extends HTMLAttributes<HTMLDivElement> {
  side: string;
}

interface LineProps extends HTMLAttributes<HTMLDivElement> {
  variant?: string;
  direction: string;
}

export const VerticalFade: FC<FadeProps> = ({ side, ...props }) => {
  return (
    <div
      aria-hidden
      className='verticalFade'
      data-side={side}
      {...props}
    />
  );
};

export const HorizontalFade: FC<FadeProps> = ({ side, ...props }) => {
  return (
    <div
      aria-hidden
      className='horizontalFade'
      data-side={side}
      {...props}
    />
  );
};

export const PageLine: FC<LineProps> = ({ variant, direction, ...props }) => {
  return (
    <div
      aria-hidden
      className='line'
      data-variant={variant}
      data-direction={direction}
      {...props}
    />
  );
};

/*
 // Example Line

  <PageLine
    variant="subtle"
    direction="horizontal"
    style={{
      top: "calc(var(--lh) - var(--offset) * 2 + 1px)",
    }}
  />
*/

/*
  // Example Fade

  <VerticalFade
    side="top"
      style={{
        height: 300,
      }}
  />


    <VerticalFade
      side="bottom"
      style={{
        height: 100,
        zIndex: 3,
      }}
    />

    <HorizontalFade side="left" />
    <HorizontalFade side="right" />

  */
