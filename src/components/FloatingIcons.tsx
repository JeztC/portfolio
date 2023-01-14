import React from 'react';
import styled from '@emotion/styled';
import {GitHub, Email} from '@mui/icons-material';
import Icon from "./Icon";

const IconContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 20px;
  display: flex;
  flex-direction: row;
`;

const FloatingIcons: React.FC = () => {
    return (
        <IconContainer>
            <Icon size={70} href={process.env.REACT_APP_GITHUB_PROFILE} target="_blank">
                <GitHub />
            </Icon>
            <Icon size={70} href={`mailto:${process.env.REACT_APP_EMAIL}`} target="_blank">
                <Email />
            </Icon>
        </IconContainer>
    );
};

export default FloatingIcons;
