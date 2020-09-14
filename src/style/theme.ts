export const color = {
  background: '#f2f2f2',
  main: '#fff',
  gray1: '#333333',
  gray2: '#4F4F4F',
  gray3: '#757575',
  gray4: '#A9A9A9',

  day3Background: '#E56262',

  day4Background: '#42A7A1',
  day4Yellow: '#F1BA64',
  day4Red: '#FA7373',
  day4Blue: '#7BA2FF',
  day4HorizontalLine: '#F2F2F2',

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

export const boxShadow = 'box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);';
