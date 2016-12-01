import classNames from 'classnames';
import React from 'react';

import { Dropdown } from 'bee-dropdown';
//import splitComponentProps from './utils/splitComponentProps';
//import ValidComponentChildren from './utils/ValidComponentChildren';

const propTypes = {
  ...Dropdown.propTypes,

  // Toggle props.
  title: React.PropTypes.node.isRequired,
  noCaret: React.PropTypes.bool,
  active: React.PropTypes.bool,

  // Override generated docs from <Dropdown>.
  /**
   * @private
   */
  children: React.PropTypes.node,
};

class NavDropdown extends React.Component {
  
  
  render() {
    const {
      children,
      ...props
    } = this.props;

    // Unlike for the other dropdowns, styling needs to go to the `<Dropdown>`
    // rather than the `<Dropdown.Toggle>`.

    return (
      <li>
        <Dropdown
          {...props}
        >
          React.Component.map(children, child => (
            <Dropdown.Item child.props>
                {child.children}
            </Dropdown.Item>
          ))}
        </Dropdown>
      </li>
    );
  }
}

NavDropdown.propTypes = propTypes;

export default NavDropdown;
