import React from 'react'

const BadgeDefault = ({children}: {children: React.ReactNode}) => (
  <span className='whitespace-nowrap rounded-full font-fraktion leading-4 bg-blackA4 px-2.5 py-0.5 text-[11px] text-grayscale-700 dark:text-grayscale-800 dark:bg-whiteA4 font-[580]'>
    {children}
  </span>
)

export {
  //
  BadgeDefault,
}
