import React from 'react';
import Image from 'next/image';

const prefix = 'https://cdn.chvndler.ch/assets/';

const Memoji = () => {
  return (
    <>
      <div className='items-center justify-center w-auto mx-auto memoji sm:flex md:hidden'>
        <Image
          src={`${prefix}other/chan.memoji.gif`}
          alt='memoji'
          width={200}
          height={200}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=='
          style={{ maxWidth: 200, width: '100%', height: 'auto' }}
        />
      </div>
    </>
  );
};

export { Memoji };
