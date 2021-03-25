import PageTitle from '../components/PageTitle'
import { motion } from 'framer-motion'
export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delay: 0.1,
          },
        },
        hidden: {
          opacity: 0,
          scale: 0.8,
        },
      }}
    >
      <PageTitle>
        <span>-</span> Gabriel{' '}
        <span id="lastname">
          <span>C</span>avallaro
        </span>{' '}
        <span>-</span>
      </PageTitle>
      <h2>Front-end developer</h2>
    </motion.div>
  )
}
