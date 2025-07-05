import { useMediaQuery } from "react-responsive";
import { OrUndefined } from "../../../../../../common/aliases/types/OrUndefined";
import { URL_QUERY_PARAM_KEYS } from "../../../../../../common/constants/URL_QUERY_PARAM_KEYS";
import { useReplaceQueryParameter } from "../../../../../../common/hooks/useReplaceQueryParameter";
import { EntityListUnion } from "../../../../types/entityList.types";
import { StyledNextPageIcon, StyledPreviousPageIcon } from "../components/PaginationButtonGroup/styled";
import { PaginationButtonData } from "../types/PaginationButtonData";
import { theme } from "../../../../../../core/theme";
import { JSX } from "react/jsx-runtime";

const usePaginationButtonsHelpers = () => {
    const isMobile = useMediaQuery({ query: `(max-width: ${theme.breakpoints.tablesS})` });

    const getBackButtonsDesktopLabel = (desktopText: string, backButtonsDisableCondtion: boolean) => (
        <>
            <StyledPreviousPageIcon $isButtonDisabled={backButtonsDisableCondtion} />
            <span>{desktopText}</span>
        </>
    );

    interface SelectButtonLabelProps {
        disableCondition: boolean;
        desktopText: string;
        mobileElement: JSX.Element;
    }

    const selectBackButtonsLabel = ({ disableCondition, desktopText, mobileElement }: SelectButtonLabelProps) => (
        <>
            {
                isMobile ?
                    <>
                        {mobileElement}
                    </> :
                    getBackButtonsDesktopLabel(desktopText, disableCondition)

            }
        </>
    );

    const getForwardButtonsDesktopLabel = (desktopText: string, forwardButtonsDisableCondition: boolean) => (
        <>
            <span>{desktopText}</span>
            <StyledNextPageIcon $isButtonDisabled={forwardButtonsDisableCondition} />
        </>
    );

    const selectForwardButtonsDesktopLabel = ({ mobileElement, desktopText, disableCondition }: SelectButtonLabelProps) => (
        <>
            {
                isMobile ?
                    <>
                        {mobileElement}
                    </> :
                    getForwardButtonsDesktopLabel(desktopText, disableCondition)
            }
        </>
    );

    return { selectBackButtonsLabel, selectForwardButtonsDesktopLabel };
};

export const usePaginationButtons = (
    currentPage: OrUndefined<EntityListUnion["page"]>,
    maxTotalPages: number,
) => {

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === maxTotalPages;

    const replaceQueryParameter = useReplaceQueryParameter();
    const { selectBackButtonsLabel, selectForwardButtonsDesktopLabel } = usePaginationButtonsHelpers();

    const pageKeySearchParam = URL_QUERY_PARAM_KEYS.PAGE;

    const paginationBackButtons: PaginationButtonData[] = [
        {
            clickHandler: () => replaceQueryParameter([{
                key: pageKeySearchParam,
                value: 1,
            }]),
            label: (
                selectBackButtonsLabel({
                    disableCondition: isFirstPage,
                    desktopText: "First",
                    mobileElement: (
                        <>
                            <StyledPreviousPageIcon $isButtonDisabled={isFirstPage} />
                            <StyledPreviousPageIcon $isButtonDisabled={isFirstPage} />
                        </>
                    )
                })
            ),
            disabledCondition: isFirstPage,
        },
        {
            clickHandler: () => replaceQueryParameter([{
                key: pageKeySearchParam,
                value: isFirstPage ? currentPage : currentPage! - 1
            }]),
            label: (
                selectBackButtonsLabel({
                    disableCondition: isFirstPage,
                    desktopText: "Previous",
                    mobileElement: (
                        <StyledPreviousPageIcon $isButtonDisabled={isFirstPage} />
                    )
                })
            ),
            disabledCondition: isFirstPage,
        },
    ];

    const paginationForwardButtons: PaginationButtonData[] = [
        {
            clickHandler: () => replaceQueryParameter([{
                key: pageKeySearchParam,
                value: isLastPage ? currentPage! : currentPage! + 1
            }]),
            label: (
                selectForwardButtonsDesktopLabel({
                    disableCondition: isLastPage,
                    desktopText: "Next",
                    mobileElement: (
                        <StyledNextPageIcon $isButtonDisabled={isLastPage} />
                    )
                })
            ),
            disabledCondition: isLastPage,
        },
        {
            clickHandler: () => replaceQueryParameter([{
                key: pageKeySearchParam,
                value: maxTotalPages!,
            }]),
            label: (
                selectForwardButtonsDesktopLabel({
                    disableCondition: isLastPage,
                    desktopText: "Last",
                    mobileElement: (
                        <>
                            <StyledNextPageIcon $isButtonDisabled={isLastPage} />
                            <StyledNextPageIcon $isButtonDisabled={isLastPage} />
                        </>
                    )
                })
            ),
            disabledCondition: isLastPage,
        },
    ];

    return { paginationBackButtons, paginationForwardButtons };
};