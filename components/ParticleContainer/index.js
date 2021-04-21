import Particles from 'react-particles-js'
import ParticlesConfig from '../../config/particlesCfg'
import Styled from 'styled-components'

const ParticleContainer = () => {
  return (
    <ParticleStyle>
      <Particles
        options={{ fullScreen: { enable: true, zIndex: -99999 } }}
        params={ParticlesConfig}
        height="80vh"
        width="99vw"
      />
      <h1>Welcome</h1>
    </ParticleStyle>
  )
}

const ParticleStyle = Styled.section`
  display: flex; 
  h1 {
    z-index: 1000;
    font-size: 4rem; 
    position: relative; 
    text-align: center; 
    right: 30; 
    
  }
`

export default ParticleContainer
