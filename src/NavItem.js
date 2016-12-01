import classNames from 'classnames';
import React, {PropTypes} from 'react';

import { createChainedFunction } from 'tinper-bee-core';

const propTypes = {
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  role: React.PropTypes.string,
  href: React.PropTypes.string,
  skey: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.string,
      React.PropTypes.number
  ]),
  onClick: React.PropTypes.func,
  eventKey: React.PropTypes.any,
  children: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.string,
      React.PropTypes.node
  ]),
};

const defaultProps = {
  active: false,
  disabled: false,
};

const contextTypes = {
    u_nav: PropTypes.object
};


class NavItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  
  handleClick(e) {
    const { onSelect,selectedkey } = this.context.u_nav;

    if (this.props.disabled) {
      return;
    }

    if (onSelect) {
      onSelect(this.props.skey);
    }
  }

  
  render() {
    const { active, disabled, skey, className, style,children, ...props } =
      this.props;
    const { selectedkey } = this.context.u_nav;

    let activeItem = (this.props.skey === selectedkey);

    let classes = {'active':activeItem,'disabled':disabled};

    let dom = props.href? (
      <li
        role="presentation"
        skey= {skey}
        className={classNames(className, classes)}
        style={style}
        onClick = {this.handleClick}
      >
        <a
          {...props}
          disabled={disabled}
        >{children}</a>
        
      </li>):(<li
        role="presentation"
        className={classNames(className,classes)}
        style={style}
        key= {skey}
         onClick = {this.handleClick}
      >
        {children}
      </li>)
    return (
      dom
    );
  }
}


NavItem.contextTypes = contextTypes;
NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
