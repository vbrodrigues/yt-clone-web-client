import Link from "next/link";
import { getVideos } from "./utils/firebase/functions";
import Image from "next/image";

export default async function Home() {

  const videos = await getVideos();

  return (
    <main className="min-h-screen p-24 flex flex-wrap gap-12">

      {videos.map(video => (
        <Link key={video.id} className='cursor-pointer w-48 h-24' href={`/watch?v=${video.filename}`}>
            <Image src='/thumbnail.png' alt='video' width={192} height={96} />
            <h3 className='text-lg mt-2'>{video.title || 'Vídeo sem título'}</h3>
        </Link>
      ))}

    </main>
  );
}
