import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    };

    *, ::after, ::before {
        box-sizing: inherit;
    };

    body {
        margin: 0;
    };

    main {
         font-family: "Inter", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        background-color: ${({ theme }) => theme.colors.whisper};
    };
`;