import { Person } from "./Person";

export interface PopularPeopleResponse {
    page: number;
    results: Person[];
    total_pages: number;
    total_results: number;
}