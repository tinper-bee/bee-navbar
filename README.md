# bee-navbars
[![npm version](https://img.shields.io/npm/v/bee-navbars.svg)](https://www.npmjs.com/package/bee-navbars)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-navbars/master.svg)](https://travis-ci.org/tinper-bee/bee-navbars)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-navbars.svg)](https://david-dm.org/tinper-bee/bee-navbars#info=devDependencies)

帮助用户依赖导航在各个页面中进行跳转。分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构


## 使用

使用单独的bee-navbars包
#### 组件引入
先进行下载bee-navbars包
```
npm install --save bee-navbars
```
组件调用
```js
import Navbar from 'bee-navbars';
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

React.render(<div>
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
					    <Navbar.Form pullRight>
					          <FormControl type="text" placeholder="Search" />
					    </Navbar.Form>
				    </Collapse>
				</Navbar>

			</div>
		)
	}
}
</div>, document.getElementById('target1');


React.render(<div>
class Demo2 extends Component {
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
</div>, document.getElementById('target2'));
```
#### 样式引入

//如果例子中引入其他组件，需将此组件样式引入

- 可以使用link引入dist目录下bee-Navbars.css
```
<link rel="stylesheet" href="./node_modules/build/bee-navbars.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/Navbars.scss"
//或是
import "./node_modules/build/bee-navbars.css"
```




## API

## Navbar

|参数|说明|类型|默认值|
|---|----|---|------|
|componentClass|自定义组件元素|element type|nav|
|expanded|设置导航条是否展开，针对小屏幕|bool|false|
|fixedBottom|设置固定在底部|bool|false|
|fixedTop|设置固定在顶部|bool|false|
|inverse|黑色背景|bool|false|
|onToggle|切换导航条显示隐藏 针对小屏幕|func|-|

## Navbar.Toggle

|参数|说明|类型|默认值|
|---|----|---|------|
|children|切换的文字或图标|element type|如例子|
|onClick|自定义方法|func|-|


## Menu

|参数|说明|类型|默认值|
|---|----|---|------|
|theme|主题颜色|String: light dark	light|
|mode|菜单类型，现在支持垂直、水平、和内嵌模式三种	|String: vertical horizontal inline|vertical|
|selectedKeys|当前选中的菜单项 key 数组|Array|-|	
|defaultSelectedKeys|初始选中的菜单项 key 数组|Array|-|	
|openKeys|当前展开的 SubMenu 菜单项 key 数组|Array|-|
|defaultOpenKeys|初始展开的 SubMenu 菜单项 key 数组|-|
|onOpenChange|SubMenu 展开/关闭的回调	Function(openKeys: string[])|noop|
|onSelect|被选中时调|	Function({ item, key, selectedKeys })|-|
|onDeselect|取消选中时调用，仅在 multiple 生效|	Function({ item, key, selectedKeys })|-|
|onClick|点击 menuitem 调用此函数，参数为 {item, key, keyPath}|	function|-|
|style|根节点样式	|Object|-|	

## Menu.Item

|参数|说明|类型|默认值|
|---|----|---|------|
|disabled|是否禁用|Boolean|false|
|key|item 的唯一标志|String|-|

##Menu.SubMenu

|参数|说明|类型|默认值|
|---|----|---|------|
|disabled|是否禁用|Boolean|false|
|key|唯一标志|String|	
|title|子菜单项值	|String or React.Element|
|children|子菜单的菜单项|(MenuItem or SubMenu)[]|
|onTitleClick|点击子菜单标题|Function({ eventKey, domEvent })|
|disabled|是否禁用|Boolean|false|
|key|item 的唯一标志|String|-|

#### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-navbars
$ cd bee-navbars
$ npm install
$ npm run dev
```
