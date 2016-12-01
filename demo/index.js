import  Navbar from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Dropdown } from 'bee-dropdown';
import Form from 'bee-form';
import FormControl from 'bee-form-control';
import FormGroup from 'bee-form-group';

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
	    	expanded : false,
	    	selectedkey: 1
	    }
	}
	onToggle(value) {
		this.setState({expanded:value});
	}
	handClick(value) {
		this.setState({selectedkey:value})
	}
	render(){
		return( 
			<div>
				<Navbar type="base" expanded={this.state.expanded} onToggle={this.onToggle.bind(this)}>
				    <Nav selectedkey={this.state.selectedkey} onSelect={this.handClick.bind(this)}>
					    <NavItem skey="1" href="#ddd">Navigation One</NavItem>
					    <NavItem skey="2" href="#dd">Navigation Two</NavItem>
					    <NavItem skey="3">
						    <Dropdown title="Dropdown" activeKey="A" useAnchor>
					            <Dropdown.Item eventKey="A" >Default Item</Dropdown.Item>
					            <Dropdown.Item eventKey="B" active>Active Item</Dropdown.Item>
					            <Dropdown.Item eventKey="C" disabled>Disabled Item</Dropdown.Item>
					            <Dropdown.Item divider></Dropdown.Item>
					            <Dropdown.Item href="http://www.pagurian.com">Link Item</Dropdown.Item>
					        </Dropdown>
				        </NavItem>
				        <NavItem skey="4" href="#d">Navigation Four</NavItem>
				    </Nav>
				</Navbar>

			</div>
		)
	}
}
class Demo2 extends Component {
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
						    <NavItem>
							    <Dropdown title="Dropdown" activeKey="A" useAnchor>
						            <Dropdown.Item eventKey="A" >Default Item</Dropdown.Item>
						            <Dropdown.Item eventKey="B" active>Active Item</Dropdown.Item>
						            <Dropdown.Item eventKey="C" disabled>Disabled Item</Dropdown.Item>
						            <Dropdown.Item divider></Dropdown.Item>
						            <Dropdown.Item href="http://www.pagurian.com">Link Item</Dropdown.Item>
						        </Dropdown>
					        </NavItem>
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
class Demo3 extends Component {
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
				<Navbar expanded={this.state.expanded} onToggle={this.onToggle.bind(this)}>
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
						    <NavItem>
							    <Dropdown title="Dropdown" activeKey="A" useAnchor>
						            <Dropdown.Item eventKey="A" >Default Item</Dropdown.Item>
						            <Dropdown.Item eventKey="B" active>Active Item</Dropdown.Item>
						            <Dropdown.Item eventKey="C" disabled>Disabled Item</Dropdown.Item>
						            <Dropdown.Item divider></Dropdown.Item>
						            <Dropdown.Item href="http://www.pagurian.com">Link Item</Dropdown.Item>
						        </Dropdown>
					        </NavItem>
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


ReactDOM.render(<Demo1 />, document.getElementById('ReactNavbarDemo1'));
ReactDOM.render(<Demo2 />, document.getElementById('ReactNavbarDemo2'));
ReactDOM.render(<Demo3 />, document.getElementById('ReactNavbarDemo3'));