import styled from "styled-components";
import { breakpoints } from "./Theme/Template";

export const Grid = ({ gtc, gtr, gta, gtcM, gtrM, gtaM, gtcT, gtrT, gtaT, children }) => {
  return (
    <StyledGrid
      gtc={gtc}
      gtr={gtr}
      gta={gta}
      gtcM={gtcM}
      gtrM={gtrM}
      gtaM={gtaM}
      gtcT={gtcT}
      gtrT={gtrT}
      gtaT={gtaT}
    >{children}</StyledGrid>
  );
};
const StyledGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.gtcM};
  grid-template-rows: ${(props) => props.gtrM};
  grid-template-areas: ${(props) => props.gtaM};
  @media (min-width: ${breakpoints.m}) {
    grid-template-columns: ${(props) => props.gtcT};
    grid-template-rows: ${(props) => props.gtrT};
    grid-template-areas: ${(props) => props.gtaT};
  }
  @media (min-width: ${breakpoints.l}) {
    grid-template-columns: ${(props) => props.gtc};
    grid-template-rows: ${(props) => props.gtr};
    grid-template-areas: ${(props) => props.gta};
  }
`;
