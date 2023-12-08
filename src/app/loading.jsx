import loading from "/public/backgrounds/loading.svg";
import Image from "next/image";

export default function Loading() {
  return (
    <Image
      src={loading}
      alt="Loading"
      width={0}
      height={0}
      sizes="100vw"
      priority={true}
      className="w-full h-full absolute -z-50"
    />
  );
}
