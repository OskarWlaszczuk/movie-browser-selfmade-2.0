import { ReactNode } from "react";
import { FetchStatus } from "../../aliases/types/FetchStatus";
import { FETCH_STATUSES } from "../../constants/FETCH_STATUSES";
import { MainContent, MainSection } from "./styled";
import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";

interface MainProps {
    content: ReactNode;
    extraLoaderContent?: ReactNode;
    combinedFetchStatus: FetchStatus;
    bannerContent?: ReactNode;
    errorStatus?: any;
};

export const Main = ({ content, bannerContent, combinedFetchStatus, extraLoaderContent, errorStatus }: MainProps) => {
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
            return <ErrorMessage status={errorStatus} />;

        default:
            return <>Initial</>;
    };
};