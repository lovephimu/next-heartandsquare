import '../globals.css';
import Image from 'next/image';

export default function NavigationTop() {
  return (
    <nav>
      <div className="w-full flex justify-end text-right py-2 px-4 border-b-2 border-b-white border-dotted text-textBlue absolute text-white">
        <Image
          className="me-1"
          width={18}
          height={18}
          alt="heart and square logo"
          src="/images/attention.svg"
        />
        <span>Work in Progress</span>
      </div>
    </nav>
  );
}
