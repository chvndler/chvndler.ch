import React from 'react';
import Image from 'next/image';

const prefix = 'https://cdn.chvndler.ch/assets/';

import Me from '@public/static/img/chan.memoji.gif';

const Memoji = () => {
  return (
    <>
      <div className='memoji mx-auto flex w-auto items-center justify-center'>
        <Image
          src={Me}
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
