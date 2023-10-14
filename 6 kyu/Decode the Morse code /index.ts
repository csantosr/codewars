import { MORSE_CODE } from './preloaded';

export function decodeMorse(morseCode: string): string {
  return morseCode.trim().split('   ')
    .map(word => word.split(' ').map(letter => MORSE_CODE[letter]).join(''))
    .join(' ')
}