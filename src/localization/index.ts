const ru = require('./ru')
const en = require('./en')

const langs = {
  ru,
  en,
}

const langChoice: keyof typeof langs = 'ru';

export function $l(phrase: string, ...args: string[]): string {
  if (args && args.length) {
    return langs[langChoice].default[phrase](...args);
  } else {
    return langs[langChoice].default[phrase];
  }
}
