import PageTitle from '../components/PageTitle'
import { motion } from 'framer-motion'
import { uuid } from 'uuidv4'
import AboutContainer from '../components/AboutContainer'
import SkillContainer from '../components/SkillContainer'
import SubTitle from '../components/SubTitle'
export default function Home() {
  return (
    <motion.div
      key={uuid}
      className="parent"
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
      <SubTitle>
        Front<span>-</span>end developer
      </SubTitle>

      {/* ABOUT SECTION */}

      <AboutContainer>
        <div id="intro-container">
          <p>
            Hi! Im Gabriel Cavallaro, a 24 year old Norwegian-Italian guy living in Oslo, Norway.
          </p>
          <p>I am currently studying Frontend-Development at Fagskolen Kristiania.</p>
          <p>
            In my free time I enjoy walks in nature, gaming, good food and last but not least,
            coding!
          </p>
          <p> I speak Norwegian, Italian and English fluently. I also speak a fair bit Spanish.</p>
          <SkillContainer>
            <p className="skill-title">Web-Languages and other skills;</p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SASS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>NextJs</li>
              <li>CosmicJs</li>
              <li>Google Firebase</li>
              <li>Plotly</li>
              <li>Framer Motion</li>

              <li>Styled Components</li>
            </ul>
          </SkillContainer>
          <SkillContainer>
            <p className="skill-title">Other software skills;</p>
            <ul>
              <li>Cinema 4D</li>
              <li>ZBrush</li>
              <li>Maya</li>
              <li>Blender</li>
              <li>Adobe Photoshop</li>
              <li>Adobe After Effects</li>
              <li>Marmoset Toolbag</li>
              <li>Substance Painter</li>
            </ul>
          </SkillContainer>
          <p id="work">
            Im open for work! Feel free to{' '}
            <a className="contact" href="mailto: gabrieljencav@live.no">
              contact
            </a>{' '}
            me if you're interested. You can also find me on{' '}
            <a
              className="contact"
              href="https://www.linkedin.com/in/gabriel-jensen-cavallaro-690102116/"
            >
              linkedIn
            </a>
            .
          </p>
        </div>
      </AboutContainer>
    </motion.div>
  )
}
