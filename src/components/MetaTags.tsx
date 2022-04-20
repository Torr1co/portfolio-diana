import Head from "next/head";
const MetaTags = () => {
  return (
    <Head>
      <title>Daiana Arquitecta</title>
      <meta
        name="description"
        content="Este es un portfolio para mostrar proyectos y profesionalismo de la arquitecta Daiana Romero"
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="article" />

      <meta property="og:title" content="Daiana Arquitecta" />

      <meta
        property="og:description"
        content="Este es un portfolio para mostrar proyectos y profesionalismo de la arquitecta Daiana Romero"
      />

      {/* <meta property="og:image" content="LINK TO THE IMAGE FILE" /> */}

      <meta property="og:url" content="" />

      <meta property="og:site_name" content="Daiana Arquitecta" />
      {/* <meta name="viewport" content="width=device-width,initial-scale=1.0" /> */}
    </Head>
  );
};
export default MetaTags;
