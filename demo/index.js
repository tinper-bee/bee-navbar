
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../src';
import FormControl from 'bee-form-control';
import Icon from 'bee-icon';
import Badge from 'bee-badge';

const Menu = Navbar.Menu;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Collapse = Navbar.Collapse;
const Toggle = Navbar.Toggle;
const Nav = Navbar.Nav;
const SideContainer = Navbar.SideContainer;

const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-down"></i>;


/**
 * @title Navbar基础样式
 * @description 当屏幕小于768 菜单隐藏。
 */


class Demo1 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expanded: false
        }
    }

    onToggle(value) {
        this.setState({expanded: value});
    }

    render() {
        return (
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
                            <FormControl type="text" placeholder="Search"/>
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
            current: 'mail'
        }
    }

    handleClick(e) {
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
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
}/**
 * @title 竖向Menu基础样式
 * @description 子菜单竖向显示，可折叠。
 */

class Demo3 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            current: 1
        }
    }

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <Menu onClick={this.handleClick.bind(this)} style={{ width: 240 }} defaultOpenKeys={['demo3sub1']} selectedKeys={[this.state.current]} mode="inline">
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
        this.setState({current: e.key});
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
        this.setState({openKeys: nextOpenKeys});
    }
    getAncestorKeys(key) {
        const map = {
            sub3: ['sub2'],
        };
        return map[key] || [];
    }
    render() {
        return (
            <Menu mode="inline" openKeys={this.state.openKeys} selectedKeys={[this.state.current]} style={{ width: 240 }} onOpenChange={this.onOpenChange.bind(this)} onClick={this.handleClick.bind(this)}>
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
    render() {
        return (
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
}/**
 * @title Navbar基础样式
 * @description 当屏幕小于768 菜单隐藏。
 */


class Demo6 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expanded: false,
            current: 1
        }
    }

    onToggle(value) {
        this.setState({expanded: value});
    }

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    }

    render() {
        return (
            <div id="demo6">
                <Navbar expanded={this.state.expanded} onToggle={this.onToggle.bind(this)}>
                    <Toggle show/>
                    <Header>
                        <Brand>
                            <a href="#"><img style={{width:140}} src="http://design.yyuap.com/logos/logox.png"/></a>
                        </Brand>
                    </Header>

                    <Nav pullRight>
                        <NavItem eventKey={1}><FormControl type="text" placeholder="Search"/></NavItem>
                        <NavItem eventKey={2} href="#"><Badge dataBadge="4" colors="warning"><Icon
                            type="uf-bell"></Icon></Badge></NavItem>
                        <NavItem eventKey={3} href="#"><Icon type="uf-bubble-o"></Icon></NavItem>
                        <Menu mode="horizontal" className="dropdown">
                            <SubMenu title={<span>刘认华<Icon type="uf-triangle-down"></Icon></span>}>
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Nav>
                </Navbar>
                <SideContainer onToggle={this.onToggle.bind(this)} expanded={this.state.expanded}>
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
                </SideContainer>
            </div>
        )
    }
}var DemoArray = [{"example":<Demo1 />,"title":" Navbar基础样式","code":"/**\n * @title Navbar基础样式\n * @description 当屏幕小于768 菜单隐藏。\n */\n\n\nclass Demo1 extends Component {\n    constructor(props, context) {\n        super(props, context);\n        this.state = {\n            expanded: false\n        }\n    }\n\n    onToggle(value) {\n        this.setState({expanded: value});\n    }\n\n    render() {\n        return (\n            <div>\n                <Navbar inverse expanded={this.state.expanded} onToggle={this.onToggle.bind(this)}>\n                    <Header>\n                        <Brand>\n                            <a href=\"#\">React-Bootstrap</a>\n                        </Brand>\n                        <Toggle />\n                    </Header>\n\n                    <Collapse>\n                        <Nav>\n                            <NavItem eventKey={1} href=\"#\">Link</NavItem>\n                            <NavItem eventKey={2} href=\"#\">Link</NavItem>\n                        </Nav>\n                        <Nav pullLeft>\n                            <NavItem eventKey={1} href=\"#\">Link</NavItem>\n                            <NavItem eventKey={2} href=\"#\">Link</NavItem>\n                        </Nav>\n                        <Navbar.Form pullRight>\n                            <FormControl type=\"text\" placeholder=\"Search\"/>\n                        </Navbar.Form>\n                    </Collapse>\n                </Navbar>\n            </div>\n        )\n    }\n}","desc":" 当屏幕小于768 菜单隐藏。"},{"example":<Demo2 />,"title":" 横向Menu纯菜单导航","code":"/**\n * @title 横向Menu纯菜单导航\n * @description 更简洁，更方便\n */\n\nclass Demo2 extends Component {\n    constructor(props, context) {\n        super(props, context);\n        this.state = {\n            current: 'mail'\n        }\n    }\n\n    handleClick(e) {\n        this.setState({\n            current: e.key,\n        });\n    }\n\n    render() {\n        return (\n            <Menu onClick={this.handleClick.bind(this)}\n                  selectedKeys={[this.state.current]}\n                  mode=\"horizontal\"\n                >\n                <Menu.Item key=\"mail\">\n                    Navigation One\n                </Menu.Item>\n                <Menu.Item key=\"app\" disabled>\n                    Navigation Two\n                </Menu.Item>\n                <SubMenu title={<span>Navigation Three - Submenu</span>}>\n                    <MenuItemGroup title=\"Item 1\">\n                        <Menu.Item key=\"setting:1\">Option 1</Menu.Item>\n                        <Menu.Item key=\"setting:2\">Option 2</Menu.Item>\n                    </MenuItemGroup>\n                    <MenuItemGroup title=\"Item 2\">\n                        <Menu.Item key=\"setting:3\">Option 3</Menu.Item>\n                        <Menu.Item key=\"setting:4\">Option 4</Menu.Item>\n                    </MenuItemGroup>\n                </SubMenu>\n            </Menu>\n        )\n    }\n}","desc":" 更简洁，更方便"},{"example":<Demo3 />,"title":" 竖向Menu基础样式","code":"/**\n * @title 竖向Menu基础样式\n * @description 子菜单竖向显示，可折叠。\n */\n\nclass Demo3 extends Component {\n    constructor(props, context) {\n        super(props, context);\n        this.state = {\n            current: 1\n        }\n    }\n\n    handleClick(e) {\n        console.log('click ', e);\n        this.setState({\n            current: e.key,\n        });\n    }\n\n    render() {\n        return (\n            <Menu onClick={this.handleClick.bind(this)} style={{ width: 240 }} defaultOpenKeys={['demo3sub1']} selectedKeys={[this.state.current]} mode=\"inline\">\n                <SubMenu key=\"demo3sub1\" title={<span><span>Navigation One</span></span>}>\n                    <MenuItemGroup title=\"Item 1\">\n                        <Menu.Item key=\"1\">Option 1</Menu.Item>\n                        <Menu.Item key=\"2\">Option 2</Menu.Item>\n                    </MenuItemGroup>\n                    <MenuItemGroup title=\"Item 2\">\n                        <Menu.Item key=\"3\">Option 3</Menu.Item>\n                        <Menu.Item key=\"4\">Option 4</Menu.Item>\n                    </MenuItemGroup>\n                </SubMenu>\n                <SubMenu key=\"demo3sub2\" title={<span><span>Navigation Two</span></span>}>\n                    <Menu.Item key=\"5\">Option 5</Menu.Item>\n                    <Menu.Item key=\"6\">Option 6</Menu.Item>\n                    <SubMenu key=\"demo3sub3\" title=\"Submenu\">\n                        <Menu.Item key=\"7\">Option 7</Menu.Item>\n                        <Menu.Item key=\"8\">Option 8</Menu.Item>\n                    </SubMenu>\n                </SubMenu>\n                <SubMenu key=\"demo3sub4\" title={<span><span>Navigation Three</span></span>}>\n                    <Menu.Item key=\"9\">Option 9</Menu.Item>\n                    <Menu.Item key=\"10\">Option 10</Menu.Item>\n                    <Menu.Item key=\"11\">Option 11</Menu.Item>\n                    <Menu.Item key=\"12\">Option 12</Menu.Item>\n                </SubMenu>\n            </Menu>\n        )\n    }\n}","desc":" 子菜单竖向显示，可折叠。"},{"example":<Demo4 />,"title":" 竖向手风琴Menu","code":"/**\n * @title 竖向手风琴Menu\n * @description 菜单展开是手风琴形式。\n */\n\nclass Demo4 extends Component {\n    constructor(props, context) {\n        super(props, context);\n        this.state = {\n            current: '1',\n            openKeys: []\n        }\n    }\n    handleClick(e) {\n        console.log('Clicked: ', e);\n        this.setState({current: e.key});\n    }\n    onOpenChange(openKeys) {\n        const state = this.state;\n        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));\n        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));\n\n        let nextOpenKeys = [];\n        if (latestOpenKey) {\n            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);\n        }\n        if (latestCloseKey) {\n            nextOpenKeys = this.getAncestorKeys(latestCloseKey);\n        }\n        this.setState({openKeys: nextOpenKeys});\n    }\n    getAncestorKeys(key) {\n        const map = {\n            sub3: ['sub2'],\n        };\n        return map[key] || [];\n    }\n    render() {\n        return (\n            <Menu mode=\"inline\" openKeys={this.state.openKeys} selectedKeys={[this.state.current]} style={{ width: 240 }} onOpenChange={this.onOpenChange.bind(this)} onClick={this.handleClick.bind(this)}>\n                <SubMenu key=\"sub1\" title={<span><span>Navigation One</span></span>}>\n                    <Menu.Item key=\"1\">Option 1</Menu.Item>\n                    <Menu.Item key=\"2\">Option 2</Menu.Item>\n                    <Menu.Item key=\"3\">Option 3</Menu.Item>\n                    <Menu.Item key=\"4\">Option 4</Menu.Item>\n                </SubMenu>\n                <SubMenu key=\"sub2\" title={<span><span>Navigation Two</span></span>}>\n                    <Menu.Item key=\"5\">Option 5</Menu.Item>\n                    <Menu.Item key=\"6\">Option 6</Menu.Item>\n                    <SubMenu key=\"sub3\" title=\"Submenu\">\n                        <Menu.Item key=\"7\">Option 7</Menu.Item>\n                        <Menu.Item key=\"8\">Option 8</Menu.Item>\n                    </SubMenu>\n                </SubMenu>\n                <SubMenu key=\"sub4\" title={<span><span>Navigation Three</span></span>}>\n                    <Menu.Item key=\"9\">Option 9</Menu.Item>\n                    <Menu.Item key=\"10\">Option 10</Menu.Item>\n                    <Menu.Item key=\"11\">Option 11</Menu.Item>\n                    <Menu.Item key=\"12\">Option 12</Menu.Item>\n                </SubMenu>\n            </Menu>\n        )\n    }\n}","desc":" 菜单展开是手风琴形式。"},{"example":<Demo5 />,"title":" 子菜单呼出形式Menu","code":"/**\n * @title 子菜单呼出形式Menu\n * @description 子菜单在右侧呼出形式显示。\n */\n\nclass Demo5 extends Component {\n\n    handleClick() {\n        console.log('click', e);\n    }\n    render() {\n        return (\n            <Menu onClick={this.handleClick.bind(this)} style={{ width: 240 }} mode=\"vertical\">\n                <SubMenu key=\"sub1\" title={<span><span>Navigation One</span></span>}>\n                    <MenuItemGroup title=\"Item 1\">\n                        <Menu.Item key=\"1\">Option 1</Menu.Item>\n                        <Menu.Item key=\"2\">Option 2</Menu.Item>\n                    </MenuItemGroup>\n                    <MenuItemGroup title=\"Iteom 2\">\n                        <Menu.Item key=\"3\">Option 3</Menu.Item>\n                        <Menu.Item key=\"4\">Option 4</Menu.Item>\n                    </MenuItemGroup>\n                </SubMenu>\n                <SubMenu key=\"sub2\" title={<span><span>Navigation Two</span></span>}>\n                    <Menu.Item key=\"5\">Option 5</Menu.Item>\n                    <Menu.Item key=\"6\">Option 6</Menu.Item>\n                    <SubMenu key=\"sub3\" title=\"Submenu\">\n                        <Menu.Item key=\"7\">Option 7</Menu.Item>\n                        <Menu.Item key=\"8\">Option 8</Menu.Item>\n                    </SubMenu>\n                </SubMenu>\n                <SubMenu key=\"sub4\" title={<span><span>Navigation Three</span></span>}>\n                    <Menu.Item key=\"9\">Option 9</Menu.Item>\n                    <Menu.Item key=\"10\">Option 10</Menu.Item>\n                    <Menu.Item key=\"11\">Option 11</Menu.Item>\n                    <Menu.Item key=\"12\">Option 12</Menu.Item>\n                </SubMenu>\n            </Menu>\n        )\n    }\n}","desc":" 子菜单在右侧呼出形式显示。"},{"example":<Demo6 />,"title":" Navbar基础样式","code":"/**\n * @title Navbar基础样式\n * @description 当屏幕小于768 菜单隐藏。\n */\n\n\nclass Demo6 extends Component {\n    constructor(props, context) {\n        super(props, context);\n        this.state = {\n            expanded: false,\n            current: 1\n        }\n    }\n\n    onToggle(value) {\n        this.setState({expanded: value});\n    }\n\n    handleClick(e) {\n        console.log('click ', e);\n        this.setState({\n            current: e.key\n        });\n    }\n\n    render() {\n        return (\n            <div id=\"demo6\">\n                <Navbar expanded={this.state.expanded} onToggle={this.onToggle.bind(this)}>\n                    <Toggle show/>\n                    <Header>\n                        <Brand>\n                            <a href=\"#\"><img style={{width:140}} src=\"http://design.yyuap.com/logos/logox.png\"/></a>\n                        </Brand>\n                    </Header>\n\n                    <Nav pullRight>\n                        <NavItem eventKey={1}><FormControl type=\"text\" placeholder=\"Search\"/></NavItem>\n                        <NavItem eventKey={2} href=\"#\"><Badge dataBadge=\"4\" colors=\"warning\"><Icon\n                            type=\"uf-bell\"></Icon></Badge></NavItem>\n                        <NavItem eventKey={3} href=\"#\"><Icon type=\"uf-bubble-o\"></Icon></NavItem>\n                        <Menu mode=\"horizontal\" className=\"dropdown\">\n                            <SubMenu title={<span>刘认华<Icon type=\"uf-triangle-down\"></Icon></span>}>\n                                <Menu.Item key=\"setting:1\">Option 1</Menu.Item>\n                                <Menu.Item key=\"setting:2\">Option 2</Menu.Item>\n                                <Menu.Item key=\"setting:3\">Option 3</Menu.Item>\n                                <Menu.Item key=\"setting:4\">Option 4</Menu.Item>\n                            </SubMenu>\n                        </Menu>\n                    </Nav>\n                </Navbar>\n                <SideContainer onToggle={this.onToggle.bind(this)} expanded={this.state.expanded}>\n                    <Menu onClick={this.handleClick.bind(this)}\n                          style={{ width: 240 }}\n                          defaultOpenKeys={['demo3sub1']}\n                          selectedKeys={[this.state.current]}\n                          mode=\"inline\"\n                        >\n                        <SubMenu key=\"demo3sub1\" title={<span><span>Navigation One</span></span>}>\n                            <MenuItemGroup title=\"Item 1\">\n                                <Menu.Item key=\"1\">Option 1</Menu.Item>\n                                <Menu.Item key=\"2\">Option 2</Menu.Item>\n                            </MenuItemGroup>\n                            <MenuItemGroup title=\"Item 2\">\n                                <Menu.Item key=\"3\">Option 3</Menu.Item>\n                                <Menu.Item key=\"4\">Option 4</Menu.Item>\n                            </MenuItemGroup>\n                        </SubMenu>\n                        <SubMenu key=\"demo3sub2\" title={<span><span>Navigation Two</span></span>}>\n                            <Menu.Item key=\"5\">Option 5</Menu.Item>\n                            <Menu.Item key=\"6\">Option 6</Menu.Item>\n                            <SubMenu key=\"demo3sub3\" title=\"Submenu\">\n                                <Menu.Item key=\"7\">Option 7</Menu.Item>\n                                <Menu.Item key=\"8\">Option 8</Menu.Item>\n                            </SubMenu>\n                        </SubMenu>\n                        <SubMenu key=\"demo3sub4\" title={<span><span>Navigation Three</span></span>}>\n                            <Menu.Item key=\"9\">Option 9</Menu.Item>\n                            <Menu.Item key=\"10\">Option 10</Menu.Item>\n                            <Menu.Item key=\"11\">Option 11</Menu.Item>\n                            <Menu.Item key=\"12\">Option 12</Menu.Item>\n                        </SubMenu>\n                    </Menu>\n                </SideContainer>\n            </div>\n        )\n    }\n}","desc":" 当屏幕小于768 菜单隐藏。"}]


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
