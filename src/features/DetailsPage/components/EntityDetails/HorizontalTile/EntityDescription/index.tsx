import { DetailedMovieItem } from "../../../../../../common/aliases/interfaces/movie.types"
import { DetailedPersonItem } from "../../../../../../common/aliases/interfaces/person.types"
import { OrUndefined } from "../../../../../../common/aliases/types/OrUndefined"

type Description = DetailedMovieItem["overview"] | DetailedPersonItem["biography"];

interface EntityOverviewProps {
    description: OrUndefined<Description>;
}

export const EntityDescription = ({ description }: EntityOverviewProps) => (
    <>
        {
            description && (
                <>{description}</>
            )
        }
    </>
);