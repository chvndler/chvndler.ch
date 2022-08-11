import React from 'react';
import { styled } from '@/lib/stitches.config';
import { Flex } from '@/ui';
import * as SwitchPrimitive from '@radix-ui/react-switch';

const StyledSwitch = styled(SwitchPrimitive.Root, {
	all: 'unset',
	width: 30,
	height: 16,
	backgroundColor: '$mauve6',
	borderRadius: '9999px',
	position: 'relative',
	boxShadow: `0 2px 4px $colors$mauveA2`,
	WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
	'&:focus': { boxShadow: `0 0 0 2px $colors$mauve12` },
	'&[data-state="checked"]': {
		backgroundColor: '$mauve5',
		// backgroundColor: '$air',
	},
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
	display: 'block',
	width: 13,
	height: 13,
	backgroundColor: '$volt',
	borderRadius: '9999px',
	boxShadow: `0 2px 2px $mauveA7`,
	transition: 'transform 100ms',
	transform: 'translateX(1.8px)',
	willChange: 'transform',
	'&[data-state="checked"]': { transform: 'translateX(15px)', backgroundColor: '$mist' },
});

// exports..
export const Switch = StyledSwitch;
export const SwitchThumb = StyledThumb;
export const AtelierSwitch = ({ ...props }) => (
	<form>
		<Flex css={{ alignItems: 'center' }}>
			{/* <!-- <Switch id="s1" defaultChecked /> --> */}
			<Switch id="s1" {...props}>
				<SwitchThumb />
			</Switch>
		</Flex>
	</form>
);
