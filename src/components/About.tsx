import Section from "./Section";
import Image from "next/image";
import React from "react";
const About = () => {
  return (
    <Section
      sectionName="Sobre mi"
      title="Aliquip ad magna est enim fugiat exercitation. Aliqua occaecat amet ex elit.."
    >
      <p>
        Nulla commodo in consequat culpa adipisicing sit laborum. Eu do
        adipisicing dolore mollit dolor ullamco do ad ut nulla est. Consectetur
        ad pariatur mollit est duis commodo eu excepteur anim nostrud laborum.
        Est proident quis eu aliquip consequat consectetur deserunt et. Fugiat
        aute non ea consequat commodo et ipsum fugiat.
      </p>
      <div className="relative h-52 w-100">
        <Image
          src="/img/mountain.png"
          alt="about me"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="text-primaryDarker text-3xl py-10">
        Eu commodo do laboris??
      </h3>
      <p>
        Minim laborum ipsum id cillum consectetur occaecat sunt nulla proident
        pariatur. Irure voluptate voluptate adipisicing excepteur id nulla aute
        cupidatat.
      </p>
    </Section>
  );
};
export default About;
