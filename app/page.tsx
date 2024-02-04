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
      <HomePage />
    </main>
  );
}
