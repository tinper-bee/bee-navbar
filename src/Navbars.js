// TODO: Remove this pragma once we upgrade eslint-config-airbnb.
/* eslint-disable react/no-multi-comp */

import classnames from 'classnames';
import React, { PropTypes } from 'react';
import { elementType } from 'tinper-bee-core';

import {Con} from 'bee-layout';
import NavbarBrand from './NavbarBrand';
import NavbarCollapse from './NavbarCollapse';
import NavbarHeader from './NavbarHeader';
import NavbarToggle from './NavbarToggle';
import Nav from './Nav';
import NavItem from './NavItem';
import Menu from './VerticalMenu';
//import NavDropdown from './NavDropdown';

const propTypes = {
  /**
   * Create a fixed navbar along the top of the screen, that scrolls with the
   * page
   */
  fixedTop: React.PropTypes.bool,
  /**
   * Create a fixed navbar along the bottom of the screen, that scrolls with
   * the page
   */
  fixedBottom: React.PropTypes.bool,
  /**
   * Create a full-width navbar that scrolls away with the page
   */
  staticTop: React.PropTypes.bool,
  /**
   * An alternative dark visual style for the Navbar
   */
  inverse: React.PropTypes.bool,
  /**
   * Allow the Navbar to fluidly adjust to the page or container width, instead
   * of at the predefined screen breakpoints
   */
  fluid: React.PropTypes.bool,

  /**
   * Set a custom element for this component.
   */
  componentClass: elementType,
  /**
   * A callback fired when the `<Navbar>` body collapses or expands. Fired when
   * a `<Navbar.Toggle>` is clicked and called with the new `navExpanded`
   * boolean value.
   *
   * @controllable navExpanded
   */
  onToggle: React.PropTypes.func,

  /**
   * Explicitly set the visiblity of the navbar body
   *
   * @controllable onToggle
   */
  expanded: React.PropTypes.bool,

  role: React.PropTypes.string,
};

const defaultProps = {
  componentClass: 'nav',
  fixedTop: false,
  fixedBottom: false,
  staticTop: false,
  inverse: false,
  fluid: false,
  clsPrefix: 'navbar'
};

const childContextTypes = {
  u_navbar: PropTypes.shape({
    expanded: PropTypes.bool,
    onToggle: PropTypes.func.isRequired,
  })
};

class Navbar extends React.Component {
  constructor(props, context) {
    super(props, context);

    //this.handleToggle = this.handleToggle.bind(this);
  }

  getChildContext() {
    const { expanded, onToggle } = this.props;

    return {
      u_navbar: {
        expanded,
        //onToggle: this.handleToggle,
        onToggle
      },
    };
  }

  // handleToggle() {
  //   const { onToggle, expanded } = this.props;

  //   onToggle(!expanded);
  //   console.log(expanded);
  // }

  render() {
    const {
      componentClass: Component,
      fixedTop,
      fixedBottom,
      staticTop,
      inverse,
      fluid,
      className,
      children,
      clsPrefix,
      ...others
    } = this.props;

    // const [bsProps, elementProps] = splitBsPropsAndOmit(props, [
    //   'expanded', 'onToggle',
    // ]);

    let classes = {};

    if (inverse) {
        classes[`${clsPrefix}-inverse`] = true;
    }else {
        classes[`${clsPrefix}-default`] = true;
    }
    if(fixedTop) {
        classes[`${clsPrefix}-fixed-top`] = true;
    }
    if(fixedBottom) {
        classes[`${clsPrefix}-fixed-bottom`] = true;
    }
    if(staticTop) {
        classes[`${clsPrefix}-static-top`] = true;
    }

    let classNames = classnames(clsPrefix,classes);
    return (
      <Component
        {...others}
        className={classnames(className, classNames)}
      >
        <Con fluid={fluid}>
          {children}
        </Con>
      </Component>
    );
  }
}


Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
Navbar.childContextTypes = childContextTypes;

//const Navbar = uncontrollable(Navbar, { expanded: 'onToggle' });

function createSimpleWrapper(tag, suffix, displayName) {
  const Wrapper = (
    { componentClass: Component, className, pullRight, pullLeft, ...props },
    { u_navbar: navbarProps = { preClass: 'navbar' } }
  ) => (
    <Component
      {...props}
      className={classnames(
        className,
        //prefix(navbarProps, suffix),
        `navbar-${suffix}`,
        pullRight &&  'navbar-right',
        pullLeft && 'navbar-left',
      )}
    />
  );

  Wrapper.displayName = displayName;

  Wrapper.propTypes = {
    componentClass: elementType,
    pullRight: React.PropTypes.bool,
    pullLeft: React.PropTypes.bool,
  };

  Wrapper.defaultProps = {
    componentClass: tag,
    pullRight: false,
    pullLeft: false,
  };

  Wrapper.contextTypes = {
    u_navbar: PropTypes.shape({
    }),
  };

  return Wrapper;
}

Navbar.Brand = NavbarBrand;
Navbar.Header = NavbarHeader;
Navbar.Toggle = NavbarToggle;
Navbar.Collapse = NavbarCollapse;
Navbar.Nav = Nav;
//Navbar.NavDropdown = NavDropdown;
Navbar.NavItem = NavItem;
Navbar.Menu = Menu;

Navbar.Form = createSimpleWrapper('div', 'form', 'NavbarForm');
Navbar.Text = createSimpleWrapper('p', 'text', 'NavbarText');
Navbar.Link = createSimpleWrapper('a', 'link', 'NavbarLink');



export default Navbar;
