'use client';

import NextImage from 'next/image';
// import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface BlurredImageProps {
  src: string;
  alt: string;
}

export const MemojiBlur: React.FC<BlurredImageProps> = ({ src, alt }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }, // Adjust the threshold value as needed
    );

    const currentImageRef = imageRef.current;
    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='items-center justify-center w-auto mx-auto memoji md:flex md:flex-col'>
      <NextImage
        onError={() => setHasError(true)}
        ref={imageRef}
        src={
          isIntersecting
            ? src
            : `https://cdn.chvndler.ch/assets/other/chan.memoji.gif`
        }
        alt={alt}
        width={200}
        height={200}
        className='memoji-desktop'
        style={{
          userSelect: 'none',
          width: '200px',
          height: 'auto',
          filter: isIntersecting ? 'none' : 'blur(10px)',
          transition: 'filter 1s ease-out',
        }}
      />
      <p className='text-center font-favorit text-[15px] font-[500] tracking-tight text-carbon-600'>
        follow me{' '}
        <Link
          href='https://twitter.com/chvndlerch'
          className='text-twitter hover:opacity-75'
          rel='norefferer noopener'
          target='_blank'>
          @chvndlerch
        </Link>
      </p>
    </div>
  );
};
