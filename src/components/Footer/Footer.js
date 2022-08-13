import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Section } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:9645937029'>964-593-702-9</LinkItem>
        </LinkColumn><LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto:asw.nchacko@gmail.com'>asw.nchacko@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating One Project at a Time</Slogan>
         
          
        </CompanyContainer>
        
        <SocialContainer>

        <SocialIcons href='https://github.com'>
        <AiFillGithub size='3rem' />

      </SocialIcons><SocialIcons href='https://linkedin.com'>
        <AiFillLinkedin size='3rem' />

      </SocialIcons><SocialIcons href='https://instagram.com'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
        </SocialContainer>
        
      </SocialIconsContainer>
      <br />
        <p>All right are copyrighted to @aswinchacko</p>
    </FooterWrapper>
  );
};

export default Footer;
