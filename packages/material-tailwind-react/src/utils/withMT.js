/**
 * This is a helper function for merging the main configuration of @material-tailwind with the Tailwind CSS configuration
 */

const merge = require("deepmerge");
const colors = require("../theme/base/colors");
const typography = require("../theme/base/typography");
const shadows = require("../theme/base/shadows");
const breakpoints = require("../theme/base/breakpoints");

const materialTailwindConfig = {
  darkMode: "class",
  content: [
    __dirname + "/../components/**/*.{js,ts,jsx,tsx}",
    __dirname + "/../theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors,
    fontFamily: typography,
    boxShadow: shadows,
    screens: breakpoints,
  },
  plugins: [],
};

/**
 * Merge @material-tailwind and Tailwind CSS configurations
 * @param {object} tailwindConfig - Tailwind config object
 * @return {object} new config object
 */
function withMT(tailwindConfig) {
  const themeFont = materialTailwindConfig.theme.fontFamily;

  if (tailwindConfig.theme.fontFamily) {
    const { sans, serif, body } = tailwindConfig.theme.fontFamily;

    themeFont.sans = sans || themeFont.sans;
    themeFont.serif = serif || themeFont.serif;
    themeFont.body = body || themeFont.body;
  }

  return merge(materialTailwindConfig, { ...tailwindConfig });
}

module.exports = withMT;
