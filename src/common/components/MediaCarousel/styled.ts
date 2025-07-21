import styled, { css } from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 1rem;
`;

export const CarouselList = styled.div`
  display: grid;
  grid-auto-flow: column;              
  grid-auto-columns: minmax(150px, auto);
  grid-gap: 15px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none; 

  &::-webkit-scrollbar {
    display: none; 
  }
`;

interface ScrollButtonProps {
  $previous?: boolean;
  $next?: boolean;
}

export const ScrollButton = styled.button<ScrollButtonProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.3rem 0.7rem;
  border-radius: 50%;
  z-index: 1;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(200, 200, 200, 0.8);
  }

  ${({ $previous }) => $previous && css`
    left: 0.5rem;
  `};

  ${({ $next }) => $next && css`
    right: 0.5rem;
  `};
`;