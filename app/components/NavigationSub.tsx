'use client';
import { useEffect, useRef, useState } from 'react';

export default function NavigationSub() {
  const [targetPosition, setTargetPosition] = useState(false);

  // Create a ref with an initial value of null
  const navRef = useRef<HTMLImageElement | null>(null);

  // Function to update element position
  const updateElementPosition = () => {
    const nav = navRef.current;
    if (nav) {
      const rect = nav.getBoundingClientRect();
      if (rect.top < 200) {
        setTargetPosition(true);
      } else {
        setTargetPosition(false);
      }
    }
  };

  // Use useEffect to update the element position on mount and scroll
  useEffect(() => {
    // Initial position update
    updateElementPosition();

    // Update element position on scroll
    const handleScroll = () => {
      updateElementPosition();
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This makes the scroll smoothly
    });
  };

  return (
    <section className="h-[25px] sticky-nav bg-secondBlue text-white px-4 sm:px-8 z-10">
      <div
        ref={navRef}
        className={`effect-item ${targetPosition ? 'effect-item-change' : ''}`}
      >
        <a onClick={scrollToTop}>back up</a>
      </div>
    </section>
  );
}
