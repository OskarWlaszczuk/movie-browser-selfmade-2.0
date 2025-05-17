export const routes = {
    homepage: (): "/movies" => "/movies",
    movies: (): "/movies" => "/movies",
    people: (): "/people" => "/people",
    movieDetails: (id: number) => `/movies/${id}`,
    personDetails: (id: number) => `/people/${id}`,
};