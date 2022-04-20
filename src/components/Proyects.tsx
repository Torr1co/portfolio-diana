import Section from "./Section";
import Image from "next/image";

const Proyects = () => {
  return (
    <Section sectionName="Proyectos" title="Some of my newest proyects">
      <p>
        Das Beechhouse ist ein Design- und Tattoostudio im Herzen von Bochum.
        Hier können sich liebe Menschen einzigartige Motive tätowieren lassen,
        Kunstdrucke erstehen oder schicke T-Shirts anprobieren. Es ist ein Raum
        für Illustrationen, Malerei, Fotografie, Kunstworkshops und weitere
        kreative Dinge - lass dich überraschen!
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
        Culpa commodo quis ??.,
      </h3>
      <p>
        Anim in deserunt minim laborum commodo ad adipisicing Lorem incididunt
        deserunt irure. Veniam ipsum duis culpa eu mollit do mollit elit
        adipisicing commodo non dolore ullamco. Dolor mollit laboris ut irure
        labore non est non do aliquip duis tempor. Tempor esse sunt deserunt
      </p>
    </Section>
  );
};

export default Proyects;
