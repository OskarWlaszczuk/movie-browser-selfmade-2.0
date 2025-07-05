import { listRoutes } from "../../../functions/routes";
import { IconWrapper } from "../../IconWrapper";
import { SectionHeader } from "../../SectionHeader"
import { 
    ErrorMessageWrapper, 
    HomepageLink, 
    Message, 
    StyledErrorIcon 
} from "./styled";

interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
    <ErrorMessageWrapper>
        <IconWrapper>
            <StyledErrorIcon />
        </IconWrapper>
        <SectionHeader text="Ooops! Something went wrong... " setAsPageTitle={false} />
        <Message>{message}</Message>
        <HomepageLink to={listRoutes.movies}>
            Back to home page
        </HomepageLink>
    </ErrorMessageWrapper>
);