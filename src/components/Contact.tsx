import Link from "next/link";

const links = [
  { href: "https://www.instagram.com/romerodai/", name: "Instagram" },
  { href: "https://www.instagram.com/romerodai/", name: "Linkedin" },
  { href: "https://www.instagram.com/romerodai/", name: "Curricullum Vitae" },
];
const ContactLink = ({ href, name }: { href: string; name: string }) => {
  return (
    <Link href={href} passHref>
      <a
        target="_blank"
        className="underline underline-offset-2 block hover:text-white ease-out duration-200 "
      >
        {name}
      </a>
    </Link>
  );
};

const Contact = () => {
  return (
    <section
      className="p-32 text-xl font-medium"
      style={{ height: "88vh" }}
      id="Contacto"
    >
      <h1 className="text-4xl font-semibold">Quieres trabajar conmigo?</h1>
      <p className="py-16  ">
        Para mas informacion puedes mandarme un mail a{" "}
        <a
          className="bg-secondary text-primary p-1 px-2 hover:bg-primary hover:text-white hover:border-2 border-white ease-out duration-200"
          href="mailto: daianaromero.a@outlook.com"
        >
          daianaromero.a@outlook.com
        </a>
      </p>
      <div className="flex justify-between gap-40">
        <div className="flex-initial">
          <span className="font-black">Ubicacion:</span>
          <br />
          La Plata, Argentina
        </div>
        <div className="flex-initial overflow-hidden">
          {links.map((link, i) => (
            <ContactLink href={link.href} name={link.name} key={i} />
          ))}
        </div>
        <div className="flex-1 ">
          <span className="font-black">Considera:</span>
          <br />
          Por favor
        </div>
      </div>
      <div className="flex my-20">
        @2022 Daiana Romero, Pagina web creada por{" "}
        <ContactLink
          href="https://www.linkedin.com/in/fabrizio-torrico-3b100b214/"
          name="Fabrizio Torrico"
        />
      </div>
    </section>
  );
};
export default Contact;
