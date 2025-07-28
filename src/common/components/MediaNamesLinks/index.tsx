import { nanoid } from "@reduxjs/toolkit";
import { MediaNameLink } from "../MediaNameLink";
import { EntityListWrapper } from "./styled";
import { OrUndefined } from "../../aliases/types/OrUndefined";

export interface MediaLinkData {
    label: string;
    routePath: string;
}

interface MediaNamesLinksProps {
    mediaLinks: OrUndefined<MediaLinkData[]>;
}

export const MediaNamesLinks = ({ mediaLinks }: MediaNamesLinksProps) => {

    return (
        <>
            {
                (!!mediaLinks && mediaLinks?.length > 0) && (
                    <EntityListWrapper>
                        {
                            mediaLinks?.map(({ label, routePath }) => (
                                <MediaNameLink
                                    key={nanoid()}
                                    to={routePath}
                                >
                                    {label}
                                </MediaNameLink>
                            ))
                        }
                    </EntityListWrapper>
                )
            }
        </>
    );
};