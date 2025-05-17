import { routes } from "../../../../common/functions/routes"
import { Search } from "./Search";
import { NavItem, NavItemsList, StyledNavPanel } from "./styled"

export const NavigationPanel = () => {
    const navLinks = [
        { text: 'Movies', link: routes.movies() },
        { text: 'People', link: routes.people() },
    ];

    return (
        <StyledNavPanel>
            <header>Movie Browser</header>
            <NavItemsList>
                {
                    navLinks.map(({ text, link }) => (
                        <NavItem to={link}>{text}</NavItem>
                    ))
                }
            </NavItemsList>
            <Search />
        </StyledNavPanel>
    )
}