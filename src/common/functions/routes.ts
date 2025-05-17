type ListPageType = "movies" | "people" | "results";
type DetailsPageType = "movie" | "person";

export const toListPage = (listPageType: ListPageType) => `/list/${listPageType}`;
export const toDetailsPage = (detailsPageType: DetailsPageType) => `/details/${detailsPageType}`

export const ROUTES = {
    list: {
        movies: toListPage("movies"),
        people: toListPage("people"),
        results: toListPage("results"),
    },
    details: {
        movie: toDetailsPage("movie"),
        person: toDetailsPage("person"),
    },
};