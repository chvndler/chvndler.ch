'use client';

import React, { ReactNode, useState } from 'react';
import * as TIP from '@radix-ui/react-tooltip';
import useWindowSize from '../../lib/hooks/use-window-size';
import clsx from 'clsx';

import Leaflet from './leaflet';

const DEFAULT_DELAY_DURATION = 500;
const DEFAULT_SKIP_DELAY = 300;
const DISABLE_HOVERABLE_CONTENT = false;

/** ---------------------------------------------
 * @tip_root
 *
 * The main component that wraps the trigger and content.
 * Do not provide styles.
 * --------------------------------------------- */
type RootProps = { children?: React.ReactNode } & React.ComponentProps<typeof TIP.Root>;
const TipRoot = ({ children, ...props }: RootProps) => {
  return (
    <TIP.Provider
      delayDuration={DEFAULT_DELAY_DURATION}
      skipDelayDuration={DEFAULT_SKIP_DELAY}
      disableHoverableContent={DISABLE_HOVERABLE_CONTENT}
    >
      <TIP.Root {...props}>{children}</TIP.Root>
    </TIP.Provider>
  );
};

/** ---------------------------------------------
 * @tip_content
 *
 * The content that is displayed when the trigger is hovered.
 * --------------------------------------------- */
type ContentProps = {
  children?: React.ReactNode;
  className?: string;
  onEscapeKeyDown?: (event: React.KeyboardEvent) => void;
  onPointerDownOutside?: (event: React.PointerEvent) => void;
  forceMount?: boolean;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  avoidCollisions?: boolean;
  sticky?: 'partial' | 'always';
  hideWhenDetached?: boolean;
} & React.ComponentProps<typeof TIP.Content>;

const TipContent = React.forwardRef<React.ElementRef<typeof TIP.Content>, ContentProps>(
  (
    {
      children,
      className,
      onEscapeKeyDown,
      onPointerDownOutside,
      forceMount,
      side = 'right',
      sideOffset = 10,
      align = 'center',
      alignOffset = 0,
      avoidCollisions = true,
      sticky = 'always',
      hideWhenDetached = false,
      //..
      ...props
    },
    //..
    forwardedRef,
  ) => {
    return (
      <TIP.Content
        {...props}
        ref={forwardedRef}
        aria-label="atelier-tip"
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        avoidCollisions={avoidCollisions}
        sticky={sticky}
        hideWhenDetached={hideWhenDetached}
        className={clsx(
          'radix-side-top:animate-slide-down-fade',
          'radix-side-right:animate-slide-left-fade',
          'radix-side-bottom:animate-slide-up-fade',
          'radix-side-left:animate-slide-right-fade',
          'inline-flex items-center rounded-lg px-4 py-2.5',
          'bg-B100 dark:bg-B900',
        )}
      >
        <span className="block text-xs leading-4 text-blackA11 dark:text-whiteA11">{children}</span>
      </TIP.Content>
    );
  },
);

type TriggerProps = {
  children?: React.ReactNode;
} & React.ComponentProps<typeof TIP.Trigger>;

const TipTrigger = React.forwardRef<React.ElementRef<typeof TIP.Trigger>, TriggerProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <TIP.Trigger {...props} ref={forwardedRef}>
        {children}
      </TIP.Trigger>
    );
  },
);

export type TipProps = {
  children?: React.ReactNode;
} & React.ComponentProps<typeof TIP.Root>;

export const Tip: React.FC<TipProps> & {
  Trigger: typeof TipTrigger;
  Content: typeof TipContent;
} = (props) => <TipRoot {...props} />;

Tip.Trigger = TipTrigger;
Tip.Content = TipContent;
//..
Tip.displayName = 'Tip';
TipTrigger.displayName = 'TipTrigger';
TipContent.displayName = 'TipContent';

/**
 *
 *
 * renderer..
 */
export default function Tooltip({
  children,
  content,
  fullWidth,
}: {
  children: ReactNode;
  content: ReactNode | string;
  fullWidth?: boolean;
}) {
  const [openTooltip, setOpenTooltip] = useState(false);
  const { isMobile, isDesktop } = useWindowSize();

  return (
    <>
      {isMobile && (
        <button
          type="button"
          className={`${fullWidth ? 'w-full' : 'inline-flex'} sm:hidden`}
          onClick={() => setOpenTooltip(true)}
        >
          {children}
        </button>
      )}
      {openTooltip && isMobile && (
        <Leaflet setShow={setOpenTooltip}>
          {typeof content === 'string' ? (
            <span className="flex w-full items-center justify-center">{content}</span>
          ) : (
            content
          )}
        </Leaflet>
      )}
      {isDesktop && (
        <>
          <Tip>
            <Tip.Trigger className="hidden sm:inline-flex" asChild>
              {children}
            </Tip.Trigger>

            <Tip.Content sideOffset={4} className="animate-slide-up-fade z-30 hidden sm:block">
              {typeof content === 'string' ? (
                <div className="p-5">
                  <span className="">{content}</span>
                </div>
              ) : (
                content
              )}
            </Tip.Content>
          </Tip>
        </>
      )}
    </>
  );
}
