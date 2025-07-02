import { nanoid } from "@reduxjs/toolkit";
import { listRoutes } from "../../../../common/functions/routes"
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
        { label: 'Movies', path: listRoutes.movies },
        { label: 'People', path: listRoutes.people },
    ];

    return (
        <StyledNavPanel>
            <NavPanelInner>
                <header>
                    <AppTitle to={listRoutes.movies}>
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