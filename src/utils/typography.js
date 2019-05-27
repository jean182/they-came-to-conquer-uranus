import Typography from "typography"
import stardustTheme from "typography-theme-stardust"

stardustTheme.overrideThemeStyles = () => {
  return {
    a: {
      color: "var(--linkColor)",
      boxShadow: `none`,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    p: {
      color: "var(--primaryText)",
    },
  }
}

const typography = new Typography(stardustTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
