import Head from "next/head";
import Image from "next/image";
import LAside from "../components/global/LAside";
import Layout from "../components/global/Layout";

import MainColumn from "../components/global/MainColumn";
import RAsiade from "../components/global/RAsiade";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar";
import ProjectList from "../components/projects/ProjectList";


export default function Home() {
  return (
    <div className="w-[100vw] h-full min-h-screen bg-black scroll-smooth">
      <Head>
        <title>Trevor Danahy</title>
        <meta name="Trevor's Dev Portfolio" content="Dev Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Navbar/>
        <LAside />
        <MainColumn>
          <Hero />
          <ProjectList />
        </MainColumn>
        <RAsiade />
      </Layout>
    </div>
  );
}
