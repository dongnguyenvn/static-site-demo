import Image from "next/image"
import Link from 'next/link'


const SongItem = ({id,albumUrl,name,artist}) => {
    return (
        <Link href="/songs/[id]" as={`/songs/${id}`} passHref>
            <div className="flex bg-white border rounded-lg p-2 group cursor-pointer">
              <span className="rounded-md overflow-hidden w-16 h-16">
                <Image src={albumUrl} alt="" width={164} height={164} />
              </span>
              <div className="ml-4 flex flex-col justify-center">
                <h1 className="font-bold">{name}</h1>
                <p className="text-gray-500 font-xs">{artist?.name}</p>
              </div>
              <button type="button" className="ml-auto mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-150 transition-all duration-200 easy-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
        </Link>
    )
}

export default SongItem