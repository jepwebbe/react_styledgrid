import React from "react";
import styled from "styled-components";
import { breakpoints } from "../Styled/Theme/Template";
const Content = () => {
  return (
    <>
      <StyledHeader>Header</StyledHeader>
      <StyledHero>Hero</StyledHero>
      <StyledMenu>Menu</StyledMenu>
      <StyledMain>Main</StyledMain>
      <StyledBanner>Banner</StyledBanner>
      <StyledExtra style={breakpoints.l ? {display: "none"} : null}>Extra</StyledExtra>
      <StyledImage>Image</StyledImage>
    </>
  );
};

export default Content;

const StyledHeader = styled.header`
  grid-area: header;
  background-color: green;
`;
const StyledHero = styled.div`
grid-area: hero;
background-color: blue;
`;
const StyledMenu = styled.nav`
grid-area: menu;
background-color: yellow;
`
const StyledMain = styled.main`
grid-area: main;
background-color: red;
`
const StyledBanner = styled.div`
grid-area: banner;
background-color: purple;
`
const StyledExtra = styled.div`
grid-area: extra;
background-color: beige;
`
const StyledImage = styled.div`
grid-area: image;
background-color: orange;
;`
