import { OrUndefined } from "../../../../../common/aliases/types/OrUndefined";
import { TilesListSection } from "../../../../../common/components/TilesListSection";
import { EntityListUnion } from "../../../types/entityList.types";
import { Pagination } from "../Pagination/components";

interface ListSectionProps {
    entityListData: OrUndefined<EntityListUnion>;
    title: string;
}

export const ListSection = ({ entityListData, title }: ListSectionProps) => {

    const paginationProps = {
        currentPage: entityListData?.page,
        totalPages: entityListData?.total_pages,
    };

    return (
        <>
            <TilesListSection
                list={entityListData?.results}
                titleData={{ isPageTitle: true, text: title }}
            />
            <Pagination {...paginationProps} />
        </>
    );
};