import  Navbar from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormControl from 'bee-form-control';

const Menu = Navbar.Menu;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Collapse = Navbar.Collapse;
const Toggle = Navbar.Toggle;
const Nav = Navbar.Nav;

class Demo1 extends Component {
	constructor(props, context) {
	    super(props, context);
	    this.state = {
	    	expanded : false
	    }
	}
	onToggle(value) {
		this.setState({expanded:value});
	}
	render(){
		return( 
			<div>
				<Navbar inverse expanded={this.state.expanded} onToggle={this.onToggle.bind(this)}>
				    <Header>
					    <Brand>
					        	<a href="#">React-Bootstrap</a>
					    </Brand>
					    <Toggle />
				    </Header>

				    <Collapse>
					    <Nav>
						    <NavItem eventKey={1} href="#">Link</NavItem>
						    <NavItem eventKey={2} href="#">Link</NavItem>
						    
					    </Nav>
					    <Nav pullLeft>
						    <NavItem eventKey={1} href="#">Link</NavItem>
						    <NavItem eventKey={2} href="#">Link</NavItem>
						    
					    </Nav>
					    <Navbar.Form pullRight>
					          <FormControl type="text" placeholder="Search" />
					    </Navbar.Form>
				    </Collapse>
				</Navbar>

			</div>
		)
	}
}


class Demo4 extends Component {
	constructor(props, context) {
	    super(props, context);
	    this.state = {
	    	current : 'mail'
	    }
	}
	handleClick(e) {
	    this.setState({
	      current: e.key,
	    });
	  }
	render(){
		return( 
			<Menu onClick={this.handleClick.bind(this)}
		        selectedKeys={[this.state.current]}
		        mode="horizontal"
		      >	
		        <Menu.Item key="mail">
		          Navigation One
		        </Menu.Item>
		        <Menu.Item key="app" disabled>
		          Navigation Two
		        </Menu.Item>
		        <SubMenu title={<span>Navigation Three - Submenu</span>}>
		          <MenuItemGroup title="Item 1">
		            <Menu.Item key="setting:1">Option 1</Menu.Item>
		            <Menu.Item key="setting:2">Option 2</Menu.Item>
		          </MenuItemGroup>
		          <MenuItemGroup title="Item 2">
		            <Menu.Item key="setting:3">Option 3</Menu.Item>
		            <Menu.Item key="setting:4">Option 4</Menu.Item>
		          </MenuItemGroup>
		        </SubMenu>
		        <Menu.Item key="alipay">
		          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
		        </Menu.Item>
		      </Menu>
		)
	}
}
class Demo5 extends Component {
	constructor(props, context) {
	    super(props, context);
	    this.state = {
	    	current : 1
	    }
	}
	handleClick(e) {
	    console.log('click ', e);
	    this.setState({
	      current: e.key,
	    });
	  }
	render(){
		return( 
			<Menu onClick={this.handleClick.bind(this)}
		        style={{ width: 240 }}
		        defaultOpenKeys={['sub1']}
		        selectedKeys={[this.state.current]}
		        mode="inline"
		      >
		        <SubMenu key="sub1" title={<span><span>Navigation One</span></span>}>
		          <MenuItemGroup title="Item 1">
		            <Menu.Item key="1">Option 1</Menu.Item>
		            <Menu.Item key="2">Option 2</Menu.Item>
		          </MenuItemGroup>
		          <MenuItemGroup title="Item 2">
		            <Menu.Item key="3">Option 3</Menu.Item>
		            <Menu.Item key="4">Option 4</Menu.Item>
		          </MenuItemGroup>
		        </SubMenu>
		        <SubMenu key="sub2" title={<span><span>Navigation Two</span></span>}>
		          <Menu.Item key="5">Option 5</Menu.Item>
		          <Menu.Item key="6">Option 6</Menu.Item>
		          <SubMenu key="sub3" title="Submenu">
		            <Menu.Item key="7">Option 7</Menu.Item>
		            <Menu.Item key="8">Option 8</Menu.Item>
		          </SubMenu>
		        </SubMenu>
		        <SubMenu key="sub4" title={<span><span>Navigation Three</span></span>}>
		          <Menu.Item key="9">Option 9</Menu.Item>
		          <Menu.Item key="10">Option 10</Menu.Item>
		          <Menu.Item key="11">Option 11</Menu.Item>
		          <Menu.Item key="12">Option 12</Menu.Item>
		        </SubMenu>
		      </Menu>
		)
	}
}
class Demo6 extends Component {
	constructor(props, context) {
	    super(props, context);
	    this.state = {
	    	current: '1',
      		openKeys: []
	    }
	}
	handleClick(e) {
	    console.log('Clicked: ', e);
	    this.setState({ current: e.key });
	}
	onOpenChange(openKeys) {
	    const state = this.state;
	    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
	    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

	    let nextOpenKeys = [];
	    if (latestOpenKey) {
	      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
	    }
	    if (latestCloseKey) {
	      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
	    }
	    this.setState({ openKeys: nextOpenKeys });
	  }
	 getAncestorKeys(key) {
	    const map = {
	      sub3: ['sub2'],
	    };
	    return map[key] || [];
	  }
	render(){
		return( 
			<Menu
		        mode="inline"
		        openKeys={this.state.openKeys}
		        selectedKeys={[this.state.current]}
		        style={{ width: 240 }}
		        onOpenChange={this.onOpenChange.bind(this)}
		        onClick={this.handleClick.bind(this)}
		      >
		        <SubMenu key="sub1" title={<span><span>Navigation One</span></span>}>
		          <Menu.Item key="1">Option 1</Menu.Item>
		          <Menu.Item key="2">Option 2</Menu.Item>
		          <Menu.Item key="3">Option 3</Menu.Item>
		          <Menu.Item key="4">Option 4</Menu.Item>
		        </SubMenu>
		        <SubMenu key="sub2" title={<span><span>Navigation Two</span></span>}>
		          <Menu.Item key="5">Option 5</Menu.Item>
		          <Menu.Item key="6">Option 6</Menu.Item>
		          <SubMenu key="sub3" title="Submenu">
		            <Menu.Item key="7">Option 7</Menu.Item>
		            <Menu.Item key="8">Option 8</Menu.Item>
		          </SubMenu>
		        </SubMenu>
		        <SubMenu key="sub4" title={<span><span>Navigation Three</span></span>}>
		          <Menu.Item key="9">Option 9</Menu.Item>
		          <Menu.Item key="10">Option 10</Menu.Item>
		          <Menu.Item key="11">Option 11</Menu.Item>
		          <Menu.Item key="12">Option 12</Menu.Item>
		        </SubMenu>
		      </Menu>
		)
	}
}
class Demo7 extends Component {
	
	handleClick() {
		console.log('click', e);
	}
	render(){
		return( 
			<Menu onClick={this.handleClick.bind(this)} style={{ width: 240 }} mode="vertical">
			    <SubMenu key="sub1" title={<span><span>Navigation One</span></span>}>
			      <MenuItemGroup title="Item 1">
			        <Menu.Item key="1">Option 1</Menu.Item>
			        <Menu.Item key="2">Option 2</Menu.Item>
			      </MenuItemGroup>
			      <MenuItemGroup title="Iteom 2">
			        <Menu.Item key="3">Option 3</Menu.Item>
			        <Menu.Item key="4">Option 4</Menu.Item>
			      </MenuItemGroup>
			    </SubMenu>
			    <SubMenu key="sub2" title={<span><span>Navigation Two</span></span>}>
			      <Menu.Item key="5">Option 5</Menu.Item>
			      <Menu.Item key="6">Option 6</Menu.Item>
			      <SubMenu key="sub3" title="Submenu">
			        <Menu.Item key="7">Option 7</Menu.Item>
			        <Menu.Item key="8">Option 8</Menu.Item>
			      </SubMenu>
			    </SubMenu>
			    <SubMenu key="sub4" title={<span><span>Navigation Three</span></span>}>
			      <Menu.Item key="9">Option 9</Menu.Item>
			      <Menu.Item key="10">Option 10</Menu.Item>
			      <Menu.Item key="11">Option 11</Menu.Item>
			      <Menu.Item key="12">Option 12</Menu.Item>
			    </SubMenu>
			  </Menu>
		)
	}
}
class Demo8 extends Component {
	constructor(props, context) {
	    super(props, context);
	    this.state = {
	    	current : 1
	    }
	}
	handleClick(e) {
	    console.log('click ', e);
	    this.setState({
	      current: e.key,
	    });
	  }
	render(){
		return( 
			<Menu onClick={this.handleClick.bind(this)}
		        style={{ width: 240 }}
		        theme = "dark"
		        defaultOpenKeys={['sub1']}
		        selectedKeys={[this.state.current]}
		        mode="inline"
		      >
		        <SubMenu key="sub1" title={<span><span>Navigation One</span></span>}>
		          <MenuItemGroup title="Item 1">
		            <Menu.Item key="1">Option 1</Menu.Item>
		            <Menu.Item key="2">Option 2</Menu.Item>
		          </MenuItemGroup>
		          <MenuItemGroup title="Item 2">
		            <Menu.Item key="3">Option 3</Menu.Item>
		            <Menu.Item key="4">Option 4</Menu.Item>
		          </MenuItemGroup>
		        </SubMenu>
		        <SubMenu key="sub2" title={<span><span>Navigation Two</span></span>}>
		          <Menu.Item key="5">Option 5</Menu.Item>
		          <Menu.Item key="6">Option 6</Menu.Item>
		          <SubMenu key="sub3" title="Submenu">
		            <Menu.Item key="7">Option 7</Menu.Item>
		            <Menu.Item key="8">Option 8</Menu.Item>
		          </SubMenu>
		        </SubMenu>
		        <SubMenu key="sub4" title={<span><span>Navigation Three</span></span>}>
		          <Menu.Item key="9">Option 9</Menu.Item>
		          <Menu.Item key="10">Option 10</Menu.Item>
		          <Menu.Item key="11">Option 11</Menu.Item>
		          <Menu.Item key="12">Option 12</Menu.Item>
		        </SubMenu>
		      </Menu>
		)
	}
}



ReactDOM.render(<Demo1 />, document.getElementById('ReactNavbarDemo1'));
ReactDOM.render(<Demo4 />, document.getElementById('ReactNavbarDemo4'));
ReactDOM.render(<Demo5 />, document.getElementById('ReactNavbarDemo5'));
ReactDOM.render(<Demo6 />, document.getElementById('ReactNavbarDemo6'));
ReactDOM.render(<Demo7 />, document.getElementById('ReactNavbarDemo7'));
ReactDOM.render(<Demo8 />, document.getElementById('ReactNavbarDemo8'));