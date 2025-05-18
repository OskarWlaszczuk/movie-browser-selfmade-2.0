import { FetchStatus } from "../../common/aliases/types/FetchStatus";
import { Main } from "../../common/components/Main";
import { SectionHeader } from "../../common/components/SectionHeader";

interface ListPageProps {
    title: string;
    list: any[];
    fetchStatuses: FetchStatus[]
}

export const ListPage = ({ title, list, fetchStatuses }: ListPageProps) => {

    return (
        // <Main

        // />
        <>
            <SectionHeader text={title} isMainHeader={false} />
        </>
    );
};