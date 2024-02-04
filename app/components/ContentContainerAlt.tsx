import Image from 'next/image';
import React from 'react';

type Props = {};

const ContentBlockAlt = React.forwardRef<HTMLDivElement, Props>(({}, ref) => {
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
        <div className="w-full flex flex-col items-center p-4 sm:p-8 max-w-[750px]">
          <Image
            src="/../../images/foto.jpeg"
            alt="Photo of me!"
            width={100}
            height={100}
            layout="responsive"
            // objectFit="cover"
            className="rounded-full p-8 max-w-[350px]"
          />
          <h1>Hi! 👋</h1>
          <h3 className="text-xs mb-8">...about me...</h3>
          <p className="mb-8">
            {
              "I'm an Austrian architect turned landscape architect, now flourishing as a software engineer. My journey may seem unconventional, but it's a path I've navigated with a clear vision. I champion the notion that the world benefits from both specialists and generalists alike—the latter having the unique ability to connect the dots across diverse fields by viewing challenges from a broader perspective."
            }
          </p>
          <p className="mb-8">
            {
              'My approach to work, and life in general, is marked by tranquility and determination. I consistently seek out the silver lining in every project I undertake, aiming to highlight and nurture the positives. This philosophy guides me as I navigate through the complexities of my multifaceted career, always with an eye toward creating harmony and understanding in the spaces between.'
            }
          </p>
          <p className="mb-8">
            {'With '}
            <span className="font-roboto-slab-500">Heart & Square</span>{' '}
            {
              'I want to gather my thoughts on programming, architecture and illustration in a blog. Everything is still work in progress but if you are interested in my work please check out my Github or LinkedIn accounts:'
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
