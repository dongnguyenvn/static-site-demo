import { PrismaClient } from ".prisma/client"
import Link from 'next/link'
import {motion} from 'framer-motion'


const Song = ({song}) => {
    const variants = {
        hidden : {
            opacity : 0,
            y: 20
        },
        show: {
            opacity : 1,
            y: 0
        },
        exit: {
            opacity : 0,
            y: 20
        }
    }
    return (
        <motion.div variants={variants} initial="hidden" animate="show" exit="exit" transition={{duration:0.4,type:"spring"}}>
            <div className="mb-4 space-y-1">
                <h1 className="text-3xl font-bold">{song.name}</h1>
                <p className="text-gray-600">{song.artist?.name}</p>
            </div>
            <div className="aspect-w-16 aspect-h-9">
                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${song.youtubeId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            {/* <Link href ="/" passHref>
                <button type="button" className="flex space-x-1 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    <span className="font-semibold">Back</span>
                </button>
            </Link> */}
            <Link href="/">
                <a className="mt-6 relative z-30 inline-flex items-center justify-center w-auto px-4 py-2 overflow-hidden font-bold text-white transition-all duration-300 bg-gray-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-gray-300 ring-offset-indigo-200 hover:ring-offset-gray-500 ease focus:outline-none">
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                        <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
                        Back
                    </span>
                </a>
            </Link>
        </motion.div>
    )
}

export const getStaticProps =async ({params}) => {
    const prisma = new PrismaClient()
    const song = await prisma.song.findUnique(
        {
            where : {id : Number(params.id)},
            include : {artist: true}
        }
    )
    return {
        props : {
            song
        }
    }
}

export const getStaticPaths =async () => {
    const prisma = new PrismaClient()
    const songs = await prisma.song.findMany()
    return {
        paths : songs.map(s => ({
            params: {
                id : s.id.toString()
            }
        }))
        ,
        fallback : false
    }
}

export default Song
