import { useState, useEffect } from 'react';

const useViewport = () => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const [viewHeight, setViewHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => {
      setViewWidth(window.innerWidth);
      setViewHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { viewWidth, viewHeight };
}

export default useViewport