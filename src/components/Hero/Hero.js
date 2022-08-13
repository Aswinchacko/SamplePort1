import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
let temp=1;
const Hero = () => (
  

  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Developing Full Stak websites using ReactJS which deals with attention.
      </SectionText>
      <Button onClick={() => window.location = 'http://google.com'}>Learn More</Button>
    </LeftSection>
   
      
    
    
  </Section>
);

export default Hero;