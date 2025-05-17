export const routes = {
    movies: (): "/movies" => "/movies",
    people: (): "/people" => "/people",
    movieDetails: (id: number) => `/movies/${id}`,
    personDetails: (id: number) => `/people/${id}`,
};