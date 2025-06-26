import { EntityId } from "@reduxjs/toolkit";
import { TileEntityId } from "../aliases/interfaces/TileEntity";

const detailsRoutes = {
    movieDetails: (id: number) => `/movies/${id}`,
    personDetails: (id: number) => `/people/${id}`,
}

const listRoutes = {
    movies: (): "/movies" => "/movies",
    people: (): "/people" => "/people",
}

export const routes = {
    homepage: (): "/movies" => "/movies",
    movies: (): "/movies" => "/movies",
    people: (): "/people" => "/people",
    movieDetails: (id: number) => `/movies/${id}`,
    personDetails: (id: number) => `/people/${id}`,
};


export type DetailsRoutes = typeof detailsRoutes[keyof typeof detailsRoutes];
export type ListRoutes = typeof listRoutes[keyof typeof listRoutes];