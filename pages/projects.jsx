import PageTitle from '../components/PageTitle'
import { motion } from 'framer-motion'
import ProjectTitle from '../components/ProjectTitle'
import Image from 'next/image'
import InfoContainer from '../components/InfoContainer'
import ProjectsContainer from '../components/ProjectsContainer'
import queryFirebase from '../config/firebase'
import { useEffect, useState } from 'react'
import Skeleton from '../components/SkeletonContainer'

const Work = () => {
  const [projects, setProjects] = useState([])
  const [fbError, setFbError] = useState(null)

  useEffect(() => {
    queryFirebase('projects')
      .then((result) => setProjects(result.docs))
      .catch((error) => setFbError(error))
  }, [])

  const renderSkeleton = () => {
    return <Skeleton />
  }

  const renderProjects = () => {
    return (
      <>
        {projects &&
          projects?.map((project) => {
            const p = project.data()
            const usedSkills = p.UsedSkills
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
                className="project"
              >
                <ProjectTitle>{p.Title}</ProjectTitle>
                <p className="desc">{p.Description}</p>
                <img className="project-image" src={p.Image} />
                <InfoContainer>
                  <ul>
                    {usedSkills.map((skill) => {
                      return <li>{skill}</li>
                    })}
                  </ul>
                  <div className="link-container">
                    <a href={p.GitHubLink}>
                      <Image className="github" width="40px" height="40px" src="/img/github2.png" />
                    </a>
                    <a className="live" href={p.LiveLink}>
                      {p.ButtonText}
                    </a>
                  </div>
                </InfoContainer>
              </motion.article>
            )
          })}
      </>
    )
  }

  return (
    <div>
      <PageTitle>Projects</PageTitle>
      <ProjectsContainer>
        {projects.length === 0 ? renderSkeleton() : renderProjects()}
      </ProjectsContainer>
    </div>
  )
}

export default Work
