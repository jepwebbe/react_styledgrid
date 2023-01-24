import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const Content = () => {
  return (
    <>
      <StyledHeader>Header</StyledHeader>
      <StyledHero>Hero</StyledHero>
      <StyledMenu><NavLink to="/contact">To contact</NavLink><NavLink to="/">To home</NavLink></StyledMenu>
      <StyledMain>Main</StyledMain>
      <StyledBanner>Banner</StyledBanner>
      <StyledExtra>Extra</StyledExtra>
      <StyledImage>Image</StyledImage>
    </>
  );
};

export default Content;

const StyledHeader = styled.header`
  grid-area: header;
  background-color: green;
  color: ${(props) => props.theme.colors.aFineColor};
`;
const StyledHero = styled.div`
  grid-area: hero;
  background-color: blue;
`;
const StyledMenu = styled.nav`
  grid-area: menu;
  background-color: yellow;
`;
const StyledMain = styled.main`
  grid-area: main;
  background-color: red;
`;
const StyledBanner = styled.div`
  grid-area: banner;
  background-color: purple;
`;
const StyledExtra = styled.div`
  grid-area: extra;
  background-color: beige;
  display: block;

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    display: none;
  }
`;
const StyledImage = styled.div`
  grid-area: image;
  background-color: orange; ;
`;
