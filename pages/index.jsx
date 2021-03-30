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
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            opacity: 1,
            scale: 1,
          },
          hidden: {
            opacity: 0,
            scale: 0.8,
          },
        }}
      >
        Front<span>-</span>end developer
      </motion.h2>

      {/* ABOUT SECTION */}

      <motion.div
        className="container about"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            opacity: 1,
          },
          hidden: {
            opacity: 0,
          },
        }}
      >
        <div>
          <p>
            Hi! Im Gabriel Cavallaro, a 24 year old Norwegian-Italian guy living in Oslo, Norway.
          </p>
          <p>I am currently studying Frontend-Development at Fagskolen Kristiania.</p>
          <p>In my free time I enjoy walks in nature, gaming and good food!</p>
          <p> I speak Norwegian, Italian and English fluently. I also speak a fair bit Spanish.</p>
          <div className="skill-container">
            <p>Web-Languages and other skills;</p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SASS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>NextJs</li>
              <li>CosmicJs</li>
              <li>Google Firebase</li>
              <li>Styled Components</li>
              <li>Framer Motion</li>
              <li>Plotly</li>
            </ul>

            <p>Other software skills;</p>
            <ul>
              <li>Cinema 4D</li>
              <li>Adobe Photoshop</li>
              <li>Adobe After Effects</li>
              <li>ZBrush</li>
              <li>Maya</li>
              <li>Blender</li>
              <li>Marmoset Toolbag</li>
              <li>Substance Painter</li>
            </ul>
          </div>
          <p id="work">
            Im open for work! Feel free to{' '}
            <a id="contact" href="mailto: gabrieljencav@live.no">
              contact
            </a>{' '}
            me if you're interested.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
