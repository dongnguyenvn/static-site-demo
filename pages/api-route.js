import SongItem from '../components/SongItem.jsx'
import {motion} from 'framer-motion'
import useSWR from 'swr'

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
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('/api/song', fetcher)
  if (!data) return <div className='text-center'>loading...</div>

  return (
    <motion.div variants={variants} initial="hidden" animate="show" exit="exit" transition={{duration:0.4,type:"spring"}}>
      <div>
        <h1 className="text-2xl font-bold mb-8">My Songs</h1>
      </div>
      <div className="space-y-2">
        {data.map(s => (
          <SongItem key={s.id} {...s}/>
        ))}
      </div>
    </motion.div>
  )
}

