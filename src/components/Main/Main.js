import React from 'react';
import { Medium } from 'components/Medium';
import { Github } from 'components/Github';
import { Instagram } from 'components/Instagram';
import { Bio } from 'components/Bio';
import avatar from 'assets/avatar.jpg';
import {
  TitleStyled,
  SectionsStyled,
  SectionTitle,
  AvatarStyled,
} from './MainStyled';

export const Main = () => (
  <SectionsStyled>
    <AvatarStyled src={avatar} alt="Peter Kuria | Avatar | Photo" />
    <TitleStyled>Peter Kuria</TitleStyled>
    <Bio />
    <SectionTitle>Writing</SectionTitle>
    <Medium />
    <SectionTitle>Code</SectionTitle>
    <Github />
    <SectionTitle>Photography</SectionTitle>
    <Instagram />
  </SectionsStyled>
);

export default Main;
