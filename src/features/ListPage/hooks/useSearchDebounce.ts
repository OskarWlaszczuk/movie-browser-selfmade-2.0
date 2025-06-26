import { useEffect, useState } from "react";
import { URLQueryParams } from "../../../common/aliases/interfaces/URLSearchParams";

export const useSearchDebounce = (search: URLQueryParams["search"], delay: number) => {
    const [debouncedSearchValue, setDebouncedSearchValue] = useState(search);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedSearchValue(search), delay);
        return () => clearTimeout(handler);
    }, [search, delay]);

    return debouncedSearchValue;
};