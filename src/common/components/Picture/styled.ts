import styled from "styled-components";

interface StyledPictureProps {
    $picture: string;
}

export const StyledPicture = styled.div.attrs<StyledPictureProps>(({ $picture }) => ({
    style: {
        backgroundImage: `url(${$picture})`,
    },
})) <StyledPictureProps>`
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    padding-top: calc(100% * 585 / 582);
`;