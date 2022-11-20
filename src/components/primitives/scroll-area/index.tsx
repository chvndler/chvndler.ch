import * as ScrollArea from '@radix-ui/react-scroll-area';
import React from 'react';
import { styled } from 'stitches.config';

import { Space, Text } from '@/components/ds';

const ReactScrollArea = () => (
  <ScrollAreaRoot>
    <ScrollAreaViewport>
      <Box style={{ padding: '15px 20px' }}>
        <Text
          css={{
            color: '$chxn9',
            fontSize: 32,
            fontFamily: '"Lateral Extended Bold", sans-serif',
            fontWeight: 'bold'
          }}
        >
          RESUME.
        </Text>
        <Space size={'1'} />
        <Text css={{ fontSize: 17, fontFamily: `"Scto Grotesk A", sans-serif` }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Integer quis auctor elit sed vulputate mi sit. Amet purus gravida quis blandit. Orci nulla
          pellentesque dignissim enim sit amet venenatis urna. Egestas purus viverra accumsan in nisl nisi scelerisque
          eu ultrices. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Fermentum posuere urna
          nec tincidunt praesent. At augue eget arcu dictum varius duis. Pharetra magna ac placerat vestibulum lectus
          mauris ultrices eros in. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Commodo sed egestas
          egestas fringilla phasellus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Faucibus nisl
          tincidunt eget nullam non. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Nisl condimentum
          id venenatis a condimentum. Ornare lectus sit amet est placerat in egestas. Augue ut lectus arcu bibendum.
          Commodo odio aenean sed adipiscing. Nisi est sit amet facilisis. Risus ultricies tristique nulla aliquet enim
          tortor at. In nibh mauris cursus mattis molestie a iaculis. Quam quisque id diam vel quam elementum pulvinar
          etiam. Porttitor leo a diam sollicitudin tempor.
        </Text>
        <Space size={'2'} />
        <Text
          css={{
            color: '$chxn9',
            fontSize: 32,
            fontFamily: '"Lateral Extended Bold", sans-serif',
            fontWeight: 'bold'
          }}
        >
          ABOUT.
        </Text>
        <Space size={'1'} />
        <Text css={{ fontSize: 17, fontFamily: `"Scto Grotesk A", sans-serif` }}>
          Et malesuada fames ac turpis. Tortor vitae purus faucibus ornare suspendisse. Volutpat diam ut venenatis
          tellus in. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Aliquam purus sit amet luctus
          venenatis lectus magna fringilla urna. Auctor elit sed vulputate mi sit amet mauris. Vel eros donec ac odio
          tempor orci. Erat imperdiet sed euismod nisi porta lorem. Nec sagittis aliquam malesuada bibendum arcu vitae
          elementum. Purus non enim praesent elementum facilisis. Id leo in vitae turpis massa sed elementum tempus.
          Consectetur a erat nam at lectus urna duis convallis. Quis auctor elit sed vulputate mi sit. Malesuada
          bibendum arcu vitae elementum curabitur vitae nunc sed velit. In mollis nunc sed id semper risus in.
          Scelerisque fermentum dui faucibus in. Augue ut lectus arcu bibendum at varius vel pharetra vel. Lectus urna
          duis convallis convallis. Felis donec et odio pellentesque diam volutpat commodo. Tincidunt eget nullam non
          nisi est sit. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Facilisis volutpat est velit
          egestas dui id ornare. Massa enim nec dui nunc. Nisl purus in mollis nunc sed id semper risus. Amet
          consectetur adipiscing elit ut. Sed libero enim sed faucibus. Enim nec dui nunc mattis enim. Porttitor lacus
          luctus accumsan tortor posuere ac ut. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Mi quis
          hendrerit dolor magna eget est lorem ipsum. Vulputate enim nulla aliquet porttitor lacus luctus accumsan
          tortor posuere. Ullamcorper morbi tincidunt ornare massa. Ipsum a arcu cursus vitae congue mauris rhoncus
          aenean vel. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Euismod lacinia at quis risus sed
          vulputate odio ut enim. A arcu cursus vitae congue mauris rhoncus aenean. Sed augue lacus viverra vitae
          congue. Mi ipsum faucibus vitae aliquet nec ullamcorper. Vel fringilla est ullamcorper eget nulla facilisi
          etiam dignissim diam. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Auctor urna nunc id
          cursus metus. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Proin fermentum leo vel orci
          porta. Elit at imperdiet dui accumsan sit. Varius vel pharetra vel turpis nunc eget. Aliquet eget sit amet
          tellus cras adipiscing enim eu. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Cursus
          risus at ultrices mi tempus imperdiet nulla malesuada. Blandit volutpat maecenas volutpat blandit aliquam
          etiam erat velit scelerisque. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Enim eu turpis
          egestas pretium aenean pharetra magna. Arcu cursus vitae congue mauris rhoncus aenean vel.
        </Text>
      </Box>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
);

const SCROLLBAR_SIZE = 0;

const ScrollAreaRoot = styled(ScrollArea.Root, {
  zIndex: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  backgroundColor: 'transparent',
  color: 'white'
});

const ScrollAreaViewport = styled(ScrollArea.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit'
});

const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  background: 'transparent',
  transition: 'background 160ms ease-out',
  '&:hover': {},
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE
  }
});

const ScrollAreaThumb = styled(ScrollArea.Thumb, {
  flex: 1,
  background: 'transparent',
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44
  }
});

const ScrollAreaCorner = styled(ScrollArea.Corner, {
  background: 'transparent'
});

const Box = styled('div', {});

export default ReactScrollArea;
