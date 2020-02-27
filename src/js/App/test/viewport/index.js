import React from 'react';
import useViewport from './useViewport';

const breakpoint = 620;

const Viewport = () => {
  const { viewWidth, viewHeight } = useViewport();
  return (
      <>
      {viewWidth < breakpoint ? 'width <' : 'width >'}
      {viewHeight < breakpoint ? 'height <' : 'height >'}
      </>
  )
};

Viewport.displayName = 'Viewport';
export default Viewport;
