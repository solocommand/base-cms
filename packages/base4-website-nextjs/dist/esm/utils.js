import { a as cleanPath } from './chunk-5198f64a.js';
export { a as cleanPath } from './chunk-5198f64a.js';
import { a as displayName, b as httpErrors } from './chunk-0fb8a91e.js';
export { a as componentDisplayName, b as httpErrors } from './chunk-0fb8a91e.js';

var createMarkup = (function (html) {
  return {
    __html: html
  };
});

/**
 * Determines if an alias should go to the index/home page.
 *
 * @param {string} alias
 */

var shouldGoToIndex = function shouldGoToIndex(alias) {
  var path = cleanPath(alias);
  if (path === 'home' || path === '') return true;
  return false;
};
/**
 * Generates the website section route name (as used by `next-routes`).
 *
 * By default, if the section alias were `tactical/firearms`, this method
 * would generate `/section/tactical/firearms`.
 *
 * The `routePrefix` (the default is 'section') can also be overriden by passing a different value.
 * Keep in mind, if this is done, the root routes.js file will need modification.
 *
 * @param {string} alias The website section alias
 * @param {string} [routePrefix=section] The section base path.
 */


var sectionPath = (function (alias) {
  var routePrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'section';
  if (shouldGoToIndex(alias)) return '/';
  var path = cleanPath(alias);
  if (!routePrefix) return "/".concat(path);
  return "/".concat(cleanPath(routePrefix), "/").concat(path);
});

export { createMarkup, sectionPath };
