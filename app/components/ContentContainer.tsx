import React from 'react';
import ChapterLogo from './ChapterLogo';

type Props = {
  title: string;
  subTitle: string;
  category: string;
  text: string[];
  stickyCat: number;
};

const ContentBlock = React.forwardRef<HTMLDivElement, Props>(
  ({ title, subTitle, category, text, stickyCat }, ref) => {
    return (
      <section
        ref={ref}
        className="min-h-screen bg-secondBlue text-white p-4 sm:p-8  flex flex-col items-center"
      >
        <div className="w-full flex flex-col items-center mb-5 sticky-block">
          <h6>{category}</h6>
          <ChapterLogo category={stickyCat} />
          <h2>{title}</h2>
          <p>{subTitle}</p>
          <div className="mt-8">
            {text.map((textItem, index) => {
              return (
                <div key={`p-${index}`} className=" mb-4 max-w-[750px]">
                  {textItem}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  },
);

// Explicitly setting a displayName for the component
ContentBlock.displayName = 'ContentBlock';

export default ContentBlock;
