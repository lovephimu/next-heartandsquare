'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useParallax } from 'react-scroll-parallax';

type Props = {};

const ContentBlockAlt = React.forwardRef<HTMLDivElement, Props>(({}, ref) => {
  const mage = useParallax<HTMLDivElement>({
    scale: [0.7, 1, 'easeInQuad'],
  });

  const [targetPosition, setTargetPosition] = useState(false);

  // Create a ref with an initial value of null
  const picRef = useRef<HTMLImageElement | null>(null);

  // Function to update element position
  const updateElementPosition = () => {
    const pic = picRef.current;
    if (pic) {
      const rect = pic.getBoundingClientRect();

      if (rect.top < -100) {
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

  return (
    <section
      ref={ref}
      className="min-h-screen bg-firstBlue text-thirdBlue  flex flex-col items-center"
    >
      <div className="w-full flex flex-col items-center mb-5 sticky-block">
        {/* <div className="flex w-full justify-center items-center bg-thirdBlue text-white">
          <p className="m-2">♡ & ⬜️</p>
          <p>© Philipp Soeparno</p>
        </div> */}
        <div className="flex w-full justify-between bg-firstBlue h-1">
          <div className="w-full flex justify-center mt-1 pt-1 border-dashed border-t-2 border-thirdBlue"></div>
        </div>
        <div className="w-full flex flex-col items-center p-4 sm:p-8 max-w-[750px] ">
          <div className="w-full flex justify-center" ref={mage.ref}>
            <div
              ref={picRef}
              className={`w-full  flex justify-center effect-picture ${
                targetPosition ? 'effect-picture-change' : ''
              }`}
            >
              <Image
                src="/../../images/foto.jpeg"
                alt="Photo of me!"
                width={100}
                height={100}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                className="rounded-full p-8 max-w-[350px]"
              />
            </div>
          </div>
          <h1>Hi! 👋</h1>
          <h3 className="text-xs mb-8">...about me...</h3>
          <h3 className="font-roboto-slab-600">From Architecture to Coding</h3>
          <h3 className="text-xs mb-4">My Career</h3>
          <p className="mb-8">
            {
              "I'm an Austrian architect turned landscape architect, now flourishing as a software engineer. My journey may seem unconventional, but it's a path I've navigated with a clear vision. I champion the notion that the world benefits from both specialists and generalists alike—the latter having the unique ability to connect the dots across diverse fields by viewing challenges from a broader perspective."
            }
          </p>
          <h3 className="font-roboto-slab-600">
            Embracing a Holistic Approach
          </h3>
          <h3 className="text-xs mb-4">with Positivity and Determination</h3>
          <p className="mb-8">
            {
              'My approach to work, and life in general, is marked by calm focus and determination. I consistently seek out the silver lining in every project I undertake, aiming to highlight and nurture the positives. This philosophy guides me as I navigate through the complexities of my multifaceted career, always with an eye toward creating harmony and understanding in the spaces between.'
            }
          </p>
          <h3 className="font-roboto-slab-600">🚧 Up next:</h3>
          <h3 className="text-xs mb-4">more Next.js, CMS and D3</h3>
          <p className="mb-8">
            {'With '}
            <span className="font-roboto-slab-500">Heart & Square</span>{' '}
            {
              'I want to gather my thoughts on programming, architecture and illustration in a blog. Everything is still work in progress but if you are interested in my current projects check out my Github or LinkedIn accounts:'
            }
          </p>
          <ul className="list-disc">
            <li>
              {' '}
              <a href="https://github.com/lovephimu">Github</a>
            </li>
            <li>
              {' '}
              <a href="https://www.linkedin.com/in/philipp-soeparno/">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

// Explicitly setting a displayName for the component
ContentBlockAlt.displayName = 'ContentBlockAlt';

export default ContentBlockAlt;
