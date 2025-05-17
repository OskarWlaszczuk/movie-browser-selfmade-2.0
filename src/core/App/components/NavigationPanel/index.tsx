import { routes } from "../../../../common/functions/routes"
import { Search } from "./Search";
import { AppTitle, NavItem, NavItemsList, StyledNavPanel, StyledAppLogo } from "./styled"

export const NavigationPanel = () => {
    const navItems = [
        { label: 'Movies', path: routes.movies() },
        { label: 'People', path: routes.people() },
    ];

    return (
        <StyledNavPanel>
            <header>
                <AppTitle to={routes.homepage()}>
                    <StyledAppLogo />
                    <> Movie Browser</>
                </AppTitle>
            </header>
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