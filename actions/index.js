export const INPUT_NUMBER = 'INPUT_NUMBER';
export const inputNumber = num => ({
  type: INPUT_NUMBER,
  num
})

export const DISPLAY_MESSAGE = 'DISPLAY_MESSAGE';
export const displayMessage = boolean => ({
  type: DISPLAY_MESSAGE,
  boolean
})