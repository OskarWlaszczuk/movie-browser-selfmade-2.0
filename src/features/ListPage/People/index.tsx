import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../reduxTypedHooks";
import { ListPage } from "../index";
import { popularPeopleActions, popularPeopleSelectors } from "../../../popularPeopleSlice";

export const People = () => {
    const dispatch = useAppDispatch();

    const popularPeopleStatus = useAppSelector(popularPeopleSelectors.selectPopularListStatus);
    const popularPeople = useAppSelector(popularPeopleSelectors.selectPopularList);

    useEffect(() => {
        dispatch(popularPeopleActions.fetchPopularList());
    }, [dispatch]);

    return (
        <ListPage
            title="Popular people"
            list={popularPeople}
            fetchStatuses={[popularPeopleStatus]}
        />
    );
};