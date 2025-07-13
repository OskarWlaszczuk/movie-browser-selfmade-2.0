import Select from "react-select"
import { capitalizeFirstLetter } from "../../../../../common/functions/capitalizeFirstLetter";
import { useLocation, useNavigate } from "react-router-dom";
import { OrUndefined } from "../../../../../common/aliases/types/OrUndefined";
import { Genre } from "../../../../../common/aliases/types/genre.types";
import { formatForURL } from "../../../../../common/functions/formatForURL";

interface GenreSwitcherProps {
    genres: OrUndefined<Genre[]>;
}
interface SelectOption {
    value: string;
    label: string;
}

export const GenreFilter = ({ genres }: GenreSwitcherProps) => {
    const navigate = useNavigate();
    const { pathname, search } = useLocation();

    const searchParams = new URLSearchParams(search);

    const genreKey = "genre";

    const selectedGenresFromURL = searchParams.getAll(genreKey);
    const genresNames = genres?.map(({ name }) => name);
    const genreOptions: SelectOption[] = genresNames?.map(genre => ({ value: formatForURL(genre), label: capitalizeFirstLetter(genre) })) || [];
    const selectedGenreOptions = genreOptions.filter(option =>
        selectedGenresFromURL.includes(option.value)
    );

    const handleGenreChange = (selectedGenres: SelectOption[]) => {
        const newParams = new URLSearchParams(search);
        newParams.delete(genreKey);
        selectedGenres.forEach(option => newParams.append(genreKey, option.value));

        navigate(`${pathname}?${newParams.toString()}`, { replace: true });
    };

    return (
        <>
            <Select
                isMulti
                options={genreOptions}
                value={selectedGenreOptions}
                onChange={handleGenreChange}
                closeMenuOnSelect={true}
                hideSelectedOptions={false}
                placeholder="ANY GENRE"
                styles={{
                    control: (base) => ({
                        ...base,
                        minWidth: 240,
                    }),
                    multiValue: (base) => ({
                        ...base,
                        backgroundColor: '#2684FF',
                        color: 'white',
                    }),
                    multiValueLabel: (base) => ({
                        ...base,
                        color: 'white',
                    }),
                    option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isSelected ? '#2684FF' : state.isFocused ? '#B2D4FF' : 'white',
                        color: state.isSelected ? 'white' : 'black',
                        cursor: 'pointer',
                    }),
                }}
            />
        </>
    );
};