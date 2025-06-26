import { IconWrapper } from "../IconWrapper"
import { SectionHeader } from "../SectionHeader"
import { ReactComponent as ErrorIcon } from "./ErrorIcon.svg"

interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <>
            <SectionHeader text="Ooops! Something went wrong... " setAsPageTitle />
            <p>{message}</p>
            <IconWrapper
                iconAsComponent={ErrorIcon}
            />
        </>
    );
};