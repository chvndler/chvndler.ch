import React from 'react'
import Marquee from 'react-fast-marquee'
import {keyframes, styled} from 'stitches.config'
const scroll = keyframes({
    from: {
      '0%': {
        transform: 'translateX(0%)',
      },
    },
    to: {
      '100%': {
        transform: 'translateX(-100%)',
      },
    },
  }),
  StyledMarqueeContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    minWidth: '100vw',
    position: 'relative',
    padding: 0,
    margin: 'auto',
    overflowX: 'hidden',
    overflowY: 'hidden',
    flexDirection: 'row',
    color: '$gray12',

    '&:hover': {
      animation: 'var(--pause-on-hover)',
    },

    '&:active': {
      animation: 'var(--pause-on-click)',
    },
  }),
  StyledContent: any = styled(Marquee, {
    overflow: 'hidden',
    height: 'auto',
    animation: `${scroll} var(--duration) linear var(--delay) var(--iteration-count)`,
  })
type MarqueeContentPrimitiveProps = React.ComponentProps<typeof Marquee>
export const MarqueeContainer = StyledMarqueeContainer
export const MarqueeContent: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<MarqueeContentPrimitiveProps> &
    React.RefAttributes<React.ElementRef<typeof StyledContent>>
  // eslint-disable-next-line import/no-named-as-default-member
> = React.forwardRef<React.ElementRef<typeof StyledContent>, MarqueeContentPrimitiveProps>(
  ({children, ...props}, forwardedRef) => (
    <StyledMarqueeContainer>
      <StyledContent {...props} ref={forwardedRef}>
        {children}
      </StyledContent>
    </StyledMarqueeContainer>
  )
)
