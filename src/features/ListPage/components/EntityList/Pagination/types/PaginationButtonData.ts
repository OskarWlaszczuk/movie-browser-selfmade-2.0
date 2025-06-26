import { ReactElement } from "react";

export interface PaginationButtonData {
    clickHandler: () => void;
    label: ReactElement;
    disabledCondition: boolean;
}