/**
 * @title Navbar基础样式
 * @description 当屏幕小于768 菜单隐藏。
 */


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