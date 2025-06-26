import { PaginationButtonData } from "../../types/PaginationButtonData";
import { PaginationButton, PaginationButtonsContainer } from "./styled";
import { nanoid } from "@reduxjs/toolkit";

type PaginationButtonGroupProps = {
    buttons: PaginationButtonData[];
};

export const PaginationButtonGroup = ({ buttons }: PaginationButtonGroupProps) => (
    <PaginationButtonsContainer>
        {buttons.map(({ clickHandler, label, disabledCondition }) => (
            <PaginationButton key={nanoid()} onClick={clickHandler} disabled={disabledCondition}>
                {label}
            </PaginationButton>
        ))}
    </PaginationButtonsContainer>
);