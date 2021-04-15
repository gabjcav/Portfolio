import styled from 'styled-components'
import { motion } from 'framer-motion'

const Skeleton = () => {
  return (
    <>
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
        Loading...
      </motion.article>
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
        Loading...
      </motion.article>
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
        Loading...
      </motion.article>
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
        Loading...
      </motion.article>
    </>
  )
}

export default Skeleton
