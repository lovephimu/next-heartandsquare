'use client';

import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

export default function Hero() {
  return (
    <section className="h-[100dvh]">
      <Parallax className="h-4/5" speed={-20}>
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
              <h3>Philipp Soeparno</h3>
            </div>
          </div>
          {/* <!-- content --> */}
          <div className="flex w-full">
            <div className="w-1/2 text-right">
              <h5>
                <a href="#Programming">Programming</a>
              </h5>
              <h5>
                <a href="#Architecture">Architecture</a>
              </h5>
              <h5>
                <a href="#Illustration">Illustration</a>
              </h5>
            </div>
            <div className="w-1/2 text-left"></div>
          </div>
        </div>
      </Parallax>
      {/* <!-- teaser top --> */}
      <div className="bg-secondBlue mx-auto px-2 min-h-[20%] flex flex-col items-center justify-center text-firstBlue">
        {/* <h1 className="m-10">Test</h1> */}
      </div>
    </section>
  );
}
