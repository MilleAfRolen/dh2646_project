import Image from "next/image";

export default function AnimeDetailsView({
  image,
  title,
  type,
  source,
  episodes,
  status,
  description,
}) {
  function renderAll() {
    return (
      <div>
        <div>
            <div>
                <p className="text-4xl font-bold pt-4">{title}</p>    
            </div>
            <div className="border-solid border-black rounded-2xl border-2 py-5 px-5 my-4">
                    <p> <strong>Type:</strong> {type}</p>
                    <p> <strong>Source:</strong> {source}</p>
                    <p> <strong>Episodes:</strong> {episodes}</p>
                    <p> <strong>Status:</strong> {status}</p>
                    <p> <strong>Genres:</strong> </p>
                </div>
            <div className="my-5 border-solid border-black rounded-2xl border-2 py-5 px-5">
                <p>{description}</p>
            </div>
        </div>
            
    )}

    function renderAnimeImage() {
        return (
            <div>
                <Image className="h-full w-full object-cover rounded-3xl border border-black my-5"
                  src={image}
                  height={0}
                  width={0}
                  sizes="100vw"
                  priority={true}
                  alt={title}
                />
            </div>
        );
    }

    //aired. premiered, producors, studio, genre, theme, duration

  return (
    <div className="py-2 px-20 z-10 bg-[#e5e5e5] flex flex-row">
      <div>{renderAnimeImage()}</div>
      <div className="w-full my-5 mx-5">{renderAll()}</div>
    </div>
  );
}
