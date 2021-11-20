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
                <p>{song.artist?.name}</p>
            </div>
            <div className="aspect-w-16 aspect-h-9">
                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${song.youtubeId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <Link href ="/" passHref>
                <button type="button" className="flex space-x-1 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    <span className="font-semibold">Back</span>
                </button>
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
