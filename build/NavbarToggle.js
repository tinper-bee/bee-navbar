'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tinperBeeCore = require('tinper-bee-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  onClick: _react.PropTypes.func,
  /**
   * The toggle content, if left empty it will render the default toggle (seen above).
   */
  children: _react.PropTypes.node
};

var contextTypes = {
  u_navbar: _react.PropTypes.shape({
    expanded: _react.PropTypes.bool,
    onToggle: _react.PropTypes.func
  })
};

var defaultProps = {
  clsPrefix: 'u-navbar-toggle'
};

var NavbarToggle = function (_React$Component) {
  _inherits(NavbarToggle, _React$Component);

  function NavbarToggle() {
    _classCallCheck(this, NavbarToggle);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  NavbarToggle.prototype.handleClick = function handleClick() {
    var _context$u_navbar = this.context.u_navbar,
        expanded = _context$u_navbar.expanded,
        onToggle = _context$u_navbar.onToggle;


    if (onToggle) {
      onToggle(!expanded);
    }
  };

  NavbarToggle.prototype.render = function render() {
    var _props = this.props,
        onClick = _props.onClick,
        className = _props.className,
        children = _props.children,
        clsPrefix = _props.clsPrefix,
        props = _objectWithoutProperties(_props, ['onClick', 'className', 'children', 'clsPrefix']);
    //const navbarProps = this.context.u_navbar || { bsClass: 'navbar' };
    //console.log(navbarProps.onToggle, navbarProps.expanded);

    var buttonProps = _extends({
      type: 'button'
    }, props, {
      onClick: (0, _tinperBeeCore.createChainedFunction)(onClick, this.handleClick.bind(this)),
      className: (0, _classnames2["default"])(className, clsPrefix, !this.context.u_navbar.expanded && 'collapsed')
    });

    if (children) {
      return _react2["default"].createElement(
        'button',
        buttonProps,
        children
      );
    }

    return _react2["default"].createElement(
      'button',
      buttonProps,
      _react2["default"].createElement(
        'span',
        { className: 'sr-only' },
        'Toggle navigation'
      ),
      _react2["default"].createElement('span', { className: 'icon-bar' }),
      _react2["default"].createElement('span', { className: 'icon-bar' }),
      _react2["default"].createElement('span', { className: 'icon-bar' })
    );
  };

  return NavbarToggle;
}(_react2["default"].Component);

NavbarToggle.propTypes = propTypes;
NavbarToggle.defaultProps = defaultProps;
NavbarToggle.contextTypes = contextTypes;

exports["default"] = NavbarToggle;
module.exports = exports['default'];