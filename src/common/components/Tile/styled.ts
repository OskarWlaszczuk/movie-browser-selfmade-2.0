import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

interface SharedProps {
    $horizontalLayout?: boolean;
}

interface StyledTileProps extends SharedProps {
    $twoColumns?: boolean;
}

type TitleProps = SharedProps;

const twoColumnsMobileLayout = css`
    grid-template-areas: 
                "picture infoWrapper"
                "picture infoWrapper"
                "extraContent extraContent"
            ;
    grid-template-columns: repeat(2, 1fr);
`;
export const StyledTile = styled(NavLink) <StyledTileProps>`
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
    transition: 0.4s;
    display: grid;
    grid-template-areas: 
        "picture"
        "infoWrapper"
        "extraContent"
    ;
    grid-template-rows: auto 1fr;
    grid-gap: 12px;
    border-radius: 5px;
    box-shadow: 0px 0px 7px -1px #5a575747;
    text-decoration: none;

    &:hover{
        scale: 103%
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
        padding: 8px;
    }

  ${({ $twoColumns }) => $twoColumns && css`

        @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        ${twoColumnsMobileLayout}
        }
    `};

    ${({ $horizontalLayout }) => $horizontalLayout && css`
        grid-template-columns: 0.7fr 2fr;
        grid-template-areas: 
            "picture infoWrapper infoWrapper"
            "picture extraContent extraContent"
            "picture extraContent extraContent" 
        ;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
          ${twoColumnsMobileLayout}
        }
    `}
`;

export const InfoWrapper = styled.article`
    display: flex;
    flex-direction: column;
    gap: 8px;
    grid-area: infoWrapper;
`;

export const Title = styled.header<TitleProps>`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size:  ${({ theme }) => theme.fontSizes.l};
    line-height: 130%;
    word-break: break-word;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopXS}) {
        font-size:  ${({ theme }) => theme.fontSizes.m};
    }

${({ $horizontalLayout }) => $horizontalLayout && css`
        font-weight: ${({ theme }) => theme.fontWeights.semiBold};
        font-size:  ${({ theme }) => theme.fontSizes.title};
    `};
`;

export const ExtraContentWrapper = styled.div`
    grid-area: extraContent;
    word-break: break-all;
`;