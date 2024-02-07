import React from 'react'
import { Container } from '../../components'
import Skills from '../../components/Skills/Skills';
import Youtube from '../../components/Youtube/Youtube';
import AboutHead from '../../components/AboutHead/AboutHead';
const About = () => {

  return (
    <Container>
      <div className='mb-10 space-y-10'>
        <AboutHead />
        <Skills />
        <Youtube />
      </div>
    </Container>
  )
}

export default About
