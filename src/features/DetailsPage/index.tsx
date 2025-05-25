import { JSX } from "react";
import { Movie } from "../../common/aliases/interfaces/Movie"
import { Person } from "../../common/aliases/interfaces/Person"
import { TilesListSection } from "../../common/components/TilesListSection";
import { FetchStatus } from "../../common/aliases/types/FetchStatus";
import { Main } from "../../common/components/Main";
import { useCombinedFetchStatus } from "../../common/hooks/useCombinedFetchStatus";

interface TitleData {
    text: string;
    isPageTitle: boolean;
}

type RenderListItem<ListItem> = (item: ListItem) => JSX.Element;

interface SectionData<ListItem> {
    list: ListItem[];
    titleData: TitleData;
    renderListItem: RenderListItem<ListItem>
}

interface DetailsPageProps<ListItem> {
    details?: Movie | Person;
    sectionsData: SectionData<ListItem>[];
    fetchStatuses: FetchStatus[];
}

export const DetailsPage = <ListItem extends Movie | Person>(
    { details, sectionsData, fetchStatuses }: DetailsPageProps<ListItem>
) => {

    const combinedFetchStatus = useCombinedFetchStatus(fetchStatuses);

    return (
        <>
            <Main
                content={
                    <>
                    
                        {
                            sectionsData.map(sectionData => (
                                <TilesListSection {...sectionData} />
                            ))
                        }
                    </>
                }
                combinedFetchStatus={combinedFetchStatus}
            />
        </>
    );
};