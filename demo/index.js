
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../src';
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

const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


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
}/**
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
		        <Menu.Item key="alipay">
		          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
		        </Menu.Item>
		      </Menu>
		)
	}
}/**
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
}/**
 * @title 竖向手风琴Menu
 * @description 菜单展开是手风琴形式。
 */

class Demo4 extends Component {
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
}/**
 * @title 子菜单呼出形式Menu
 * @description 子菜单在右侧呼出形式显示。
 */

class Demo5 extends Component {
	
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
}var DemoArray = [{"example":<Demo1 />,"title":" Navbar基础样式","code":"/**\n * @title Navbar基础样式\n * @description 当屏幕小于768 菜单隐藏。\n */\n\n\nclass Demo1 extends Component {\n\tconstructor(props, context) {\n\t    super(props, context);\n\t    this.state = {\n\t    \texpanded : false\n\t    }\n\t}\n\tonToggle(value) {\n\t\tthis.setState({expanded:value});\n\t}\n\trender(){\n\t\treturn( \n\t\t\t<div>\n\t\t\t\t<Navbar inverse expanded={this.state.expanded} onToggle={this.onToggle.bind(this)}>\n\t\t\t\t    <Header>\n\t\t\t\t\t    <Brand>\n\t\t\t\t\t        \t<a href=\"#\">React-Bootstrap</a>\n\t\t\t\t\t    </Brand>\n\t\t\t\t\t    <Toggle />\n\t\t\t\t    </Header>\n\n\t\t\t\t    <Collapse>\n\t\t\t\t\t    <Nav>\n\t\t\t\t\t\t    <NavItem eventKey={1} href=\"#\">Link</NavItem>\n\t\t\t\t\t\t    <NavItem eventKey={2} href=\"#\">Link</NavItem>\n\t\t\t\t\t\t    \n\t\t\t\t\t    </Nav>\n\t\t\t\t\t    <Nav pullLeft>\n\t\t\t\t\t\t    <NavItem eventKey={1} href=\"#\">Link</NavItem>\n\t\t\t\t\t\t    <NavItem eventKey={2} href=\"#\">Link</NavItem>\n\t\t\t\t\t\t    \n\t\t\t\t\t    </Nav>\n\t\t\t\t\t    <Navbar.Form pullRight>\n\t\t\t\t\t          <FormControl type=\"text\" placeholder=\"Search\" />\n\t\t\t\t\t    </Navbar.Form>\n\t\t\t\t    </Collapse>\n\t\t\t\t</Navbar>\n\n\t\t\t</div>\n\t\t)\n\t}\n}","desc":" 当屏幕小于768 菜单隐藏。"},{"example":<Demo2 />,"title":" 横向Menu纯菜单导航","code":"/**\n * @title 横向Menu纯菜单导航\n * @description 更简洁，更方便\n */\n\nclass Demo2 extends Component {\n\tconstructor(props, context) {\n\t    super(props, context);\n\t    this.state = {\n\t    \tcurrent : 'mail'\n\t    }\n\t}\n\thandleClick(e) {\n\t    this.setState({\n\t      current: e.key,\n\t    });\n\t  }\n\trender(){\n\t\treturn( \n\t\t\t<Menu onClick={this.handleClick.bind(this)}\n\t\t        selectedKeys={[this.state.current]}\n\t\t        mode=\"horizontal\"\n\t\t      >\t\n\t\t        <Menu.Item key=\"mail\">\n\t\t          Navigation One\n\t\t        </Menu.Item>\n\t\t        <Menu.Item key=\"app\" disabled>\n\t\t          Navigation Two\n\t\t        </Menu.Item>\n\t\t        <SubMenu title={<span>Navigation Three - Submenu</span>}>\n\t\t          <MenuItemGroup title=\"Item 1\">\n\t\t            <Menu.Item key=\"setting:1\">Option 1</Menu.Item>\n\t\t            <Menu.Item key=\"setting:2\">Option 2</Menu.Item>\n\t\t          </MenuItemGroup>\n\t\t          <MenuItemGroup title=\"Item 2\">\n\t\t            <Menu.Item key=\"setting:3\">Option 3</Menu.Item>\n\t\t            <Menu.Item key=\"setting:4\">Option 4</Menu.Item>\n\t\t          </MenuItemGroup>\n\t\t        </SubMenu>\n\t\t        <Menu.Item key=\"alipay\">\n\t\t          <a href=\"https://ant.design\" target=\"_blank\" rel=\"noopener noreferrer\">Navigation Four - Link</a>\n\t\t        </Menu.Item>\n\t\t      </Menu>\n\t\t)\n\t}\n}","desc":" 更简洁，更方便"},{"example":<Demo3 />,"title":" 竖向Menu基础样式","code":"/**\n * @title 竖向Menu基础样式\n * @description 子菜单竖向显示，可折叠。\n */\n\nclass Demo3 extends Component {\n\tconstructor(props, context) {\n\t    super(props, context);\n\t    this.state = {\n\t    \tcurrent : 1\n\t    }\n\t}\n\thandleClick(e) {\n\t    console.log('click ', e);\n\t    this.setState({\n\t      current: e.key,\n\t    });\n\t  }\n\trender(){\n\t\treturn( \n\t\t\t<Menu onClick={this.handleClick.bind(this)}\n\t\t        style={{ width: 240 }}\n\t\t        defaultOpenKeys={['demo3sub1']}\n\t\t        selectedKeys={[this.state.current]}\n\t\t        mode=\"inline\"\n\t\t      >\n\t\t        <SubMenu key=\"demo3sub1\" title={<span><span>Navigation One</span></span>}>\n\t\t          <MenuItemGroup title=\"Item 1\">\n\t\t            <Menu.Item key=\"1\">Option 1</Menu.Item>\n\t\t            <Menu.Item key=\"2\">Option 2</Menu.Item>\n\t\t          </MenuItemGroup>\n\t\t          <MenuItemGroup title=\"Item 2\">\n\t\t            <Menu.Item key=\"3\">Option 3</Menu.Item>\n\t\t            <Menu.Item key=\"4\">Option 4</Menu.Item>\n\t\t          </MenuItemGroup>\n\t\t        </SubMenu>\n\t\t        <SubMenu key=\"demo3sub2\" title={<span><span>Navigation Two</span></span>}>\n\t\t          <Menu.Item key=\"5\">Option 5</Menu.Item>\n\t\t          <Menu.Item key=\"6\">Option 6</Menu.Item>\n\t\t          <SubMenu key=\"demo3sub3\" title=\"Submenu\">\n\t\t            <Menu.Item key=\"7\">Option 7</Menu.Item>\n\t\t            <Menu.Item key=\"8\">Option 8</Menu.Item>\n\t\t          </SubMenu>\n\t\t        </SubMenu>\n\t\t        <SubMenu key=\"demo3sub4\" title={<span><span>Navigation Three</span></span>}>\n\t\t          <Menu.Item key=\"9\">Option 9</Menu.Item>\n\t\t          <Menu.Item key=\"10\">Option 10</Menu.Item>\n\t\t          <Menu.Item key=\"11\">Option 11</Menu.Item>\n\t\t          <Menu.Item key=\"12\">Option 12</Menu.Item>\n\t\t        </SubMenu>\n\t\t      </Menu>\n\t\t)\n\t}\n}","desc":" 子菜单竖向显示，可折叠。"},{"example":<Demo4 />,"title":" 竖向手风琴Menu","code":"/**\n * @title 竖向手风琴Menu\n * @description 菜单展开是手风琴形式。\n */\n\nclass Demo4 extends Component {\n\tconstructor(props, context) {\n\t    super(props, context);\n\t    this.state = {\n\t    \tcurrent: '1',\n      \t\topenKeys: []\n\t    }\n\t}\n\thandleClick(e) {\n\t    console.log('Clicked: ', e);\n\t    this.setState({ current: e.key });\n\t}\n\tonOpenChange(openKeys) {\n\t    const state = this.state;\n\t    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));\n\t    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));\n\n\t    let nextOpenKeys = [];\n\t    if (latestOpenKey) {\n\t      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);\n\t    }\n\t    if (latestCloseKey) {\n\t      nextOpenKeys = this.getAncestorKeys(latestCloseKey);\n\t    }\n\t    this.setState({ openKeys: nextOpenKeys });\n\t  }\n\t getAncestorKeys(key) {\n\t    const map = {\n\t      sub3: ['sub2'],\n\t    };\n\t    return map[key] || [];\n\t  }\n\trender(){\n\t\treturn( \n\t\t\t<Menu\n\t\t        mode=\"inline\"\n\t\t        openKeys={this.state.openKeys}\n\t\t        selectedKeys={[this.state.current]}\n\t\t        style={{ width: 240 }}\n\t\t        onOpenChange={this.onOpenChange.bind(this)}\n\t\t        onClick={this.handleClick.bind(this)}\n\t\t      >\n\t\t        <SubMenu key=\"sub1\" title={<span><span>Navigation One</span></span>}>\n\t\t          <Menu.Item key=\"1\">Option 1</Menu.Item>\n\t\t          <Menu.Item key=\"2\">Option 2</Menu.Item>\n\t\t          <Menu.Item key=\"3\">Option 3</Menu.Item>\n\t\t          <Menu.Item key=\"4\">Option 4</Menu.Item>\n\t\t        </SubMenu>\n\t\t        <SubMenu key=\"sub2\" title={<span><span>Navigation Two</span></span>}>\n\t\t          <Menu.Item key=\"5\">Option 5</Menu.Item>\n\t\t          <Menu.Item key=\"6\">Option 6</Menu.Item>\n\t\t          <SubMenu key=\"sub3\" title=\"Submenu\">\n\t\t            <Menu.Item key=\"7\">Option 7</Menu.Item>\n\t\t            <Menu.Item key=\"8\">Option 8</Menu.Item>\n\t\t          </SubMenu>\n\t\t        </SubMenu>\n\t\t        <SubMenu key=\"sub4\" title={<span><span>Navigation Three</span></span>}>\n\t\t          <Menu.Item key=\"9\">Option 9</Menu.Item>\n\t\t          <Menu.Item key=\"10\">Option 10</Menu.Item>\n\t\t          <Menu.Item key=\"11\">Option 11</Menu.Item>\n\t\t          <Menu.Item key=\"12\">Option 12</Menu.Item>\n\t\t        </SubMenu>\n\t\t      </Menu>\n\t\t)\n\t}\n}","desc":" 菜单展开是手风琴形式。"},{"example":<Demo5 />,"title":" 子菜单呼出形式Menu","code":"/**\n * @title 子菜单呼出形式Menu\n * @description 子菜单在右侧呼出形式显示。\n */\n\nclass Demo5 extends Component {\n\t\n\thandleClick() {\n\t\tconsole.log('click', e);\n\t}\n\trender(){\n\t\treturn( \n\t\t\t<Menu onClick={this.handleClick.bind(this)} style={{ width: 240 }} mode=\"vertical\">\n\t\t\t    <SubMenu key=\"sub1\" title={<span><span>Navigation One</span></span>}>\n\t\t\t      <MenuItemGroup title=\"Item 1\">\n\t\t\t        <Menu.Item key=\"1\">Option 1</Menu.Item>\n\t\t\t        <Menu.Item key=\"2\">Option 2</Menu.Item>\n\t\t\t      </MenuItemGroup>\n\t\t\t      <MenuItemGroup title=\"Iteom 2\">\n\t\t\t        <Menu.Item key=\"3\">Option 3</Menu.Item>\n\t\t\t        <Menu.Item key=\"4\">Option 4</Menu.Item>\n\t\t\t      </MenuItemGroup>\n\t\t\t    </SubMenu>\n\t\t\t    <SubMenu key=\"sub2\" title={<span><span>Navigation Two</span></span>}>\n\t\t\t      <Menu.Item key=\"5\">Option 5</Menu.Item>\n\t\t\t      <Menu.Item key=\"6\">Option 6</Menu.Item>\n\t\t\t      <SubMenu key=\"sub3\" title=\"Submenu\">\n\t\t\t        <Menu.Item key=\"7\">Option 7</Menu.Item>\n\t\t\t        <Menu.Item key=\"8\">Option 8</Menu.Item>\n\t\t\t      </SubMenu>\n\t\t\t    </SubMenu>\n\t\t\t    <SubMenu key=\"sub4\" title={<span><span>Navigation Three</span></span>}>\n\t\t\t      <Menu.Item key=\"9\">Option 9</Menu.Item>\n\t\t\t      <Menu.Item key=\"10\">Option 10</Menu.Item>\n\t\t\t      <Menu.Item key=\"11\">Option 11</Menu.Item>\n\t\t\t      <Menu.Item key=\"12\">Option 12</Menu.Item>\n\t\t\t    </SubMenu>\n\t\t\t  </Menu>\n\t\t)\n\t}\n}","desc":" 子菜单在右侧呼出形式显示。"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0,borderColor: "transparent"}} >
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
