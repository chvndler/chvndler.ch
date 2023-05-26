'use client'

import React from 'react'
import {useTheme} from 'next-themes'

import {SunFilled} from '../svg/sun'
import {MoonOutlined} from '../svg/moon'

function ThemeSwitch() {
  const [mounted, setMounted] = React.useState(false)
  const {theme, setTheme} = useTheme()

  const [isHovering, setIsHovering] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value)
  }

  return (
    <>
      {isHovering && (
        <span className='text-gray-400 my-auto mr-1 hidden items-center font-fraktion text-[9px] font-semibold uppercase transition-all duration-150 ease-linear md:inline'>
          {theme === null ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}
        </span>
      )}

      <button
        id='theme-toggle'
        className='w-auto h-auto transition-colors duration-300 ease-in-out bg-transparent text-grayscale-700 dark:text-grayscale-600'
        onClick={(ev) => {
          ev.preventDefault(),
            handleChange(ev as any),
            setTheme(theme === 'light' ? 'dark' : 'light')
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false)
        }}
      >
        <span className='sr-only'>Toggle mode</span>

        <span>
          {theme !== 'dark' ? (
            <>
              <MoonOutlined />
            </>
          ) : (
            <>
              <SunFilled />
            </>
          )}
        </span>
      </button>
    </>
  )
}

export default ThemeSwitch
