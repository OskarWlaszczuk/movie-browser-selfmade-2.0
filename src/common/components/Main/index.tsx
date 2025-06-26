import { ReactNode } from "react";
import { FetchStatus } from "../../aliases/types/FetchStatus";
import { FETCH_STATUSES } from "../../constants/FETCH_STATUSES";
import { MainContent, MainSection } from "./styled";
import { ErrorMessage } from "../ErrorMessage";
import { Loader } from "../Loader";

interface MainProps {
    errorMessage: string;
    content: ReactNode;
    combinedFetchStatus: FetchStatus;
    extraLoaderContent?: ReactNode;
    bannerContent?: ReactNode;
};

export const Main = ({ content, bannerContent, combinedFetchStatus, extraLoaderContent, errorMessage }: MainProps) => {

    const selectContentByStatus = () => {
        switch (combinedFetchStatus) {
            case FETCH_STATUSES.SUCCESS:
                return content

            case FETCH_STATUSES.PENDING:
                return (
                    <>
                        {extraLoaderContent}
                        <Loader />
                    </>
                );

            case FETCH_STATUSES.ERROR:
                return <ErrorMessage message={errorMessage} />;

            case FETCH_STATUSES.PAUSED:
                return <ErrorMessage message="Please check your network connection and try again" />;
        };
    };

    return (
        <MainSection>
            {bannerContent || <></>}
            <MainContent>
                {selectContentByStatus()}
            </MainContent>
        </MainSection>
    );
};