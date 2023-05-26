import {cn} from '../../lib/utils'

export const ColorBar = () => {
  return (
    <div
      id={`color-bar`}
      className={cn(`
        color__bar
        absolute
        left-0
        right-0
        top-0
        z-[9999]
        h-[1px]
        w-full
      `)}
    />
  )
}
