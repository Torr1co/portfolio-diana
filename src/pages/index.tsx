import type { NextPage } from "next";
import MetaTags from "../components/MetaTags";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import About from "../components/About";
import Proyects from "../components/Proyects";
import Divider from "../components/Divider";
import Contact from "../components/Contact";
import { useState } from "react";
import Image from "next/image";
const Home = () => {
  const [image, setImage] = useState("/img/mountain.png");
  return (
    <>
      <MetaTags />
      <NavBar />
      <div className=" h-screen w-screen fixed -z-10 overflow-hidden bg-primary">
        <Image
          src={image}
          objectFit="cover"
          layout="fill"
          className=" top-5 opacity-50"
          alt="Sketch"
        />
      </div>
      <Header />
      <About />
      <Divider setImage={setImage} />
      <Proyects />
      <Contact />
    </>
  );
};

export default Home;
