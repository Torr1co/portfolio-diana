import type { NextPage } from "next";

type sectionTypes = {
  sectionName: string;
  title: string;
  children: React.ReactNode;
};

const Section = ({ sectionName, title, children }: sectionTypes) => {
  return (
    <section className=" bg-white z-10 py-20 px-36 flex " id={sectionName}>
      <div className="text-primaryDarker flex-initial w-1/3">
        <div className="sticky top-36 ">
          <hr className="py-4" />
          <h2 className="text-3xl ">{sectionName}</h2>
        </div>
      </div>
      <div className="flex-initial w-2/3 ml-10">
        <h3 className="text-4xl font-semibold mb-20">{title}</h3>
        <div className="text-lg">{children}</div>
      </div>
    </section>
  );
};
export default Section;
