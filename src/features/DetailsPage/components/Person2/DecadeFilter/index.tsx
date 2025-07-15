import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SelectOption } from "../../../../../common/aliases/interfaces/SelectOption";
import { StyledWrapper } from "../GenreFilter/styled";
import Select from "react-select";

const decades = [
    "2020s", "2010s", "2000s", "1990s", "1980s", "1970s",
    "1960s", "1950s", "1940s", "1930s", "1920s", "1910s",
    "1900s", "1890s", "1880s", "1870s"
];

export const DecadeFilter = () => {
    const navigate = useNavigate();
    const { pathname, search } = useLocation();

    const searchParams = new URLSearchParams(search);

    const decadeKey = "decade";
    const decadeOptions: SelectOption[] = [
        { label: "ANY DECADE", value: "" },
        ...decades.map(decade => ({ value: decade, label: decade }))
    ];
    const selectedDecade = searchParams.get(decadeKey);


    const handleDecadeSwitch = (selectedDecade: SelectOption) => {
        selectedDecade.value.trim() ?
            searchParams.set(decadeKey, selectedDecade.value) :
            searchParams.delete(decadeKey)

        navigate(`${pathname}?${searchParams.toString()}`);
    };
    console.log(decadeOptions.find(({ value }) => value === selectedDecade))
    return (
        <StyledWrapper>
            <Select
                classNamePrefix="react-select"
                options={decadeOptions}
                value={decadeOptions.find(({ value }) => value === selectedDecade)}
                onChange={handleDecadeSwitch}
                closeMenuOnSelect={true}
                hideSelectedOptions={false}
                placeholder={"ANY DECADE"}
            />
        </StyledWrapper>
    );
};