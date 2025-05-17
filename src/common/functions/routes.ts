export const routes = {
    movies: () => "/movies",
    people: () => "/people",
    movieDetails: (id: number) => `/movies/${id}`,
    personDetails: (id: number) => `/people/${id}`,
};