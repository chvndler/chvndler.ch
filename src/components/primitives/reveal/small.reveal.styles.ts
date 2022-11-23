import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { styled } from 'stitches.config';

import { Box } from '@/components/ds';

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
  width: '100%'
});

const StyledTrigger = styled(CollapsiblePrimitive.Trigger, {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: 20,
  color: '$chxn4',
  '&:hover': {
    color: '$chxn3',
    cursor: 'pointer'
  }
});

const StyledCollapsibleContent = styled(CollapsiblePrimitive.Content, {
  paddingTop: '4px'
});

const StyledVisible = styled('div', {
  backgroundColor: '$chxn4',
  color: '$chxn1',
  width: '100%',
  height: 'auto',
  padding: '10px',
  borderRadius: '4px',
  margin: 0
});

const StyledHiddenContent = styled('div', {
  backgroundColor: '$chxn4',
  color: '$chxn1',
  width: '100%',
  height: '200px',
  padding: '10px',
  borderRadius: '4px',
  marginBottom: 4
});

const StyledContentBox = styled(Box, {
  zIndex: '2',
  appearance: 'none',
  borderRadius: 0,
  border: '1px solid $colors$chxn4',
  boxSizing: 'border-box',
  outline: 'none',
  padding: 20,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'flex-start',
  textAlign: 'left',
  alignContent: 'left',
  alignItems: 'left',
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  backgroundColor: '$chxn3',
  textDecoration: 'none',
  color: '$chxn1',
  flexShrink: 0,
  position: 'relative',
  height: 'auto',
  width: '100%',

  variants: {
    alignment: {
      start: {
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      },
      center: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      },
      end: {
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
      }
    }
  }
});

export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = StyledTrigger;
export const CollapsibleContent = StyledCollapsibleContent;
export const Visible = StyledVisible;
export const HiddenContent = StyledHiddenContent;
export const ContentBox = StyledContentBox;
