import Head from "next/head";
import { Inter } from "next/font/google";
import AppBar from "../../components/Home/appBar/app";
import Carrosel from "../../components/Home/carrosel/app";
import SobreNos from "../../components/Home/sobreMin/app";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nova Work</title>
      </Head>
      <AppBar />
      <Carrosel />
      <SobreNos />
    </>
  );
}
