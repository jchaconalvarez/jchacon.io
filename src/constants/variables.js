export const VARIABLES = {
  measure: 60,
  scale: {
    ratio: 1.61803398875
  },
  colors: {
    primary: 'hsl(170, 90%, 50%, 1)',
    primaryLight: 'hsl(170, 100%, 60%, 1)',
    primaryDark: 'hsl(170, 100%, 40%, 1)',
    secondary: 'hsl(57, 100%, 53%, 1)',
    text: 'hsl(300, 2%, 20%, 1)'
  }
}

for (let i = -5; i < 5; i++) {
  VARIABLES.scale[`scale${i}`] = Math.pow(VARIABLES.scale.ratio, i)
}
