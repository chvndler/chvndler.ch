import type * as Stitches from '@stitches/react'

const globalKitUtilities = {
  font: (value: Stitches.PropertyValue<'fontFamily'>) => ({
    /**
     * @example font: theme.font.value,
     */
    fontFamily: value
  }),
  p: (value: Stitches.PropertyValue<'padding'>) => ({
    /**
     * @example p: 2,
     * @returns padding: 2;
     */
    padding: value
  }),
  linearGradient: () => (value: Stitches.PropertyValue<'backgroundImage'>) => ({
    backgroundImage: `linear-gradient(${value})`
  }),
  px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
    paddingBottom: value
  }),
  pL: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value
  }),
  pR: (value: Stitches.PropertyValue<'paddingRight'>) => ({
    paddingRight: value
  })
}

export const kitUtils = globalKitUtilities
