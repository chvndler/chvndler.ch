/** @format */

import clsx from 'clsx'
import React, {useRef} from 'react'

import {Portal} from '@/components/primitives/portal'
import {useLoader} from '@/context/use-loader'
import {range} from '@/lib/utils'

import s from './loader.module.scss'

export const Loader = () => {
  const dotsRef = useRef(null)
  const {loading} = useLoader(({loading}) => ({loading}))

  return (
    <Portal id='overlay'>
      <div
        style={{
          backgroundColor: 'black',
          position: 'fixed',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
          zIndex: 10,
          visibility: loading ? 'visible' : 'hidden'
        }}>
        <span className={clsx({[s['loading']]: loading})} ref={dotsRef}>
          {range(3).map((i) => (
            // @ts-ignore
            <span style={{'--idx': i}} key={i}>
              <div className={'line-scale-pulse-out-rapid'} />.
            </span>
          ))}
        </span>
      </div>
    </Portal>
  )
}

export {useLoader}
