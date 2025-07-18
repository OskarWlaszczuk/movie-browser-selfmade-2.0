export const theme = {
    colors: {
        ebb: "#E5DFDF",
        abbey: "#545456",
        white: "#FFFFFF",
        black: "#18181B",
        waterloo: "#7E839A",
        mystic: "#E4E6F0",
        woodsmoke: "#18181B",
        whisper: "#F5F5FA",
        silver: "#C4C4C4",
        brightHeather: "#bac7d580",
        stormGray: "#74788B",
        pattensBlue: "#D6E4FF",
        scienceBlue: "#0044CC",
    },
    breakpoints: {
        mobileXS: "320px",
        mobileS: "400px",
        mobileM: "500px",
        mobileL: "535px",
        mobileXL: "600px",
        mobileXXL: "700px",
        tablesS: "768px",
        laptopXS: "880px",
        laptopS: "970px",
        tabletM: "1024px",
        tabletL: "1200px",
        laptop: "1480px"
    },
    fontSizes: {
        xs: "12px",
        s: "14px",
        m: "16px",
        l: "20px",
        xl: "24px",
        xxl: "32px",
        title: "36px",
    },
    fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
    },
} as const;

export const createTileTheme = (horizontalLayout?: boolean) => ({
    tileLayout: {
        horizontal: horizontalLayout,
    },
});