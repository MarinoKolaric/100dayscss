export const color = {
  background: '#f2f2f2',
  main: '#fff',
  gray1: '#333333',
  gray2: '#4F4F4F',
  gray3: '#757575',
  gray4: '#A9A9A9',

  day3Background: '#E56262',

  day5Background: '#ca7c4e',
  day5Color: '#786450',
  day5StatsBackground: '#f5e8df',
  day5StatsBackgroundHover: '#E1CFC2',
};

export const fontSize = {
  xxs: '11rem',
  xs: '14rem',
  sm: '16rem',
  md: '18rem',
  lg: '24rem',
};

export const breakpoints = {
  mobile: 320,
  mobileLarge: 540,
  tablet: 768,
  laptop: 1200,
  desktop: 1440,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: String | TemplateStringsArray) =>
    `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};

