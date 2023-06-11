import React, { useEffect, useRef, ReactNode } from 'react';
import './RollingObject.scss';

interface RollingObjectProps {
  children: ReactNode;
}

const RollingObject: React.FC<RollingObjectProps> = ({ children }) => {
  const objectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const object = objectRef.current;
      if (object) {
        const scrollPosition = window.pageYOffset;
        object.style.transition = `transform 0.5s ease-out`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div className="rolling-object" ref={objectRef}>
        <div>{children}</div>
    </div>
  );
};

export default RollingObject;
