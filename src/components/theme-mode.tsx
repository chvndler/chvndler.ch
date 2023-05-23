'use client'

import {useTheme} from 'next-themes'
import {useState} from 'react'

import {SunFilled} from './svg/sun'
import {MoonOutlined} from './svg/moon'

export function ThemeToggle() {
  const {setTheme, theme} = useTheme()
  const [isHovering, setIsHovering] = useState(false)

  return (
    <>
      {isHovering && (
        <span className='items-center text-[9px] text-gray-400 mr-1 my-auto uppercase font-sfmono font-semibold hidden md:inline'>
          {theme === null ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}
        </span>
      )}

      <button
        className='w-auto h-auto transition-colors duration-300 ease-in-out bg-transparent text-stone-500'
        onClick={(ev) => {
          ev.preventDefault(), setTheme(theme === 'light' ? 'dark' : 'light')
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false)
        }}
      >
        <span className='sr-only'>Toggle mode</span>
        {theme !== 'dark' ? (
          <MoonOutlined className='w-5 h-5' />
        ) : (
          <SunFilled className='w-5 h-5' />
        )}
      </button>
    </>
  )
}
