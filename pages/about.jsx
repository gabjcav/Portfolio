import PageTitle from '../components/PageTitle'
import { motion } from 'framer-motion'
const About = () => {
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
        <span>-</span> About <span>-</span>
      </PageTitle>
      <div className="container about">
        <div>
          <p>
            Hi! My name is Gabriel Cavallaro. Im a 24 year old Norwegian-Italian guy living in Oslo,
            Norway.
          </p>
          <p>I am currently studying Frontend-Development at Fagskolen Kristiania.</p>
          <div className="skill-container">
            <p>Languages and other skills;</p>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>NextJs</li>
              <li>CosmicJs</li>
              <li>Google firebase</li>
              <li>Styled Components</li>
            </ul>
          </div>
          <p>Other software skills;</p>
          <ul>
            <li>Cinema 4D</li>
            <li>Adobe Photoshop</li>
            <li>Adobe After Effects</li>
            <li>ZBrush</li>
            <li>Maya</li>
            <li>Blender</li>
          </ul>
          <p>Im always interested in learning new technology! Feel free to contact me.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default About
