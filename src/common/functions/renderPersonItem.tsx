import { Person } from "../aliases/interfaces/Person";
import { Tile } from "../components/Tile";

export const renderPersonItem = ({
    id,
    profile_path,
    biography,
    birthday,
    name,
    place_of_birth,
}: Person) => (
    <Tile
        key={id}
        id={id}
        picture={profile_path}
        title={name}
        personDetails={{
            biography,
            birthday,
            placeOfBirth: place_of_birth,
        }}
    />
);