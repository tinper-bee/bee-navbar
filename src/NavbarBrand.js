import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const defaultProps = {
   clsPrefix : "u-navbar-brand"
}

class NavbarBrand extends React.Component {
  render() {
    const { className, children,clsPrefix, ...props } = this.props;

    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: classnames(
          children.props.className, className, clsPrefix
        )
      });
    }

    return (
      <span {...props} className={classnames(className, clsPrefix)}>
        {children}
      </span>
    );
  }
}

NavbarBrand.defaultProps = defaultProps;

export default NavbarBrand;
