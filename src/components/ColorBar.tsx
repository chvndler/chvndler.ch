import { Box } from '@/ui';


export const ColorBar = () => {
	return(
		<Box css={{ zIndex: '9999', position: 'fixed', top: 0, left: 0, right: 0, minWidth: '100vw', height: '6px', padding: 0, margin: 0, backgroundColor: '$volt' }} />
	);
}
