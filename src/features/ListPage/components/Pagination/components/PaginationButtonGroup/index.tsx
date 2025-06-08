import { PaginationButtonData } from "../../types/PaginationButtonData";
import { PaginationButton } from "./styled";

type PaginationButtonGroupProps = {
    buttons: PaginationButtonData[];
};

export const PaginationButtonGroup = ({ buttons }: PaginationButtonGroupProps) => (
    <>
        {buttons.map(({ clickHandler, label, disabledCondition }) => (
            <PaginationButton key={label} onClick={clickHandler} disabled={disabledCondition}>
                {label}
            </PaginationButton>
        ))}
    </>
);