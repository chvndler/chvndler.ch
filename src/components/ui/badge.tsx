import React from 'react'

const BadgeDefault = ({children}: {children: React.ReactNode}) => (
  <span className='whitespace-nowrap rounded-full bg-stone-200 px-2.5 py-0.5 text-[9px] text-stone-600 dark:text-stone-300 dark:bg-stone-700'>
    {children}
  </span>
)

export {
  //
  BadgeDefault,
}
