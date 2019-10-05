export const VARIABLES = {
  measure: 60,
  scale: {
    ratio: 1.61803398875
  },
  colors: {
    primary: 'hsl(168, 90%, 61%, 1)',
    secondary: 'hsl(57, 100%, 53%, 1)'
  }
}

for (let i = -5; i < 5; i++) {
  VARIABLES.scale[`scale${i}`] = Math.pow(VARIABLES.scale.ratio, i)
}
