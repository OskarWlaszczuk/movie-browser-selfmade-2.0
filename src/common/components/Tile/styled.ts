import styled from "styled-components";

export const StyledTile = styled.li`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
    transition: 0.3s;

    &:hover{
        scale: 105%
    }
`;

interface PictureProps {
    $picture: string;
}

export const Picture = styled.div.attrs<PictureProps>(({ $picture }) => ({
    style: {
        backgroundImage: `url(${$picture})`,
    },
})) <PictureProps>`
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    padding-top: calc(100% * 585 / 582);
`;

export const Title = styled.header`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size:  ${({ theme }) => theme.fontSizes.l};
    line-height: 130%;
`;

export const SubTitle = styled.p`
    color: ${({ theme }) => theme.colors.waterloo};
    font-size:   ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
`;