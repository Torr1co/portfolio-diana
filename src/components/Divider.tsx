import Image from "next/image";
import { useInView } from "react-intersection-observer";
const Divider = ({
  setImage,
}: {
  setImage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { ref, inView } = useInView();
  if (inView) {
    setImage("/img/m2.png");
  } else {
    setImage("/img/mountain.png");
  }

  return (
    <>
      <div className="h-64" ref={ref}>
        <div className=" h-screen w-screen fixed -z-10 overflow-hidden bg-primary">
          <Image
            src="/img/m2.png"
            objectFit="cover"
            layout="fill"
            className=" top-5 opacity-50"
            alt="Sketch"
          />
        </div>
      </div>
    </>
  );
};
export default Divider;
