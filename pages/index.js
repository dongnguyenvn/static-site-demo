import {PrismaClient} from '@prisma/client'
import SongItem from '../components/SongItem.jsx'
import {motion} from 'framer-motion'

export default function Home({songs}) {
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
      <div>
        <h1 className="text-2xl font-bold mb-8">My Songs</h1>
      </div>
      <div className="space-y-2">
        {songs.map(s => (
          <SongItem key={s.id} {...s}/>
        ))}
      </div>
    </motion.div>
  )
}

export const getStaticProps = async () => {
    const prisma = new PrismaClient()
    const songs = await prisma.song.findMany({
      include : {artist : true}
    })
    return {
      props : {
        songs
      }
    }
}
