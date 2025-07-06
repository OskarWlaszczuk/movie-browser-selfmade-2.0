import { nanoid } from "@reduxjs/toolkit";
import { EntityNameLink } from "../EntityNameLink";
import { EntityListWrapper } from "./styled";
import { OrUndefined } from "../../aliases/types/OrUndefined";

interface EntityLink {
    name: string;
    routePath: string;
}

interface EntityLinksListProps {
    entities: OrUndefined<EntityLink[]>;
}

export const EntityLinksList = ({ entities }: EntityLinksListProps) => {

    return (
        <>
            {
                (!!entities && entities?.length > 0) && (
                    <EntityListWrapper>
                        {
                            entities?.map(({ name, routePath }) => (
                                <EntityNameLink
                                    key={nanoid()}
                                    to={routePath}
                                >
                                    {name}
                                </EntityNameLink>
                            ))
                        }
                    </EntityListWrapper>
                )
            }
        </>
    );
};