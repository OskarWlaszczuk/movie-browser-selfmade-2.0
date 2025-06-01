import { createPopularListSlice } from "./common/functions/createPopularListSlice";
import { Person } from "./common/aliases/interfaces/Person";
// @ts-ignore
export const popularPeopleSlice = createPopularListSlice<Person>({ stateName: "popularPeople" });
// @ts-ignore
export const popularPeopleReducer = popularPeopleSlice.reducer;

export const { actions: popularPeopleActions, selectors: popularPeopleSelectors } = popularPeopleSlice;