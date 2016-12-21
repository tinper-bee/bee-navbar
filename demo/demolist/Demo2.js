/**
 * @title 横向Menu纯菜单导航
 * @description 更简洁，更方便
 */

class Demo2 extends Component {
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
		      </Menu>
		)
	}
}