import { SectionHeader } from "../SectionHeader"
import { StyledErrorIcon } from "./styled";

interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
    <>
        <SectionHeader text="Ooops! Something went wrong... " setAsPageTitle />
        <p>{message}</p>
        <StyledErrorIcon />
    </>
);