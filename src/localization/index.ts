const ru = require('./ru')
const en = require('./en')

const langs = {
  ru,
  en,
}

const langChoice: keyof typeof langs = 'ru';

export default function(phrase: string, ...args: string[]): string {
  if (args && args.length) {
    return langs[langChoice][phrase](...args);
  } else {
    return langs[langChoice][phrase];
  }
}
