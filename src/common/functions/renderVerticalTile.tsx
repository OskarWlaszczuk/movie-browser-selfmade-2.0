import { nanoid } from "@reduxjs/toolkit";
import { Tile } from "../components/Tile";
import { getYear } from "./getYear";
import { TileEntity } from "../aliases/interfaces/TileEntity";
import { SimplefiedMovieItem } from "../aliases/interfaces/movie.types";
import { CastMember, CrewMember } from "../aliases/interfaces/person.types";

export const renderVerticalTile = (entityData: TileEntity) => {
    const isMovie = (entityData: TileEntity): entityData is SimplefiedMovieItem => {
        return "title" in entityData;
    };

    const isCastMember = (entityData: TileEntity): entityData is CastMember => {
        return "character" in entityData;
    };
    const isCrewMember = (entityData: TileEntity): entityData is CrewMember => {
        return "job" in entityData;
    };

    const getTileProps = () => {
        if (isMovie(entityData)) {
            const {
                poster_path,
                title,
                release_date,
                genre_ids,
                vote_average,
                vote_count
            } = entityData;

            return {
                picture: poster_path,
                title,
                subTitle: getYear(release_date),
                movieDetails: {
                    genresIds: genre_ids,
                    voteAverage: vote_average,
                    voteCount: vote_count,
                },
            };
        }
        else if (isCastMember(entityData)) {
            const { profile_path, character, name } = entityData;

            return {
                picture: profile_path,
                title: name,
                subTitle: character,
            };
        } else if (isCrewMember(entityData)) {
            const { profile_path, job, name, id } = entityData;

            return {
                id,
                picture: profile_path,
                title: name,
                subTitle: job,
            };
        } else {
            const { profile_path, name } = entityData;

            return {
                picture: profile_path,
                title: name,
            };
        }
    };
    const tileProps = getTileProps();

    return (
        <Tile
            key={nanoid()}
            id={entityData.id}
            {...tileProps}
        />
    );
};