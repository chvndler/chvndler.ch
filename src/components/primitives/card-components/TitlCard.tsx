import * as React from 'react';
import { animated } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';

export const TiltCard = () => {
  const ref = React.useRef(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);

  return (
    <animated.div
      ref={ref}
      style={{
        height: 300,
        width: 300,
        background: '#61dafb',
        color: 'white',
        padding: 0,
        ...style
      }}
      {...mouseHandlers}
    >
      Hover over me!
    </animated.div>
  );
};
