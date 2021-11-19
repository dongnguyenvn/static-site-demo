import Container from '../components/Container.jsx'
import '../styles/globals.css'
import {AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps,router }) {
  return (
    <Container >
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
    </Container>
  )
}

export default MyApp
