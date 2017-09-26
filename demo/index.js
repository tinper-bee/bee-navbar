
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../src';
import FormControl from 'bee-form-control';
import Icon from 'bee-icon';
import Badge from 'bee-badge';


const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Collapse = Navbar.Collapse;
const Toggle = Navbar.Toggle;
const Nav = Navbar.Nav;

const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" Navbar基础样式","code":"/**\n * @title Navbar基础样式\n * @description 最常用简易navbar\n *  const NavItem = Navbar.NavItem;\n *  const Header = Navbar.Header;\n *  const Brand = Navbar.Brand;\n *  const Collapse = Navbar.Collapse;\n *  const Toggle = Navbar.Toggle;\n *  const Nav = Navbar.Nav;\n */\n\n\nimport React, { Component } from 'react';\nimport Navbar from 'bee-navbar';\n\n\n\nconst NavItem = Navbar.NavItem;\nconst Header = Navbar.Header;\nconst Brand = Navbar.Brand;\nconst Collapse = Navbar.Collapse;\nconst Toggle = Navbar.Toggle;\nconst Nav = Navbar.Nav;\n\nclass Demo1 extends Component {\n    constructor(props, context) {\n        super(props, context);\n        this.state = {\n            selectedkey: 1\n        }\n    }\n    handleSelect(index) {\n        this.setState({selectedkey: index});\n    }   \n    render() {\n        return (\n            <div>\n                <Navbar>\n                    <Header>\n                        <Brand>\n                            <a href=\"#\">React-FED</a>\n                        </Brand>\n                    </Header>\n                    <Nav selectedkey={this.state.selectedkey} onSelect={this.handleSelect.bind(this)}>\n                        <NavItem eventKey={1}>选项1</NavItem>\n                        <NavItem eventKey={2}>\n                            选项2\n                        </NavItem>\n                        <NavItem eventKey={3}>\n                            选项3\n                        </NavItem>\n                    </Nav>\n                </Navbar>\n            </div>\n        )\n    }\n}\n\n","desc":" 最常用简易navbar"},{"example":<Demo2 />,"title":" Navbar基础样式","code":"/**\n * @title Navbar基础样式\n * @description 当屏幕小于768 菜单隐藏。\n *  const NavItem = Navbar.NavItem;\n *  const Header = Navbar.Header;\n *  const Brand = Navbar.Brand;\n *  const Collapse = Navbar.Collapse;\n *  const Toggle = Navbar.Toggle;\n *  const Nav = Navbar.Nav;\n * 添加Collapse组件是在bee-transition的子组件组件上做的扩展 \n * 此例子结合了常用的表单场景\n */\n\n\nimport React, { Component } from 'react';\nimport Navbar from 'bee-navbar';\nimport FormControl from 'bee-form-control';\n\n\nconst NavItem = Navbar.NavItem;\nconst Header = Navbar.Header;\nconst Brand = Navbar.Brand;\nconst Collapse = Navbar.Collapse;\nconst Toggle = Navbar.Toggle;\nconst Nav = Navbar.Nav;\n\nclass Demo2 extends Component {\n    constructor(props, context) {\n        super(props, context);\n        this.state = {\n            expanded: false,\n            selectedkey: 1\n        }\n    }\n\n    onToggle(value) {\n        this.setState({expanded: value});\n    }\n\n    handleSelect(index) {\n        this.setState({selectedkey: index});\n    }\n\n    render() {\n        return (\n            <div>\n                <Navbar inverse expanded={this.state.expanded} onToggle={this.onToggle.bind(this)}>\n                    <Header>\n                        <Brand>\n                            <a href=\"#\">React-FED</a>\n                        </Brand>\n                        <Toggle />\n                    </Header>\n\n                    <Collapse>\n                        <Nav selectedkey={this.state.selectedkey} onSelect={this.handleSelect.bind(this)}>\n                            <NavItem eventKey={1}>选项</NavItem>\n                            <NavItem href=\"#\" eventKey={2}>\n                                选项\n                            </NavItem>\n                        </Nav>\n                        \n                        <Navbar.Form pullRight>\n                            <FormControl type=\"text\" placeholder=\"Search\"/>\n                        </Navbar.Form>\n                    </Collapse>\n                </Navbar>\n            </div>\n        )\n    }\n}\n\n","desc":" 当屏幕小于768 菜单隐藏。"}]


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
