import Image from 'next/image';
import ContentBlock from './components/ContentBlock';
import ContentContainer from './components/ContentContainer';
import Hero from './components/Hero';
import HomePage from './HomePage';

export default function Home() {
  /*
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
  */
  return (
    <main className="">
      {/* <!-- hero --> */}
      {/* <Hero />
      <ContentContainer
        title={'Building Interactive Tools'}
        subTitle={'Programming'}
      />
      <ContentContainer
        title={'Translating Ideas Into Reality'}
        subTitle={'Architecture'}
      />
      <ContentContainer
        title={'The Love Towards Geometry'}
        subTitle={'Illustration'}
      /> */}
      <HomePage />
    </main>
  );
}
