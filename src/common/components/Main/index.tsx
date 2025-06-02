import { ReactElement } from "react";
import { FetchStatus } from "../../aliases/types/FetchStatus";
import { FETCH_STATUSES } from "../../constants/FETCH_STATUSES";
import { MainContent, MainSection } from "./styled";

interface MainProps {
    content: ReactElement;
    combinedFetchStatus: FetchStatus;
    bannerContent?: ReactElement;
};

export const Main = ({ content, bannerContent, combinedFetchStatus }: MainProps) => {
    //Ustawić poprawne elementy zwracane w razie ładowania/błędu/initial
    switch (combinedFetchStatus) {
        case FETCH_STATUSES.SUCCESS:
            return (
                <MainSection>
                    {bannerContent || <></>}
                    <MainContent>
                        {content}
                    </MainContent>
                </MainSection>
            );

        case FETCH_STATUSES.PENDING:
            return <>Ładowanie</>;

        case FETCH_STATUSES.ERROR:
            return <>Błąd</>;

        default:
            return <>Initial</>;
    };
};