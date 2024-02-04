'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ArrowUp from '../../public/images/arrowUp.svg';

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
    <section className="h-[36px] sticky-nav bg-secondBlue text-white px-4 sm:px-8 z-10">
      <div className="h-full w-full flex justify-between items-center">
        <div
          ref={navRef}
          className={`w-full flex justify-between effect-item ${
            targetPosition ? 'effect-item-change' : ''
          }`}
        >
          <div className="flex">
            <div className="flex justify-center items-center h-[25px] w-[25px] rounded-full bg-firstBlue me-2">
              <a title="Home" href="/">
                <Image
                  className="me-1"
                  width={18}
                  height={18}
                  alt="heart and square logo"
                  src="../../images/hands_icon.svg"
                />
              </a>
            </div>
            <div>heart & square</div>
          </div>
          <div className="flex justify-center items-center h-[25px] w-[25px] rounded-full bg-thirdBlue">
            <a className="forward-top text-center" onClick={scrollToTop}>
              <Image
                className=""
                width={15}
                height={15}
                alt="heart and square logo"
                src="/images/arrowUp.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
