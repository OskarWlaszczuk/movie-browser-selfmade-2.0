import { PaginationButtonData } from "../../types/PaginationButtonData";
import { PaginationButtons, PaginationButtonsContainer } from "./styled";
import { nanoid } from "@reduxjs/toolkit";

type PaginationButtonGroupProps = {
    buttons: PaginationButtonData[];
};

export const PaginationButtonGroup = ({ buttons }: PaginationButtonGroupProps) => (
    <PaginationButtonsContainer>
        {buttons.map(({ clickHandler, label, disabledCondition }) => (
            <PaginationButtons key={nanoid()} onClick={clickHandler} disabled={disabledCondition}>
                {label}
            </PaginationButtons>
        ))}
    </PaginationButtonsContainer>
);