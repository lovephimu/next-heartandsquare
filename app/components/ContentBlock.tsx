import React from 'react';
import ChapterLogo from './ChapterLogo';

type Props = {
  title: string;
  subTitle: string;
};

const ContentBlock = React.forwardRef<HTMLDivElement, Props>(
  ({ title, subTitle }, ref) => {
    return (
      <section
        ref={ref}
        className="h-screen bg-secondBlue text-white p-4 sm:p-8"
      >
        <div className="w-full flex flex-col items-center mb-5">
          <ChapterLogo />
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
        <div className="mb-10"></div>
      </section>
    );
  },
);

// Explicitly setting a displayName for the component
ContentBlock.displayName = 'ContentBlock';

export default ContentBlock;
