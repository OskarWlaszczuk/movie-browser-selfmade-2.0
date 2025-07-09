import {useCombinedFetchStatus} from "../../../../common/hooks/useCombinedFetchStatus";
import {useFetchGenres} from "../../../../common/hooks/useFetchGenres";
import {Main} from "../../../../common/components/Main";
import {useFetchEntityProfile} from "../../hooks/useFetchDetailsPageData";
import {Credits} from "./Credits";
import {ApiEntityPathSegment} from "../../../../common/aliases/types/apiEndpointPaths.types.ts";
import {HorizontalTile} from "./HorizontalTile";
import {EntityListWrapper} from "../../../../common/components/EntityLinksList/styled";
import {detailsRoutes} from "../../../../common/functions/routes";
import {EntityLinksList} from "../../../../common/components/EntityLinksList";

interface EntityDetailsProps {
  entityPathSegment: ApiEntityPathSegment;
}

export const EntityDetails = ({entityPathSegment}: EntityDetailsProps) => {
  // const genresStatus = useFetchGenres();

  // const {
  //     entityDetails,
  //     entityCredits,
  //     detailsPageDataStatuses,
  //     detailsPausedFlags,
  // } = useFetchEntityProfile(entityPathSegment);

  // const combinedFetchStatus = useCombinedFetchStatus([...detailsPageDataStatuses, genresStatus], detailsPausedFlags);
  // const cast = entityCredits?.cast?.map(({ name, id }) => ({ name, routePath: `/actor/${id}` }));
  // const crew = entityCredits?.crew?.map(({ name, id, job }) => ({ name, routePath: `/${job.replaceAll(" ", "-").toLowerCase()}/${id}` }));

  return (
    // <>
    //     <Main
    //         successContent={
    //             <>
    //                 <HorizontalTile entityDetails={entityDetails} />
    //                 {/* <Credits credists={entityCredits} /> */}
    //                 <EntityLinksList entities={cast!} />
    //                 <EntityLinksList entities={crew!} />
    //             </>
    //         }
    //         combinedFetchStatus={combinedFetchStatus}
    //         errorMessage="Details not found"
    //     />
    // </>
    <></>
  );
};
