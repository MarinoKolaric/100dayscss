export const color = {
  background: '#f2f2f2',
  main: '#fff',
  gray1: '#333333',
  gray2: '#4F4F4F',
  gray3: '#757575',
  gray4: '#A9A9A9',

  day2Background: '#272C34',
  day2Sky: '#7DDFFC',
  day2Sun: '#FFEF00',
  day2SunRed: '#F57209',
  day2PyramidLeft: '#F4F4F4',
  day2PyramidRight: '#DDDADA',
  day2Ground: '#F0DE75',

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

  day6Background: '#264057',
  day6Blue: '#5F98CD',
  day6BlueDark: '#385269',
  day6Text: '#666666',
  day6TextDark: '#93B2CD',
  day6Line: '#EBEBEB',

  day7Background: '#1A2238',
  day7Text: '#394568',
  day7HillBg: '#26314F',
  day7HillFg: '#303C5D',
  day7Moon: '#F6EDBD',
  day7MoonCrater: '#ECE1A8',
  day7Drop: '#7FC1F9',

  day8Background: '#E9EDEF',
  day8Text: '#5E5E5E',
  day8Blue: '#7DD0ED',
  day8BlueDark: '#27A6D2',

  day9Background: '#514878',
  day9LabelBackground: '#39315a',
  day9BulbBackground: '#4a426b',
  day9Bulb: '#635a84',

  day10Background: '#28404E',
  day10Background2: '#1c2e38',
  day10Circle: '#1B2A33',
  day10Green: '#27E1AE',
  day10Blue: '#5CE1EC',

  day11Background: '#7b9280',
  day11Border: '#010102',
  day11Face: '#73989e',
  day11FaceLighter: '#CAE8ED',
  day11TearDrop: '#0a7ed7',
  day11TearDropLighter: '#6eb0d9',
};

export const fontSize = {
  xxs: '11rem',
  xs: '14rem',
  sm: '16rem',
  md: '18rem',
  lg: '24rem',
  xl: '32rem',
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
export const boxShadowSmall = 'box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.1);';
