import loading from "/public/icons/loadingSun.svg";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center bg-gradient-radial from-blue-300 to-blue-400 pt-18 h-screen">
      <Image
        src={loading}
        alt="Loading"
        width={0}
        height={0}
        sizes="100vw"
        priority={true}
        className="w-1/4 h-1/4 absolute"
      />
    </div>
  );
}
