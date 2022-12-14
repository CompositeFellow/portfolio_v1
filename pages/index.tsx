import Head from "next/head";
import Layout from "../components/global/Layout";
import LinkAside from "../components/global/LinkAside";
import MainColumn from "../components/global/MainColumn";
import SectionMainColumn from "../components/global/SectionMainColumn";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar";


export default function Home() {
  return (
    <div className="w-[100vw] h-full min-h-screen bg-black">
      <Head>
        <title>Trevor Danahy</title>
        <meta name="Trevor's Dev Portfolio" content="Dev Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Navbar/>
        <LinkAside rightside={true}/>
        <MainColumn>
          <Hero height={20}/>

        </MainColumn>
        <LinkAside rightside={false}/>
      </Layout>
    </div>
  );
}
