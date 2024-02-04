'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import ContentContainer from './components/ContentContainer';
import ContentBlockAlt from './components/ContentContainerAlt';
import NavigationSub from './components/NavigationSub';
import { staticData } from './variables/staticData';

export default function HomePage() {
  const programmingRef = useRef<HTMLDivElement>(null);
  const architectureRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    // Browser supports scrollIntoView options
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <>
      {/* <!-- hero --> */}
      <section className="h-[100vh] overflow-hidden relative">
        <Parallax className="h-[85%]" speed={-20}>
          <div className="w-full flex flex-col h-full justify-center items-center text-thirdBlue">
            {/* <!-- {{ svg src="/logo/hands.svg" }} --> */}

            <Image
              alt="heart and square logo"
              className="w-32 h-auto"
              height={128}
              width={128}
              src="../images/hands.svg"
              priority
            />

            {/* <!-- site name logo --> */}
            <div className="flex justify-center w-full">
              <div className="w-1/3 text-right pr-0.5">
                <h1>heart</h1>
              </div>
              <div className="w-auto text-center">
                <h1>&</h1>
              </div>
              <div className="w-1/3 text-left pl-0.5">
                <h1>square</h1>
              </div>
            </div>
            {/* <!-- credit --> */}
            <div className="flex w-full">
              <div className="w-1/2"></div>
              <div className="w-1/2 text-left">
                <h4>by</h4>
                <h3>
                  <a
                    className="priority-link"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor link behavior
                      scrollToRef(aboutRef);
                    }}
                  >
                    Philipp Soeparno
                  </a>
                </h3>
              </div>
            </div>
            {/* <!-- content --> */}
            <div className="flex w-full">
              <div className="w-1/2 text-right">
                <h5>
                  <a
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor link behavior
                      scrollToRef(programmingRef);
                    }}
                  >
                    Programming
                  </a>
                </h5>
                <h5 className="mt-1">
                  <a
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor link behavior
                      scrollToRef(architectureRef);
                    }}
                  >
                    Architecture
                  </a>
                </h5>
                <h5 className="mt-1">
                  <a
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor link behavior
                      scrollToRef(illustrationRef);
                    }}
                  >
                    Illustration
                  </a>
                </h5>
              </div>
              <div className="w-1/2 text-left"></div>
            </div>
          </div>
        </Parallax>
        {/* <!-- teaser top --> */}
        <div className="bg-secondBlue mx-auto px-2 min-h-[15%] flex flex-col items-center justify-center text-firstBlue relative z-10">
          {/* <h1 className="m-10">Test</h1> */}
        </div>
      </section>
      <NavigationSub />
      <ContentContainer
        title={'Tools For Curiousity'}
        subTitle={'Bringing Website to Life'}
        ref={programmingRef}
        category="Programming"
        text={staticData.programming.text}
        stickyCat={1}
      />
      <ContentContainer
        title={'Translating Ideas Into Reality'}
        subTitle={'Navigating the Creative Process'}
        ref={architectureRef}
        category="Architecture"
        text={staticData.architecture.text}
        stickyCat={2}
      />
      <ContentContainer
        title={'The Love Towards Geometry'}
        subTitle={'Illustration'}
        ref={illustrationRef}
        category="Illustration"
        text={staticData.illustration.text}
        stickyCat={3}
      />
      <ContentBlockAlt ref={aboutRef} />
    </>
  );
}
