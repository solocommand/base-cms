import { j as _objectWithoutProperties, f as _extends } from './chunk-cc870ac4.js';
import React from 'react';
import { sectionPath } from './utils.js';
import PropTypes from 'prop-types';
import { a as LinkElement } from './chunk-e963a041.js';
import classNames from 'classnames';

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
      rest = _objectWithoutProperties(_ref, ["alias", "className", "id", "routePrefix"]);

  return React.createElement(LinkElement, _extends({
    to: sectionPath(alias),
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

export { WebsiteSectionLink as a };
