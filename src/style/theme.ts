export const color = {
  background: '#f2f2f2',
  main: '#fff',
  gray1: '#333333',
  gray2: '#4F4F4F',
  gray3: '#757575',
  gray4: '#A9A9A9',
  blue: '#2072e6',

  darkenBlue: '#155abc',
  darkenWhite: '#e5e5e5',
};

export const fontSize = {
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

export const borderRadius = '12px';

export const boxShadowUnder = '0px 10px 8px -12px rgba(0,0,0,0.2);';
