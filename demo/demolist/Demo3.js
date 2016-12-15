/**
 * @title 竖向Menu基础样式
 * @description 子菜单竖向显示，可折叠。
 */

class Demo3 extends Component {
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
		        defaultOpenKeys={['demo3sub1']}
		        selectedKeys={[this.state.current]}
		        mode="inline"
		      >
		        <SubMenu key="demo3sub1" title={<span><span>Navigation One</span></span>}>
		          <MenuItemGroup title="Item 1">
		            <Menu.Item key="1">Option 1</Menu.Item>
		            <Menu.Item key="2">Option 2</Menu.Item>
		          </MenuItemGroup>
		          <MenuItemGroup title="Item 2">
		            <Menu.Item key="3">Option 3</Menu.Item>
		            <Menu.Item key="4">Option 4</Menu.Item>
		          </MenuItemGroup>
		        </SubMenu>
		        <SubMenu key="demo3sub2" title={<span><span>Navigation Two</span></span>}>
		          <Menu.Item key="5">Option 5</Menu.Item>
		          <Menu.Item key="6">Option 6</Menu.Item>
		          <SubMenu key="demo3sub3" title="Submenu">
		            <Menu.Item key="7">Option 7</Menu.Item>
		            <Menu.Item key="8">Option 8</Menu.Item>
		          </SubMenu>
		        </SubMenu>
		        <SubMenu key="demo3sub4" title={<span><span>Navigation Three</span></span>}>
		          <Menu.Item key="9">Option 9</Menu.Item>
		          <Menu.Item key="10">Option 10</Menu.Item>
		          <Menu.Item key="11">Option 11</Menu.Item>
		          <Menu.Item key="12">Option 12</Menu.Item>
		        </SubMenu>
		      </Menu>
		)
	}
}