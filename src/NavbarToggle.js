import classNames from 'classnames';
import React, { PropTypes } from 'react';

import { createChainedFunction } from 'tinper-bee-core';

const propTypes = {
  onClick: PropTypes.func,
  /**
   * The toggle content, if left empty it will render the default toggle (seen above).
   */
  children: PropTypes.node,
};

const contextTypes = {
  u_navbar: PropTypes.shape({
    expanded: PropTypes.bool,
    onToggle: PropTypes.func.isRequired,
  }),
};

const defaultProps = {
    clsPrefix: 'navbar-toggle'
}

class NavbarToggle extends React.Component {

    handleClick() {
        const {expanded,onToggle } = this.context.u_navbar;

        if (onToggle) {
          onToggle(!expanded);
        }
    }
  render() {
    const { onClick, className, children,clsPrefix, ...props } = this.props;
    //const navbarProps = this.context.u_navbar || { bsClass: 'navbar' };
    //console.log(navbarProps.onToggle, navbarProps.expanded);

    const buttonProps = {
      type: 'button',
      ...props,
      onClick: createChainedFunction(onClick, this.handleClick.bind(this)),
      className: classNames(
        className,
        clsPrefix,
        !this.context.u_navbar.expanded && 'collapsed'
      )
    };

    if (children) {
      return (
        <button {...buttonProps}>
          {children}
        </button>
      );
    }

    return (
      <button {...buttonProps}>
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
    );
  }
}

NavbarToggle.propTypes = propTypes;
NavbarToggle.defaultProps = defaultProps;
NavbarToggle.contextTypes = contextTypes;

export default NavbarToggle;
