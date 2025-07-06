import { JSX } from "react";
import { TabCategory, TabsInfoContainer } from "./styled";
import { nanoid } from "@reduxjs/toolkit";

export interface TabConfig {
    category: string;
    view: JSX.Element;
}

interface InfoTabsProps {
    tabsConfig: TabConfig[];
    tabCategory: string;
    id: string;
}

export const InfoTabs = ({ tabsConfig, tabCategory, id }: InfoTabsProps) => {

    const switchTab = (category: string) => `/movie/${id}/${category}`;

    const tabCategories = tabsConfig.map(tab => tab.category);
    const activeTab = tabsConfig.find(tab => tab.category === tabCategory);

    return (
        <TabsInfoContainer>
            {
                tabCategories.map(category => (
                    <TabCategory
                        key={nanoid()}
                        isActive={category === activeTab?.category}
                        to={switchTab(category)}
                    >
                        {category}
                    </TabCategory>
                ))
            }
            <div>{activeTab?.view}</div>
        </TabsInfoContainer>
    );
};