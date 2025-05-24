import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../reduxTypedHooks";
import { ListPage } from "../index";
import { fetchPopularPeople, selectPopularPeopleList, selectPopularPeopleStatus } from "../../../popularPeopleSlice";

export const People = () => {
    const dispatch = useAppDispatch();

    const popularPeopleStatus = useAppSelector(selectPopularPeopleStatus);
    const popularPeople = useAppSelector(selectPopularPeopleList);

    useEffect(() => {
        dispatch(fetchPopularPeople());
    }, [dispatch]);

    return (
        <ListPage
            title="Popular people"
            list={popularPeople}
            fetchStatuses={[popularPeopleStatus]}
        />
    );
};