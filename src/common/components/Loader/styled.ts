import styled, { keyframes } from "styled-components";
import { ReactComponent as EllipseIcon } from "./Ellipse 2.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
}
  to {
    transform: rotate(360deg);
}
`;

export const StyledEllipseIcon = styled(EllipseIcon)`
  animation: ${rotate} 1s linear infinite;
`