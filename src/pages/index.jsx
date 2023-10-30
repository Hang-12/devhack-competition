import Head from 'next/head';

const Home = ({ children }) => {
  return (
    <>
      <Head>
        <title>Infinitium | HealthCare</title>
        <meta name="description" content="HealthCare App"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className="bg-background-color min-h-screen">{children}</main>
    </>
  );
};

export default Home;