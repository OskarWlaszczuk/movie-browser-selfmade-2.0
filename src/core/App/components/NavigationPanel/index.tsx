import { routes } from "../../../../common/functions/routes"
import { Search } from "./Search";
import { AppTitle, NavItem, NavItemsList, StyledNavPanel } from "./styled"

export const NavigationPanel = () => {
    const navItems = [
        { label: 'Movies', path: routes.movies() },
        { label: 'People', path: routes.people() },
    ];

    return (
        <StyledNavPanel>
            <AppTitle>Movie Browser</AppTitle>
            <NavItemsList>
                {
                    navItems.map(({ label, path }, index) => (
                        <NavItem key={index} to={path}>{label}</NavItem>
                    ))
                }
            </NavItemsList>
            <Search />
        </StyledNavPanel>
    )
}