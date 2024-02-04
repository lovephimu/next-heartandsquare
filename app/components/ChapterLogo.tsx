import Image from 'next/image';

type Props = {
  category: number;
};

export default function ChapterLogo(props: Props) {
  return (
    <>
      {props.category === 1 ? (
        <div className="w-64 bg-firstBlue m-4">
          <Image
            src="/images/curiousity.png"
            alt="City of Ideas"
            width={300}
            height={300}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      ) : (
        <></>
      )}
      {props.category === 2 ? (
        <div className="w-64 bg-firstBlue m-4">
          <Image
            src="/images/cityofideas.png"
            alt="City of Ideas"
            width={300}
            height={300}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      ) : (
        <></>
      )}
      {props.category === 3 ? (
        <div className="w-64 bg-firstBlue m-4">
          <Image
            src="/images/hands.png"
            alt="City of Ideas"
            width={300}
            height={300}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
