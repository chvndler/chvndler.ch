import {useEffect} from 'react'

import {isServer} from '@/lib/constants'

type ScriptProps = {
 fn: () => void | (() => void)
}

export const Script = ({fn}: ScriptProps) => {
 useEffect(() => {
  if (isServer) return

  return () => {
   fn()
  }
 }, [fn])

 return <></>
}
