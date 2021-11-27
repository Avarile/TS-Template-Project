export const globalStates = {
  state: {
    number: 0,
  },
  // Mapping to the State
  maps: {
    isEven: ["number", (number) => number % 2 === 0],
  },
  // States Logics
  actions: {
    inc: (number) => ({ number: number + 1 }),
    dec: (number) => ({ number: number - 1 }),
  },
}
