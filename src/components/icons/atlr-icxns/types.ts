import type * as React from 'react'

import type {IcxnVariant} from './index'

export interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never
  color?: string
  width?: string
}

export type IcxnProps = React.ComponentProps<'svg'> & {
  variant: IcxnVariant
}
