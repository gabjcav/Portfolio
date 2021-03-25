import PageTitle from '../components/PageTitle'
import ProjectTitle from '../components/ProjectTitle'
const Work = () => {
  return (
    <>
      <PageTitle>
        <span>-</span> Projects <span>-</span>
      </PageTitle>
      <div className="container projects">
        <article className="project">
          <ProjectTitle className="title">BØRRES BURGERSHOP</ProjectTitle>
          <div className="info-container">
            <ul>
              <li>React</li>
              <li>NextJs</li>
              <li>Firebase/Firestore</li>
              <li>Styled Components</li>
            </ul>
            <a href="https://github.com/gabjcav/tema-6">Github</a>
          </div>
        </article>
        <article className="project">
          <ProjectTitle className="title">COLOR GAME</ProjectTitle>
          <div className="info-container">
            <ul>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML5</li>
            </ul>
            <a href="https://www.facebook.com/">Github</a>
          </div>
        </article>
        <article className="project">
          <ProjectTitle className="title">TODO-LIST</ProjectTitle>
          <div className="info-container">
            <ul>
              <li>React</li>
              <li>SASS/SCSS</li>
            </ul>
            <a href="https://github.com/gabjcav/tema-6">Github</a>
          </div>
        </article>
        <article className="project">
          <ProjectTitle className="title">INTERACTIVE MAP</ProjectTitle>
          <div className="info-container">
            <ul>
              <li>React</li>
              <li>MapBox GL</li>
              <li>CosmicJS</li>
              <li>Styled Components</li>
            </ul>
            <a href="https://github.com/gabjcav/tema-6">Github</a>
          </div>
        </article>
      </div>
    </>
  )
}

export default Work
