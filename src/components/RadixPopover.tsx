import React from 'react';
import { styled, keyframes } from '@stitches/react';
import { violet, mauve, blackA } from '@radix-ui/colors';
import { CircleIcon, Cross2Icon } from '@radix-ui/react-icons';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import {CmndK} from "@/components/CmndK";

const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});
const StyledContent = styled(PopoverPrimitive.Content, {
    all: 'unset',
    zIndex: '9999',
    height: 'auto',
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
});



function Content({ children, ...props }) {
    return (
        <PopoverPrimitive.Portal>
            <StyledContent {...props}>
                {children}
            </StyledContent>
        </PopoverPrimitive.Portal>
    );
}

const StyledClose = styled(PopoverPrimitive.Close, {
    all: 'unset',
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 25,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: violet.violet11,
    position: 'absolute',
    top: 5,
    right: 5,

    '&:hover': { backgroundColor: violet.violet4 },
    '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

// Exports
export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = Content;
export const PopoverClose = StyledClose;



const IconButton = styled('button', {
    all: 'unset',
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 35,
    width: 35,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: violet.violet11,
    backgroundColor: 'white',
    boxShadow: `0 2px 10px ${blackA.blackA7}`,
    '&:hover': { backgroundColor: violet.violet3 },
    '&:focus': { boxShadow: `0 0 0 2px black` },
});


const RadixPopover = () => (
    <Popover>
        <PopoverTrigger asChild>
            <IconButton aria-label="Update dimensions">
                <CircleIcon />
            </IconButton>
        </PopoverTrigger>


        <PopoverContent sideOffset={5} >
           <CmndK />




            <PopoverClose aria-label="Close">
                <Cross2Icon />
            </PopoverClose>

        </PopoverContent>
    </Popover>
);

export default RadixPopover;
