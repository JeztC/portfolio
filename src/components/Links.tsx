import {Email, GitHub} from "@mui/icons-material";
import React from "react";
import Icon from "./Icon";
import styled from "@emotion/styled";
import {useTranslation} from "react-i18next";

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 150px;
  flex-direction: row;
`

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  height: 250px;
  margin: 20px;
  background-color: inherit;
  transition: all 0.2s;
`;

const Links = () => {
    const { t } = useTranslation()
    return (
        <LinksContainer>
            <Box>
                <Icon size={250} href={process.env.REACT_APP_GITHUB_PROFILE} target="_blank">
                    <GitHub />
                </Icon>
                <p>GitHub</p>
            </Box>
            <Box>
                <Icon size={250} href={`mailto:${process.env.REACT_APP_EMAIL}`} target="_blank">
                    <Email />
                </Icon>
                <p>{t('links_email')}</p>
            </Box>
        </LinksContainer>
    )
}

export default Links