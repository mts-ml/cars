import styled from "styled-components";
import { pxToRem } from "../../utils/utils";
import { Link as RouterLink } from 'react-router-dom'


export const Section = styled.section`
   margin-inline: auto;
   max-width: ${pxToRem(1400)};
   padding: ${pxToRem(20)} ${pxToRem(40)};
   color: var(--color);
   background-color: var(--bg-color);
`

export const Title = styled.h1`
`

export const Subtitle = styled.h2`
   margin-block: ${pxToRem(10)};

`

export const Description = styled.p`

`

export const Link = styled(RouterLink)`
   display: flex;
   align-items: center;
   gap: ${pxToRem(5)};
   text-decoration: none;
   margin-block-start: ${pxToRem(20)};
`

export const LeftArrow = styled.img`
   transform: rotate(180deg);
`
