import { useState, useEffect } from 'react';

const browserWidth = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div>
      <h2>Width: {windowSize[0]}</h2>

      <h2>Height: {windowSize[1]}</h2>
    </div>
  );
}

export default browserWidth;