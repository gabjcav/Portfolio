import PageTitle from '../components/PageTitle'
import { motion } from 'framer-motion'
import ProjectTitle from '../components/ProjectTitle'
import Image from 'next/image'

const Work = () => {
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
        <span>-</span> Projects <span>-</span>
      </PageTitle>
      <div className="container projects">
        <motion.article
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.2,
              },
            },
            hidden: {
              opacity: 0,
              scale: 0.8,
            },
          }}
          className="project"
        >
          <ProjectTitle className="title">BØRRES BURGERSHOP</ProjectTitle>
          <div className="info-container">
            <ul>
              <li>React</li>
              <li>NextJs</li>
              <li>Firebase/Firestore</li>
              <li>Styled Components</li>
            </ul>
            <div className="link-container">
              <a href="https://github.com/gabjcav/tema-6">
                <Image width="40px" height="40px" src="/img/github2.png" />
              </a>
            </div>
          </div>
        </motion.article>
        <motion.article
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.25,
              },
            },
            hidden: {
              opacity: 0,
              scale: 0.8,
            },
          }}
          className="project"
        >
          <ProjectTitle className="title">COLOR GAME</ProjectTitle>
          <div className="info-container">
            <ul>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML5</li>
            </ul>
            <div className="link-container">
              <a href="https://github.com/gabjcav/tema-6">
                <Image width="40px" height="40px" src="/img/github2.png" />
              </a>
            </div>
          </div>
        </motion.article>
        <motion.article
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.3,
              },
            },
            hidden: {
              opacity: 0,
              scale: 0.8,
            },
          }}
          className="project"
        >
          <ProjectTitle className="title">TO-DO LIST</ProjectTitle>
          <div className="info-container">
            <ul>
              <li>React</li>
              <li>SASS/SCSS</li>
            </ul>
            <div className="link-container">
              <a href="https://github.com/gabjcav/tema-6">
                <Image width="40px" height="40px" src="/img/github2.png" />
              </a>
            </div>
          </div>
        </motion.article>
        <motion.article
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.35,
              },
            },
            hidden: {
              opacity: 0,
              scale: 0.8,
            },
          }}
          className="project"
        >
          <ProjectTitle className="title">INTERACTIVE MAP</ProjectTitle>
          <div className="info-container">
            <ul>
              <li>React</li>
              <li>MapBox GL</li>
              <li>CosmicJS</li>
              <li>Styled Components</li>
            </ul>
            <div className="link-container">
              <a href="https://github.com/gabjcav/tema-6">
                <Image width="40px" height="40px" src="/img/github2.png" />
              </a>
            </div>
          </div>
        </motion.article>
      </div>
    </motion.div>
  )
}

export default Work
