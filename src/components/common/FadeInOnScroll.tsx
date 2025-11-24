import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import React from 'react';

const FadeInOnScroll = ({ children, threshold = 0.1, duration = 'duration-1000' }: { children: React.ReactNode, threshold?: number, duration?: string }) => {
  // Use the custom hook. 'threshold' specifies what percentage of the item must be visible
  const [ref, isVisible] = useIntersectionObserver({ threshold: threshold, once: true });

  const classes = `
    transition-opacity ease-in
    ${duration} 
    ${isVisible ? 'opacity-100' : 'opacity-0'}
  `;

  return (
    <div ref={ref as any} className={classes}>
      {children}
    </div>
  );
};

export default FadeInOnScroll;