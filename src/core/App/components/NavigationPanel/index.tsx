import { ROUTES } from "../../../../common/functions/routes"
import { StyledNavPanel } from "./styled"

export const NavigationPanel = () => {

    const navLinks = [
        { text: 'Movies', link: ROUTES.list.movies },
        { text: 'People', link: ROUTES.list.people },
    ];

    return (
        <StyledNavPanel>
            <header>Movie Browser</header>

        </StyledNavPanel>
    )
}