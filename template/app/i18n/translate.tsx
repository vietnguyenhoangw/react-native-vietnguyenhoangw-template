import i18n from 'react-native-i18n';

/**
 * Translates text.
 *
 * @param key The i18n key.
 */
export function translate(key: any, options?: i18n.TranslateOptions) {
  return key ? i18n.t(key, options) : null;
}
