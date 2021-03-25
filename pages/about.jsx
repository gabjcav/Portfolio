import PageTitle from '../components/PageTitle'
const About = () => {
  return (
    <>
      <PageTitle>
        <span>-</span> About <span>-</span>
      </PageTitle>
      <div className="container about">
        <div>
          <p>
            Hi! My name is Gabriel Cavallaro. Im a 24 year old Norwegian-Italian guy living in Oslo,
            Norway.
          </p>
          <p>Languages and other skills:</p>
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
          <p>Im always interested in learning new technology! Feel free to contact me.</p>
        </div>
      </div>
    </>
  )
}

export default About
