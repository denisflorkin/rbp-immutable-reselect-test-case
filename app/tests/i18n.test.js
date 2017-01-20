
// import expect from 'expect';

// import a locale value : 'en' // the formatTranslationMessages fn check for a DEFAULT_LOCALE
import { DEFAULT_LOCALE } from '../containers/App/constants'; // eslint-disable-line

// import the messages
import enTranslationMessages from '../translations/en.json';


// import the thing to test
import { formatTranslationMessages } from '../i18n'

describe('i18n', () => {
  it('given a valid locale and the messages \n it should return a JS object with the translation', () => {
    const locale = 'en'
    const messages = enTranslationMessages

    expect(formatTranslationMessages(locale, messages))
      .toEqual(enTranslationMessages);
  });

  it('should handle invalid/unexisting locale by checking for a DEFAULT_LOCALE', () => {
    const locale = 'fr'
    const messages = enTranslationMessages

    expect(formatTranslationMessages(locale, messages))
      .toEqual(enTranslationMessages);
  });

  it('should handle undefined locale by checking for a DEFAULT_LOCALE', () => {
    const messages = enTranslationMessages

    expect(formatTranslationMessages(undefined, messages))
      .toEqual(enTranslationMessages);
  });

  // it('should throw if undefined messages passed', () => {
  //   expect(formatTranslationMessages(undefined, undefined))
  //     .toThrow(someError);
  // });
});
