import { nanoid } from "@reduxjs/toolkit";
import { routes } from "../../../../common/functions/routes"
import { Search } from "./Search";
import {
    AppTitle,
    NavItem,
    NavItemsList,
    StyledNavPanel,
    NavPanelInner,
    StyledAppLogo
} from "./styled"

export const NavigationPanel = () => {
    const navItems = [
        { label: 'Movies', path: routes.movies() },
        { label: 'People', path: routes.people() },
    ];

    return (
        <StyledNavPanel>
            <NavPanelInner>
                <header>
                    <AppTitle to={routes.homepage()}>
                        <StyledAppLogo />
                        <> Movie Browser</>
                    </AppTitle>
                </header>
                <NavItemsList>
                    {
                        navItems.map(({ label, path }) => (
                            <NavItem key={nanoid()} to={path}>{label}</NavItem>
                        ))
                    }
                </NavItemsList>
            </NavPanelInner>
            <Search />
        </StyledNavPanel>
    );
};