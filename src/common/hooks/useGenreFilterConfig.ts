import { useLocation, useNavigate } from "react-router-dom";
import { FilterProps } from "../aliases/interfaces/FilterProps";
import { capitalizeFirstLetter } from "../functions/capitalizeFirstLetter";
import { formatToQueryParam } from "../functions/formatForURL";
import { FilterOption } from "../aliases/interfaces/SelectOption";
import { MatchesFilterProps } from "../aliases/interfaces/MatchesFilterProps";
import { useFetchGenres } from "./useFetchGenres";

export const useGenreFilterConfig = (): FilterProps => {
    const navigate = useNavigate();
    const { genres } = useFetchGenres();
    const { search, pathname } = useLocation();

    const searchParams = new URLSearchParams(search);

    const genreKey = "genre";
    const noGenreValue = "ANY GENRE";
    const genresParam = searchParams.get(genreKey);

    const options: FilterOption[] = [
        { label: noGenreValue, value: noGenreValue },
        ...(genres?.map(({ name }) => ({
            label: capitalizeFirstLetter(name),
            value: formatToQueryParam(name),
        })) || []),
    ];

    const handleChange = (selectedGenre: string) => {
        selectedGenre === noGenreValue
            ? searchParams.delete(genreKey)
            : searchParams.set(genreKey, selectedGenre);
        navigate(`${pathname}?${searchParams.toString()}`);
    };

    const hasGenre = ({ mediaItem }: MatchesFilterProps) => {
        const genreParam = searchParams.get(genreKey);
        if (!genreParam) return true;
        const genreParamId = genres?.find(({ name }) => formatToQueryParam(name) === genreParam)?.id!;
        return mediaItem?.genre_ids.includes(genreParamId);
    };

    return {
        options,
        filterParam: genresParam || noGenreValue,
        optionChangeHandler: handleChange,
        isMatch: hasGenre,
        isMatchParams: { genres, searchParams },
    };
};