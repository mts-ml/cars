import styled from "styled-components";
import { pxToRem } from "../../utils/utils";
import { Link as RouterLink } from 'react-router-dom'


export const HeaderComp = styled.header`
padding: ${pxToRem(20)} ${pxToRem(40)};
background-color: var(--bg-color-header);
color: var(--color);
box-shadow: var(--box-shadow);
margin-block-end: ${pxToRem(30)};
`


export const HeaderWrapper = styled.div`
max-width: ${pxToRem(1400)};
margin-inline: auto;

@media (min-width:${pxToRem(450)}) { 
   display: flex;
   justify-content: space-between;
   align-items: center;
}
`


export const LogoLink = styled(RouterLink)`
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
color: var(--color);

@media (min-width:${pxToRem(450)}) { 
   justify-content: flex-start;
}
`


export const Title = styled.h1``


export const HeaderLogo = styled.img`
border-radius: 5px;
`


export const ThemeDiv = styled.div``


export const ThemeButton = styled.button`
display: flex;
align-items: center;
gap: 5px;
margin-block-start: ${pxToRem(20)};
margin-inline: auto;
border: 1px solid var(--border-color);
padding: ${pxToRem(7)} ${pxToRem(12)};
border-radius: 7px;
color: var(--color);
background-color: var(--bg-color);
cursor: pointer;
box-shadow: var(--box-shadow-btn);
opacity: .6;
transition: opacity .2s ease-in-out;

&:hover {
   opacity: 1;
   transition: opacity .2s ease-in-out;
}

@media (min-width:${pxToRem(450)}) { 
   margin-block-start: 0;
}

`


export const ThemeImgOn = styled.img`
filter: var(--filter);
`


export const ThemeImgOff = styled.img``
