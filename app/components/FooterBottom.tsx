import Image from 'next/image';

export default function FooterBottom() {
  return (
    <footer className="">
      <div className="flex w-full justify-center items-center bg-thirdBlue text-white p-2">
        <Image
          className="me-2"
          width={20}
          height={20}
          alt="heart and square logo"
          src="../../images/hands_outline.svg"
        />
        <p className="font-roboto-slab-100 text-xs">© Philipp Soeparno</p>
      </div>
      <div className="flex w-full justify-between bg-firstBlue h-1">
        <div className="w-full flex justify-center mt-1 pt-1 border-dashed border-t-2 border-thirdBlue"></div>
      </div>
    </footer>
  );
}
