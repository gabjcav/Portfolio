import styled from 'styled-components'
import { motion } from 'framer-motion'

const MainContainer = styled(motion.main)`
  width: 100%;
  height: 100%;
  margin-top: 5%;

  a {
    color: var(--light-green);
  }

  //   MEDIA QUERIES   //

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    #work {
      margin: 32px auto;
    }
  }
`

export default MainContainer
