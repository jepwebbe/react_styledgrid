export const theme = {
  colors: {
    aFineColor: "blue",
  },
  breakpoints: {
    xs: "320px",
    s: "480px",
    m: "768px",
    l: "992px",
    xl: "1200px",
  },
  mobile: {
    rows: "1fr 1fr auto 2fr 2fr 2fr 1fr",
    columns: "1fr",
    area: `
            "header"
            "menu"
            "hero"
            "main"
            "banner"
            "extra"
            "image"
            `,
  },
  mobileTwo: {
    rows: "1fr 1fr auto 2fr 2fr 2fr 1fr",
    columns: "1fr",
    area: `
            "header"
            "menu"
            "hero"
            "main"
            "image"            
            "extra"
            "banner"
            `,
  },
  tablet: {
    rows: "1fr 4fr 4fr 1fr 1fr",
    columns: "repeat(4, 1fr)",
    area: `
            "header header header header"
            "hero hero hero hero"
            "menu main main main"
            "menu banner banner banner"
            "menu extra extra image"
            `,
  },
  tabletTwo: {
    rows: "1fr 4fr 4fr 1fr 1fr",
    columns: "repeat(4, 1fr)",
    area: `
            "header header header header"
            "hero hero hero hero"
            "menu main main main"
            "menu extra extra image"
            "menu banner banner banner"
            `,
  },
  desktop: {
    rows: "1fr 6fr 4fr 1fr",
    columns: "repeat(4, 1fr)",
    area: `
            "header menu menu menu"
            "hero hero hero hero"
            "main main . image"
            "banner banner banner banner"
            `,
  },
  desktopTwo: {
    rows: "1fr 6fr 4fr 1fr",
    columns: "repeat(4, 1fr)",
    area: `
            "header header header menu"
            "hero hero hero hero"
            "main main main image"
            "banner . banner banner"
            `,
  },
};
