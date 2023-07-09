'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

export type TextSwitcherProps = {
  hoverText: string;
  defaultText: string;
  className?: string;
  href?: string;
};

export const TextSwitcher = ({
  hoverText,
  defaultText,
  className,
  href,
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
      className={clsx('w-fit transition duration-100 ease-in-out', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {isHovered ? (
        <HoverableTextElement
          className={clsx(
            'font-twk text-[18px] font-[600] lowercase text-sun dark:text-sun',
          )}
          href={href}
          text={hoverText}
        />
      ) : (
        <HoverableTextElement
          className={clsx(
            'font-twk text-[18px] font-[600] lowercase text-carbon-800 dark:text-carbon-50',
          )}
          text={defaultText}
        />
      )}
    </div>
  );
};

export type HoverableTextElementProps = {
  className?: string;
  text: string;
  href?: string;
};

export const HoverableTextElement = ({
  text,
  className,
  href,
}: HoverableTextElementProps) => {
  return (
    <a
      href={href}
      className={clsx(
        'cursor-pointer leading-4 transition-all duration-100',
        className,
      )}>
      {text}
    </a>
  );
};
