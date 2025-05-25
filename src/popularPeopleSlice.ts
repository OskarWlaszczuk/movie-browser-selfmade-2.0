import { createPopularListSlice } from "./common/functions/createPopularListSlice";
import { Person } from "./common/aliases/interfaces/Person";

export const popularPeopleSlice = createPopularListSlice<Person>({ stateName: "popularPeople" });
export const popularPeopleReducer = popularPeopleSlice.reducer;

export const { actions: popularPeopleActions, selectors: popularPeopleSelectors } = popularPeopleSlice;