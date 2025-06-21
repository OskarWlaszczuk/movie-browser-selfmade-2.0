import { ReactElement } from "react";
import { FetchStatus } from "../../aliases/types/FetchStatus";
import { FETCH_STATUSES } from "../../constants/FETCH_STATUSES";
import { MainContent, MainSection } from "./styled";
import { Loader } from "../Loader";

interface MainProps {
    content: ReactElement;
    extraLoaderContent?: ReactElement;
    combinedFetchStatus: FetchStatus;
    bannerContent?: ReactElement;
};

export const Main = ({ content, bannerContent, combinedFetchStatus, extraLoaderContent }: MainProps) => {
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
            return (
                <MainSection>
                    <MainContent>
                        {extraLoaderContent}
                        <Loader />
                    </MainContent>
                </MainSection>
            );

        case FETCH_STATUSES.ERROR:
            return <>Błąd</>;

        default:
            return <>Initial</>;
    };
};