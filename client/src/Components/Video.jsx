import React from 'react'
import styled from 'styled-components'
import video1 from '../Assets/video1.png'
import video2 from '../Assets/video2.png'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import { useScroll } from '../Components/useScroll'
import { videoAnimation } from '../animations'

function Video() {
  const [element, controls] = useScroll()
  return (
    <Section ref={element}>
       <div className="background">
        <img src={video1} alt="Video" className='design1' />
        <img src={video2} alt="Video" className='design2' />
      </div>
      <motion.div className="video"
        variants={videoAnimation}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}>
      <iframe 
      width="960" 
      height="515" 
      src="https://www.youtube.com/embed/XdjU3AbXr80" title="Proyecto Psicoapp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      >
      </iframe>
      </motion.div>
    </Section>
  )
}

const Section = styled.section`
  background-color: #662d91aa;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  .video {
    z-index: 10;
  }
  .background {
    .design1 {
      position: absolute;
      left: 0;
      bottom: -8rem;
      width: 18rem;
    }
    .design2 {
      position: absolute;
      right: 5rem;
      top: 3rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    height: 100%;
    padding: 6rem 2rem;
    .background {
      display: none;
    }
    .video {
      iframe {
        height: 15rem;
        width: 80vw;
      }
    }
}
`

export default Video