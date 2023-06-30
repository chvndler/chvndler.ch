'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

export type TextSwitcherProps = {
  hoverText: string;
  defaultText: string;
  className?: string;
};

export const TextSwitcher = ({
  hoverText,
  defaultText,
  className,
}: TextSwitcherProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={clsx('w-fit transition duration-300 ease-in-out', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {isHovered ? (
        <HoverableTextElement
          className={clsx('font-[650] text-azure dark:text-azure')}
          text={hoverText}
        />
      ) : (
        <HoverableTextElement
          className={clsx('font-[650] text-charcoal dark:text-carbon-50')}
          text={defaultText}
        />
      )}
    </div>
  );
};

export type HoverableTextElementProps = {
  className?: string;
  text: string;
};

export const HoverableTextElement = ({
  text,
  className,
}: HoverableTextElementProps) => {
  return (
    <p
      className={clsx(
        'cursor-pointer font-walter text-[16px] leading-4 transition-all duration-150',
        className,
      )}>
      {text}
    </p>
  );
};
