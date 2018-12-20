'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./chunk-15d55d73.js');
var React = require('react');
var React__default = _interopDefault(React);
var utils = require('./utils.js');
var PropTypes = _interopDefault(require('prop-types'));
var __chunk_6 = require('./chunk-91365231.js');
var classNames = _interopDefault(require('classnames'));

var _jsxFileName = "/base-cms/packages/nextjs-web/src/components/website-section/Link.jsx";
var propTypes = {
  // The website section alias.
  alias: PropTypes.string.isRequired,
  // Whether to render the `value` prop as HTML.
  asHTML: PropTypes.bool,
  // A child function to custom render the `value` prop.
  children: PropTypes.func,
  className: PropTypes.string,
  // Whether the entire component should collapse on an empty value.
  collapsible: PropTypes.bool,
  // The section id.
  id: PropTypes.number.isRequired,
  // Optional parameters for named routes.
  params: PropTypes.object,
  // eslint-disable-line react/forbid-prop-types
  // The inner value to render by default.
  value: PropTypes.node
};
var defaultProps = {
  asHTML: false,
  children: undefined,
  className: null,
  collapsible: true,
  params: undefined,
  value: null
}; // @todo Do not make this clickable if the canonicalPath matches the route.

var WebsiteSectionLink = function WebsiteSectionLink(_ref) {
  var alias = _ref.alias,
      className = _ref.className,
      id = _ref.id,
      routePrefix = _ref.routePrefix,
      rest = __chunk_1._objectWithoutProperties(_ref, ["alias", "className", "id", "routePrefix"]);

  return React__default.createElement(__chunk_6.LinkElement, __chunk_1._extends({
    to: utils.sectionPath(alias),
    className: classNames('website-section__link', "website-section__link--".concat(id), className)
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }));
};

WebsiteSectionLink.displayName = 'WebsiteSection/Link';
WebsiteSectionLink.propTypes = propTypes;
WebsiteSectionLink.defaultProps = defaultProps;

exports.Link = WebsiteSectionLink;
