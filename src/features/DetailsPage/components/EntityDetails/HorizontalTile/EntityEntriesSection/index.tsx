import { nanoid } from "@reduxjs/toolkit";
import { MetaData } from "../../../../../../common/components/MetaData";
import { capitalizeFirstLetter } from "../../../../../../common/functions/capitalizeFirstLetter";
import { EntityEntries } from "../../../../types/entityEntries.types";

interface EntityEntriesProps {
    entityEntries: EntityEntries;
}

export const EntityEntriesSection = ({ entityEntries: detailsEntry }: EntityEntriesProps) => (
    <section>
        {
            detailsEntry.map(({ key, value }) => (
                (value || (Array.isArray(value) && value.length > 0)) && (
                    <div key={nanoid()}>
                        <MetaData>{capitalizeFirstLetter(key)}:{" "}
                            <span style={{
                                fontSize: "18px",
                                fontWeight: 400,
                                color: "black"
                            }}>
                                {value}
                            </span>
                        </MetaData>
                    </div>
                )
            ))
        }
    </section>
);