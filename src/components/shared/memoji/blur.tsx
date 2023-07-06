'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface BlurredImageProps {
  src: string;
  alt: string;
}

const prefix = 'https://cdn.chvndler.ch/assets/';
const twitter = 'https://twitter.com/chvndlerch';

export const MemojiBlur: React.FC<BlurredImageProps> = ({ src }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

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
      <Image
        ref={imageRef}
        src={isIntersecting ? src : `${prefix}other/chan.memoji.gif`}
        alt='Chan Memoji'
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
          href={twitter}
          className='text-twitter hover:opacity-75'
          rel='norefferer noopener'
          target='_blank'>
          @chvndlerch
        </Link>
      </p>
    </div>
  );
};
