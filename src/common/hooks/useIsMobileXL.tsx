import { useMediaQuery } from "react-responsive";
import { theme } from "../../core/theme";

export const useIsMobileXL = ()=>useMediaQuery({ query: `(max-width:${theme.breakpoints.mobileXL})` });