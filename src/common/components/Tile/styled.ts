import styled from "styled-components";

export const StyledTile = styled.li`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
`;

export const Picture = styled.img`
    width:100%;
    height: 50px;
`;

export const Title = styled.header`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
`;

export const SubTitle = styled.p`
    color: ${({ theme }) => theme.colors.waterloo};
    font-size:  16px;
    font-weight: 400;
`;