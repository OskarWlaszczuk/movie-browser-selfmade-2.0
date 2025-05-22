import { MainPageHeader, StyledSectionHeader } from "./styled";

interface SectionHeaderProps {
    text: string;
    setAsPageTitle: boolean;
}

export const SectionHeader = ({ text, setAsPageTitle }: SectionHeaderProps) => {
    const HeaderComponent = setAsPageTitle ? MainPageHeader : StyledSectionHeader;

    return (
        <HeaderComponent>
            {text}
        </HeaderComponent>
    );
};