import { motion } from 'framer-motion'
import Loader from 'react-loader-spinner'
const Skeleton = () => {
  return (
    <motion.article
      key={Math.random() * 1000}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delay: 0,
          },
        },
        hidden: {
          opacity: 0,
          scale: 0.8,
        },
      }}
    >
      <Loader type="Pulse" color="#86c232" height={100} width={100} timeout={3000} />
    </motion.article>
  )
}

export default Skeleton
