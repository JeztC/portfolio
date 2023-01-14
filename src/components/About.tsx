import React from "react";
// @ts-ignore
import AvatarImg from '../assets/pictures/avatar.jpg'
import {Badge} from "@mui/material";
import VerificationIcon from "./VerificationIcon";
import styled from "@emotion/styled";
import {skillsList} from "../data";
import {useTranslation} from "react-i18next";


const SkillBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1D9BF0;
  color: white;
  min-width: 50px; // add a minimum width of 100px
  width: auto; // allow the box to grow in width when needed
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding-right: 10px;
  padding-left: 10px;
`;

const SkillsColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 650px;
`;

const SkillsContainer = styled.div`
  max-width: 950px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
`;

const About: React.FC = () => {
    const { t } = useTranslation()
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
            margin: '16px'
        }}>
            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                    <VerificationIcon />
                }
            >
                <img src={AvatarImg} alt="Description" style={{
                    width: '300px',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '1px solid #1D9BF0',
                }} />
            </Badge>
            <div style={{marginLeft: '72px'}}>
                <h1 style={{margin: '0'}}>{t('menu_about')}</h1>
                <p style={{margin: '0'}}>{t('about_desc')}</p>
                <SkillsContainer>
                    <SkillsColumn>
                        {skillsList.map(skill => <SkillBox key={skill.title}>{skill.title}</SkillBox>)}
                    </SkillsColumn>
                </SkillsContainer>
            </div>
        </div>
    );
}
export default About;
