import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.3fr;
    margin: 20px auto;
    width: 80%;
    gap: 32px;
`;
export const PersonDetailsSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 230px;
`;

export const PersonPicture = styled.img`

`;

export const Description = styled.p`

`;

export const KinematographySection = styled.section`
    display: flex; 
    flex-direction: column;
    gap: 16px;
`;

export const MoviesList = styled.div`
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
`;

export const MovieTile = styled.img`
    width: 100%;
`;