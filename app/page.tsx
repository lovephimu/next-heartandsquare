import Image from 'next/image';

export default function Home() {
  async function getBlogEntries() {
    const baseUrl = process.env.baseUrl;
    try {
      const response = await fetch(`${baseUrl}/api/collections/blog/entries`);

      const data = await response.json();
      if (response.ok) {
        console.log(data);
      } else {
        console.log('fetch didnt work out');
      }
    } catch (error) {
      console.log('Fetch didnt work');
    }
  }
  getBlogEntries();
  return (
    <main className="h-screen">
      {/* <!-- hero --> */}
      <div className="w-full flex flex-col h-4/5 justify-center items-center text-textBlue">
        {/* <!-- {{ svg src="/logo/hands.svg" }} --> */}
        <Image
          alt="heart and square logo"
          className="w-32 h-auto"
          height={128}
          width={128}
          src="/images/hands.svg"
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
            <h2>lovephimu</h2>
          </div>
        </div>
        {/* <!-- content --> */}
        <div className="flex w-full">
          <div className="w-1/2 text-right">
            <h5>Programming</h5>
            <h5>Architecture</h5>
            <h5>Illustration</h5>
          </div>
          <div className="w-1/2 text-left"></div>
        </div>
      </div>
      {/* <!-- main content --> */}
      <div className="bg-contrastBlue mx-auto px-2 min-h-[20%] flex flex-col items-center justify-center text-mainBlue">
        <h1>Test</h1>
      </div>
    </main>
  );
}
