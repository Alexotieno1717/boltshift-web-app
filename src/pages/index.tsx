import Head from 'next/head';
import Header from '../components/navigation/Header';
import BannerSection from '../components/BannerSection';

export default function Home() {
  return (
    <main className=" min-h-screen flex-col items-center justify-between ">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <title>Boltshift | Home page</title>
      </Head>
      <Header />
      <BannerSection />
    </main>
  );
}