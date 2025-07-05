import { nanoid } from "@reduxjs/toolkit";
import { MetaData } from "../../../../../../common/components/MetaData";
import { capitalizeFirstLetter } from "../../../../../../common/functions/capitalizeFirstLetter";
import { EntityEntries } from "../../../../types/entityEntries.types";
import { StyledValue } from "./styled";
import { theme } from "../../../../../../core/theme";
import { useMediaQuery } from "react-responsive";

interface EntityEntriesProps {
    entityEntries: EntityEntries;
}

export const EntityEntriesSection = ({ entityEntries: detailsEntry }: EntityEntriesProps) => {
    const isLaptopXS = useMediaQuery({ query: `(max-width:${theme.breakpoints.laptopXS})` });
    const getValueElement = (value: string) => <StyledValue>{value}</StyledValue>;

    return (
        <section>
            {
                detailsEntry.map(({ key, value }) => (
                    (value || (Array.isArray(value) && value.length > 0)) && (
                        <div key={nanoid()}>
                            {
                                isLaptopXS ?
                                    getValueElement(value) :
                                    <MetaData>{capitalizeFirstLetter(key)}:{" "}
                                        {getValueElement(value)}
                                    </MetaData>
                            }
                        </div>
                    )
                ))
            }
        </section>
    );
};