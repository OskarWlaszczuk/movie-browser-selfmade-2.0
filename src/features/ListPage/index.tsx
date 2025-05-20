import { FetchStatus } from "../../common/aliases/types/FetchStatus";
import { Main } from "../../common/components/Main";
import { SectionHeader } from "../../common/components/SectionHeader";
import { TilesList } from "./Movies/styled";

interface ListPageProps {
    title: string;
    list: any[];
    fetchStatuses: FetchStatus[]
}

export const ListPage = ({ title, list, fetchStatuses }: ListPageProps) => {

    /* <TilesList>
                    {
                        data?.map(({
                            genre_ids,
                            id,
                            vote_average,
                            vote_count,
                            title,
                            release_date,
                            poster_path
                        }, index) => (
                            <Tile
                                key={index}
                                id={id}
                                picture={"poster_path"}
                                title={title}
                                subTitle={release_date}
                                movieDetails={{
                                    genresIds: genre_ids,
                                    rate: vote_average,
                                    votesTotal: vote_count,
                                }}
                            />
                        ))
                    }
                </TilesList> */

    return (
        <>
            <SectionHeader text={title} isMainHeader />
            <TilesList>
            </TilesList>
        </>
    );
};