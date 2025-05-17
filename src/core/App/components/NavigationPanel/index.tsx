import { routes } from "../../../../common/functions/routes"
import { Search } from "./Search";
import { NavItem, NavItemsList, StyledNavPanel } from "./styled"

export const NavigationPanel = () => {
    const navItems = [
        { label: 'Movies', path: routes.movies() },
        { label: 'People', path: routes.people() },
    ];

    return (
        <StyledNavPanel>
            <header>Movie Browser</header>
            <NavItemsList>
                {
                    navItems.map(({ label, path }) => (
                        <NavItem to={path}>{label}</NavItem>
                    ))
                }
            </NavItemsList>
            <Search />
        </StyledNavPanel>
    )
}