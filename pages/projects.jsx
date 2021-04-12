import PageTitle from '../components/PageTitle'
import { motion } from 'framer-motion'
import ProjectTitle from '../components/ProjectTitle'
import Image from 'next/image'
import InfoContainer from '../components/InfoContainer'
import ProjectsContainer from '../components/ProjectsContainer'

const Work = () => {
  return (
    <motion.div
      key={Math.random() * 1000}
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
      <PageTitle>Projects</PageTitle>
      <ProjectsContainer>
        <motion.article
          key={Math.random() * 1000}
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
          <ProjectTitle>BØRRES BURGERSHOP</ProjectTitle>
          <p className="desc">
            An automated ordering system for a fictive burgershop. Create a user before making an
            order.
          </p>
          <img className="project-image" src="/img/BB2.PNG" />
          <InfoContainer>
            <ul>
              <li>React</li>
              <li>Firebase/Firestore</li>
              <li>NextJs</li>
              <li>Styled Components</li>
            </ul>
            <div className="link-container">
              <a href="https://github.com/gabjcav/Borres-burgere">
                <Image className="github" width="40px" height="40px" src="/img/github2.png" />
              </a>
              <a className="live" href="https://borres-burgershop.netlify.app/">
                Live version
              </a>
            </div>
          </InfoContainer>
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
          <ProjectTitle>COLOR GAME</ProjectTitle>
          <p className="desc">Guess the correct RGB-color. Switch between easy and hard mode.</p>
          <img className="project-image" src="/img/CG.PNG" />
          <InfoContainer>
            <ul>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML5</li>
            </ul>
            <div className="link-container">
              <a href="https://github.com/gabjcav/Color-game">
                <Image className="github" width="40px" height="40px" src="/img/github2.png" />
              </a>
              <a className="live" href="https://gabjcav.github.io/Color-game/">
                Live version
              </a>
            </div>
          </InfoContainer>
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
          <ProjectTitle>TO-DO LIST</ProjectTitle>
          <p className="desc">A simple to-do list application. </p>
          <img
            className="project-image"
            src="/img/TL.PNG"
            alt="Screenshot from To-do list project."
          />
          <InfoContainer>
            <ul>
              <li>React</li>
              <li>SASS</li>
            </ul>
            <div className="link-container">
              <a href="https://github.com/gabjcav/To-do-list">
                <Image className="github" width="40px" height="40px" src="/img/github2.png" />
              </a>
              <a className="live" href="https://to-do-list-g.netlify.app/">
                Live version
              </a>
            </div>
          </InfoContainer>
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
          <ProjectTitle>INTERACTIVE MAP</ProjectTitle>
          <p className="desc">
            An interactive map over my favorite places to visit. Made using the MapBox API.
          </p>
          <img className="project-image" src="/img/MB2.PNG" alt="Screenshot from Mapbox project." />
          <InfoContainer>
            <ul>
              <li>React</li>
              <li>MapBox GL</li>
              <li>CosmicJS</li>
              <li>Styled Components</li>
            </ul>
            <div className="link-container">
              <a href="https://github.com/gabjcav/Map">
                <Image className="github" width="40px" height="40px" src="/img/github2.png" />
              </a>
              <a className="live" href="/projects">
                Coming soon
              </a>
            </div>
          </InfoContainer>
        </motion.article>
      </ProjectsContainer>
    </motion.div>
  )
}

export default Work
