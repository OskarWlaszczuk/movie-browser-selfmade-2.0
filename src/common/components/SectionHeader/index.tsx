import { MainPageHeader, StyledSectionHeader } from "./styled";

interface SectionHeaderProps {
    text: string;
    isMainHeader: boolean;
}

export const SectionHeader = ({ text, isMainHeader }: SectionHeaderProps) => {
    const HeaderComponent = isMainHeader ? MainPageHeader : StyledSectionHeader;

    return (
        <HeaderComponent>
            {text}
        </HeaderComponent>
    );
};